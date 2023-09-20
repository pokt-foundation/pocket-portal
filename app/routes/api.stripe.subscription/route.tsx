import { ActionFunction, json } from "@remix-run/node"
import invariant from "tiny-invariant"
import { initPortalClient } from "~/models/portal/portal.server"
import { PayPlanType, PayPlanTypeV2 } from "~/models/portal/sdk"
import { getSubscription, stripe, Stripe } from "~/models/stripe/stripe.server"
import { updatePlan } from "~/routes/api.admin.update-plan/route"
import { getErrorMessage } from "~/utils/catchError"
import { getPoktId, requireUser } from "~/utils/user.server"

export type StripeDeleteActionData =
  | {
      error: false
      subscription: Stripe.Subscription
    }
  | {
      error: true
      message: string
    }

export const action: ActionFunction = async ({ request }) => {
  const user = await requireUser(request)
  invariant(user.user.auth0ID && user.user.email, "user not found")
  const userId = await getPoktId(user.user.auth0ID)
  const portal = initPortalClient({ token: user.accessToken })
  const formData = await request.formData()
  const appId = formData.get("app-id")
  const renew = formData.get("subscription-renew")
  const action = renew !== "true"

  try {
    invariant(appId, "app id not found")
    const { endpoint } = await portal.endpoint({
      endpointID: appId as string,
    })
    const uEmail = user.user.email ?? ""
    const subscription = await getSubscription(uEmail, endpoint.id, userId)

    if (subscription) {
      const updatedSubscription = await stripe.subscriptions.update(subscription.id, {
        cancel_at_period_end: action,
      })
      if (updatedSubscription) {
        await updatePlan({
          id: appId as string,
          type: action
            ? (PayPlanType.FreetierV0 as unknown as PayPlanTypeV2.FreetierV0)
            : (PayPlanType.PayAsYouGoV0 as unknown as PayPlanTypeV2.PayAsYouGoV0),
        })

        return json({
          error: false,
          subscription: updatedSubscription,
        })
      }
    }

    throw new Error("no subscription")
  } catch (error) {
    return json({
      error: true,
      message: getErrorMessage(error),
    })
  }
}
