import { Group, Text } from "@pokt-foundation/pocket-blocks"
import { RoleName } from "~/models/portal/sdk"
import Card from "../../shared/Card"
import styles from "./styles.css"

/* c8 ignore next */
export const links = () => {
  return [{ rel: "stylesheet", href: styles }]
}

type MemberRoleProps = {
  role: RoleName
}

const MemberRole = ({ role }: MemberRoleProps) => {
  return (
    <Card>
      <Group position="apart">
        <Text>Role</Text>
        <Text>{role}</Text>
      </Group>
    </Card>
  )
}

export default MemberRole
