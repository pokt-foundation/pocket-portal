import { Button, CloseButton, Stack } from "@mantine/core"
import { LoaderFunction, MetaFunction, redirect } from "@remix-run/node"
import { Link, NavLink, useParams } from "@remix-run/react"
import invariant from "tiny-invariant"
import { EmptyState } from "~/components/EmptyState"
import { initPortalClient } from "~/models/portal/portal.server"
import useCommonStyles from "~/styles/commonStyles"
import { isAccountWithinAppLimit } from "~/utils/accountUtils"
import { seo_title_append } from "~/utils/seo"
import { requireUser } from "~/utils/user.server"

export const meta: MetaFunction = () => {
  return [
    {
      title: `App Creation Limit Exceeded ${seo_title_append}`,
    },
  ]
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = await requireUser(request)
  const { accountId } = params

  const portal = initPortalClient({ token: user.accessToken })
  invariant(accountId, "AccountId must be set")
  const getUserAccountResponse = await portal
    .getUserAccount({ accountID: accountId, accepted: true })
    .catch((e) => {
      console.log(e)
    })

  if (!getUserAccountResponse) {
    return redirect(`/account/${params.accountId}`)
  }

  const userAccount = getUserAccountResponse.getUserAccount
  const canCreateApp = isAccountWithinAppLimit(userAccount)
  if (canCreateApp) {
    return redirect(`/account/${params.accountId}`)
  }

  return null
}

export default function AppLimitExceeded() {
  const { classes: commonClasses } = useCommonStyles()
  const params = useParams()
  return (
    <Stack align="center" justify="center" m={42}>
      <CloseButton aria-label="Discard" component={NavLink} ml="auto" to="/account" />
      <EmptyState
        alt="App limit exceeded"
        callToAction={
          <Button
            className={commonClasses.grayOutline}
            color="gray"
            component={Link}
            mt="xs"
            prefetch="intent"
            size="lg"
            to={`/account/${params.accountId}`}
            variant="outline"
            w={156}
          >
            Discard
          </Button>
        }
        imgHeight={216}
        imgSrc="/app-limit-exceeded.svg"
        imgWidth={270}
        subtitle="At the moment, we're limiting users to two applications as we're gearing up for a major release that will bring exciting new features and improvements."
        title="Currently you are only able to create two applications."
      />
    </Stack>
  )
}
