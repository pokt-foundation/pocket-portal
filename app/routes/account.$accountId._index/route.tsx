import {
  Card,
  Group,
  Button,
  // Select,
  SimpleGrid,
  Stack,
  Text,
  useMantineTheme,
  Badge,
} from "@pokt-foundation/pocket-blocks"
import { json, LoaderFunction, MetaFunction } from "@remix-run/node"
import { Form, useLoaderData, useNavigation, useSearchParams } from "@remix-run/react"
import dayjs from "dayjs"
import invariant from "tiny-invariant"
import { AccountAppsOverview } from "./components/AccountAppsOverview"
import { EmptyState } from "./components/EmptyState"
// import OverviewBarChart from "./components/OverviewBarChart"
import { OverviewSparkline } from "./components/OverviewSparkline"
import ErrorView from "~/components/ErrorView"
import TitledCard from "~/components/TitledCard"
import { getAggregateRelays, getTotalRelays } from "~/models/dwh/dwh.server"
import { AnalyticsRelaysAggregated } from "~/models/dwh/sdk/models/AnalyticsRelaysAggregated"
import { AnalyticsRelaysDaily } from "~/models/dwh/sdk/models/AnalyticsRelaysDaily"
import { initPortalClient } from "~/models/portal/portal.server"
import { Account, PortalApp } from "~/models/portal/sdk"
import type { DataStruct } from "~/types/global"
import { getErrorMessage } from "~/utils/catchError"
import { commify } from "~/utils/formattingUtils"
import { seo_title_append } from "~/utils/seo"
import { requireUser } from "~/utils/user.server"

export const meta: MetaFunction = () => {
  return {
    title: `Account Insights ${seo_title_append}`,
  }
}

type AccountInsightsData = {
  account: Account
  total: AnalyticsRelaysDaily
  aggregate: AnalyticsRelaysAggregated[]
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = await requireUser(request)
  const portal = initPortalClient({ token: user.accessToken })
  const url = new URL(request.url)
  const daysParam = Number(url.searchParams.get("days") ?? "7")

  try {
    const { accountId } = params
    invariant(typeof accountId === "string", "AccountId must be a set url parameter")

    const account = await portal.getUserAccount({ accountID: accountId, accepted: true })

    if (!account.getUserAccount) {
      throw new Error(
        `Account ${params.accountId} not found for user ${user.user.portalUserID}`,
      )
    }

    const aggregate = await getAggregateRelays({
      category: "account_id",
      categoryValue: [accountId],
      days: daysParam,
    })
    const total = await getTotalRelays({
      category: "account_id",
      categoryValue: [accountId],
      days: daysParam,
    })

    return json<DataStruct<AccountInsightsData>>({
      data: {
        account: account.getUserAccount as Account,
        total: (total as AnalyticsRelaysDaily) ?? undefined,
        aggregate: (aggregate as AnalyticsRelaysAggregated[]) ?? undefined, //dailyReponse.data as AnalyticsRelaysDaily[],
      },
      error: false,
    })
  } catch (error) {
    return json<DataStruct<AccountInsightsData>>({
      data: null,
      error: true,
      message: getErrorMessage(error),
    })
  }
}

const InsightsDaysPeriodSelector = () => {
  const theme = useMantineTheme()
  const navigation = useNavigation()
  const [searchParams] = useSearchParams()
  const daysParam = searchParams.get("days") ?? "7"
  // Static component for now
  return (
    <Form>
      <Button.Group>
        <Button
          bg={daysParam === "7" ? theme.colors.dark[7] : theme.colors.dark[9]}
          loading={!!(daysParam === "7" && navigation.state === "loading")}
          name="days"
          radius="sm"
          size="xs"
          type="submit"
          value={7}
          variant="default"
        >
          7d
        </Button>
        <Button
          bg={daysParam === "30" ? theme.colors.dark[7] : theme.colors.dark[9]}
          loading={!!(daysParam === "30" && navigation.state === "loading")}
          name="days"
          radius="sm"
          size="xs"
          type="submit"
          value={30}
          variant="default"
        >
          30d
        </Button>
        <Button
          bg={daysParam === "60" ? theme.colors.dark[7] : theme.colors.dark[9]}
          loading={!!(daysParam === "60" && navigation.state === "loading")}
          name="days"
          radius="sm"
          size="xs"
          type="submit"
          value={60}
          variant="default"
        >
          60d
        </Button>
        <Button
          bg={daysParam === "90" ? theme.colors.dark[7] : theme.colors.dark[9]}
          loading={!!(daysParam === "90" && navigation.state === "loading")}
          name="days"
          radius="sm"
          size="xs"
          type="submit"
          value={90}
          variant="default"
        >
          90d
        </Button>
      </Button.Group>
    </Form>
  )
}

export default function AccountInsights() {
  const { data, error, message } = useLoaderData() as DataStruct<AccountInsightsData>

  if (error) {
    return <ErrorView message={message} />
  }

  const { account, total, aggregate } = data

  const apps = account.portalApps as PortalApp[]

  if (apps.length === 0) return <EmptyState />

  const aggregateTotalData = aggregate.map((day) => ({
    date: dayjs(day.date).format("MMM DD"),
    val: day.countTotal ?? null,
  }))
  const aggregateLatencyData = aggregate.map((day) => ({
    date: dayjs(day.date).format("MMM DD"),
    val: day.avgLatency ?? null,
  }))
  const aggregateSuccessData = aggregate.map((day) => ({
    date: dayjs(day.date).format("MMM DD"),
    val: day.rateSuccess ?? null,
  }))
  const aggregateErrorData = aggregate.map((day) => ({
    date: dayjs(day.date).format("MMM DD"),
    val: day.rateError ?? null,
  }))

  // console.log(aggregateTotalData)

  return (
    <Stack mb="xl" pt={22} spacing="xl">
      <TitledCard
        header={() => (
          <Group position="apart">
            <Text weight={600}>Organization Overview</Text>
            <InsightsDaysPeriodSelector />
          </Group>
        )}
      >
        <Card.Section>
          <AccountAppsOverview aggregate={total} />
        </Card.Section>
      </TitledCard>

      <Stack spacing="xl">
        <TitledCard
          header={() => (
            <Group position="apart">
              <Text weight={600}>
                Total Relays{" "}
                <Badge ml="sm" px={6} radius="sm">
                  {commify(total?.countTotal ?? 0)}
                </Badge>
              </Text>
              <InsightsDaysPeriodSelector />
            </Group>
          )}
        >
          <Card.Section p="md">
            <OverviewSparkline label=" relays" sparklineData={aggregateTotalData} />
          </Card.Section>
        </TitledCard>

        <SimpleGrid breakpoints={[{ maxWidth: "md", cols: 1 }]} cols={2}>
          <TitledCard
            header={() => (
              <Group position="apart">
                <Text weight={600}>
                  Average Latency{" "}
                  <Badge ml="sm" px={6} radius="sm">
                    {commify(total?.avgLatency ?? 0)}ms
                  </Badge>
                </Text>
                <InsightsDaysPeriodSelector />
              </Group>
            )}
          >
            <Card.Section p="md">
              <OverviewSparkline label="ms" sparklineData={aggregateLatencyData} />
            </Card.Section>
          </TitledCard>
          <TitledCard
            header={() => (
              <Group position="apart">
                <Text weight={600}>
                  Success Rate{" "}
                  <Badge ml="sm" px={6} radius="sm">
                    {commify(total?.rateSuccess ?? 0)}%
                  </Badge>
                </Text>
                <InsightsDaysPeriodSelector />
              </Group>
            )}
          >
            <Card.Section p="md">
              <OverviewSparkline label="%" sparklineData={aggregateSuccessData} />
            </Card.Section>
          </TitledCard>
        </SimpleGrid>
        <TitledCard
          header={() => (
            <Group position="apart">
              <Text weight={600}>
                Error Rate{" "}
                <Badge ml="sm" px={6} radius="sm">
                  {commify(total?.rateError ?? 0)}%
                </Badge>
              </Text>
              <InsightsDaysPeriodSelector />
            </Group>
          )}
        >
          <Card.Section p="md">
            <OverviewSparkline label="%" sparklineData={aggregateErrorData} />
          </Card.Section>
        </TitledCard>
      </Stack>
    </Stack>
  )
}
