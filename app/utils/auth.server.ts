import { Authenticator } from "remix-auth"
import { Auth0ExtraParams, Auth0Profile, Auth0Strategy } from "remix-auth-auth0"
import invariant from "tiny-invariant"
import { getRequiredServerEnvVar } from "./environment"
import { sessionStorage } from "./session.server"
import { initPortalClient } from "~/models/portal/portal.server"
import { initAdminPortal } from "~/utils/admin"

// Create an instance of the authenticator, pass a generic with what your
// strategies will return and will be stored in the session
export const authenticator = new Authenticator<{
  accessToken: string
  refreshToken: string
  extraParams: Auth0ExtraParams
  profile: Auth0Profile
  portalUserId: string
}>(sessionStorage)

export type User = {
  accessToken: string
  refreshToken: string
  extraParams: Auth0ExtraParams
  profile: Auth0Profile
  portalUserId: string
}

let auth0Strategy = new Auth0Strategy(
  {
    callbackURL: "/api/auth/auth0/callback",
    clientID: getRequiredServerEnvVar("AUTH0_CLIENT_ID"),
    clientSecret: getRequiredServerEnvVar("AUTH0_CLIENT_SECRET"),
    domain: getRequiredServerEnvVar("AUTH0_DOMAIN"),
    audience: getRequiredServerEnvVar("AUTH0_AUDIENCE"),
    scope: getRequiredServerEnvVar("AUTH0_SCOPE"),
  },
  async ({ accessToken, refreshToken, extraParams, profile }): Promise<User> => {
    const portal = initPortalClient({ token: accessToken })
    const getPortalUserIdResponse = await portal.getPortalUserID().catch((e) => {
      console.log(e)
    })

    let portalUserId = getPortalUserIdResponse?.getPortalUserID

    // handle edge case where user could have signed up via auth0 and yet not have an internal portalUserId
    if (!portalUserId) {
      const email = profile?._json?.email
      const providerUserID = profile?.id

      invariant(email, "email is not found")
      invariant(providerUserID, "providerUserID is not found")

      const portalAdmin = await initAdminPortal(portal)

      const user = await portalAdmin.adminCreatePortalUser({
        email,
        providerUserID,
      })

      portalUserId = user.adminCreatePortalUser.portalUserID
    }

    return { accessToken, refreshToken, extraParams, profile, portalUserId }
  },
)

authenticator.use(auth0Strategy)
