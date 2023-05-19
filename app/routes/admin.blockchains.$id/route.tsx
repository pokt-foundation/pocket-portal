import {
  Card,
  Group,
  Title,
  TextInput,
  Switch,
  Box,
} from "@pokt-foundation/pocket-blocks"
import { json, LoaderFunction } from "@remix-run/node"
import { Form, useLoaderData } from "@remix-run/react"
import { Blockchain } from "../admin.blockchains/route"
import { getRequiredServerEnvVar } from "~/utils/environment"

type LoaderData = {
  blockchain: Blockchain
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const id = params.id
  try {
    const res = await fetch(
      `${getRequiredServerEnvVar("PHD_API_URL")}/v1/blockchain/${id}`,
      {
        headers: {
          Authorization: getRequiredServerEnvVar("PHD_API_KEY"),
          "Content-Type": "application/json",
        },
      },
    )
    const chain = await res.json()

    return json<LoaderData>({
      blockchain: chain,
    })
  } catch (error) {}
}

export default function Analytics() {
  const { blockchain } = useLoaderData() as LoaderData

  return (
    <>
      <Group position="apart">
        <Title mb={32} order={1}>
          {blockchain.id}: {blockchain.blockchain}
        </Title>
        <Form>
          <Switch
            checked={blockchain.active}
            label="Active"
            labelPosition="left"
            mb={16}
            name="active"
          />
        </Form>
      </Group>
      <Card mb={32}>
        <Title order={4}>General</Title>
        <Form>
          <TextInput value={blockchain.id} label="ID" mb={16} name="id" />
          <TextInput
            value={blockchain.blockchain}
            label="Blockchain"
            mb={16}
            name="blockchain"
          />
          <TextInput
            value={blockchain.description}
            label="Description"
            mb={16}
            name="description"
          />
          <TextInput
            value={blockchain.altruist}
            label="Altruist"
            mb={16}
            name="altruist"
          />
          <TextInput value={blockchain.chainID} label="Chain ID" mb={16} name="chainID" />
          {/* <Button mt={16} size="sm">
            Save
          </Button> */}
        </Form>
      </Card>
      <Card mb={32}>
        <Title order={4}>Aliases</Title>
        {blockchain.blockchainAliases &&
          blockchain.blockchainAliases.map((alias) => (
            <Box mb={32}>
              <Form>
                <TextInput value={alias} label="Alias" mb={16} name="redirect_alias" />
                {/* <Button mt={16} size="sm">
              Save
            </Button> */}
              </Form>
            </Box>
          ))}
      </Card>
      <Card mb={32}>
        <Title order={4}>Redirects</Title>
        {blockchain.redirects &&
          blockchain.redirects.map((redirect) => (
            <Box mb={32}>
              <Form>
                <TextInput
                  value={redirect.alias}
                  label="Alias"
                  mb={16}
                  name="redirect_alias"
                />
                <TextInput
                  value={redirect.domain}
                  label="Domain"
                  mb={16}
                  name="redirect_domain"
                />
                <TextInput
                  value={redirect.loadBalancerID}
                  label="Load Balancer ID"
                  mb={16}
                  name="redirect_loadBalancerID"
                />
                {/* <Button mt={16} size="sm">
              Save
            </Button> */}
              </Form>
            </Box>
          ))}
      </Card>
      <Card mb={32}>
        <Title order={4}>Sync Check</Title>
        <Form>
          <TextInput
            value={blockchain.syncCheckOptions.body}
            label="Body"
            mb={16}
            name="syncCheckOptions_body"
          />
          <TextInput
            value={blockchain.syncCheckOptions.resultKey}
            label="Result Key"
            mb={16}
            name="syncCheckOptions_resultKey"
          />
          <TextInput
            value={blockchain.syncCheckOptions.allowance}
            label="Allowance"
            mb={16}
            name="syncCheckOptions_allowance"
            type="number"
          />
          {/* <Button mt={16} size="sm">
            Save
          </Button> */}
        </Form>
      </Card>
    </>
  )
}
