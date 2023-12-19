import { Burger, Flex, MediaQuery } from "@pokt-foundation/pocket-blocks"
import AccountDrawer from "~/components/AccountDrawer"
import { NovuNotificationPopover } from "~/components/AppHeader/NovuNotificationPopover"
import { Account, User } from "~/models/portal/sdk"
import { AnalyticActions, AnalyticCategories, trackEvent } from "~/utils/analytics"

type HeaderProps = {
  user?: User
  accounts: Account[]
  opened: boolean
  hasPendingInvites: boolean
  onOpen: (o: boolean) => void
}

export const AppHeader = ({ user, opened, onOpen, hasPendingInvites }: HeaderProps) => {
  return (
    <>
      <Flex align="center" gap="sm" h="100%" justify="flex-end" p="md">
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            mr="xl"
            opened={opened}
            size="sm"
            onClick={() => {
              onOpen(!opened)
              trackEvent({
                category: AnalyticCategories.user,
                action: AnalyticActions.user_header_menu,
                label: `${opened ? "Close" : "Open"} menu`,
              })
            }}
          />
        </MediaQuery>
        {user && <NovuNotificationPopover subscriberId={user.portalUserID} />}
        <AccountDrawer hasPendingInvites={hasPendingInvites} user={user} />
      </Flex>
    </>
  )
}

export default AppHeader
