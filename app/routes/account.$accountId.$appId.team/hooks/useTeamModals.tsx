import { showNotification } from "@mantine/notifications"
import { Text } from "@pokt-foundation/pocket-blocks"
import { useFetcher, useParams } from "@remix-run/react"
import { useEffect } from "react"
import useModals from "~/hooks/useModals"
import { RoleName } from "~/models/portal/sdk"

type useTeamModalsProps = {
  appId: string
}

const useTeamModals = ({ appId }: useTeamModalsProps) => {
  const fetcher = useFetcher()
  const { openConfirmationModal } = useModals()
  const { accountId } = useParams()

  useEffect(() => {
    if (!fetcher.data) return

    showNotification({
      message: fetcher.data.message,
    })
  }, [fetcher.data])

  const removeTeamMember = (userId: string, email: string) => {
    fetcher.submit(
      {
        user_delete: "true",
        user_id: userId,
        user_email: email,
      },
      {
        method: "POST",
        action: `/account/${accountId}/${appId}/team`,
      },
    )
  }

  const leaveTeam = (userId: string) => {
    console.log("Leave team....", userId)
  }

  const changeMemberRole = (userId: string, role: RoleName, email: string) => {
    fetcher.submit(
      {
        user_update: "true",
        user_id: userId,
        user_role: role,
        user_email: email,
      },
      {
        method: "POST",
        action: `/account/${accountId}/${appId}/team`,
      },
    )
  }

  const resendEmail = (email: string) => {
    fetcher.submit(
      {
        user_resend: "true",
        user_email: email,
      },
      {
        method: "POST",
        action: `/account/${accountId}/${appId}/team`,
      },
    )
  }

  const openRemoveUserModal = (email: string, userId: string) =>
    openConfirmationModal({
      title: <Text fw={600}>Remove user</Text>,
      children: <Text>Are you sure you want to remove {email} from your team?</Text>,
      labels: { cancel: "Cancel", confirm: "Remove" },
      confirmProps: { color: "red" },
      onConfirm: () => removeTeamMember(userId, email),
    })

  const openLeaveTeamModal = (email: string, userId: string) =>
    openConfirmationModal({
      title: <Text fw={600}>Leave team</Text>,
      children: <Text>Are you sure you want to leave the team?</Text>,
      labels: { cancel: "Cancel", confirm: "Leave" },
      confirmProps: { color: "red" },
      onConfirm: () => leaveTeam(userId),
    })

  const openChangeRoleModal = (email: string, userId: string, role: RoleName) =>
    openConfirmationModal({
      title: <Text fw={600}>Change user role?</Text>,
      children: (
        <Text>
          Are you sure you want to change {email}'s role to{" "}
          <Text display="inline" tt="capitalize">
            {role.toLowerCase()}
          </Text>
          ?
        </Text>
      ),
      labels: { cancel: "Cancel", confirm: "Change" },
      onConfirm: () => changeMemberRole(userId, role, email),
    })

  const openResendEmailModal = (email: string) =>
    openConfirmationModal({
      title: <Text fw={600}>Remove user</Text>,
      children: <Text>Are you sure you want to resend an email to {email}?</Text>,
      labels: { cancel: "Cancel", confirm: "Resend" },
      confirmProps: { color: "red" },
      onConfirm: () => resendEmail(email),
    })

  return {
    openRemoveUserModal,
    openChangeRoleModal,
    openLeaveTeamModal,
    openResendEmailModal,
  }
}

export default useTeamModals
