import { SimpleGrid, Stack, Text, Title } from "@pokt-foundation/pocket-blocks"
import { useNavigate } from "@remix-run/react"
import React from "react"
import { AccountPlan } from "~/components/AccountPlan"
import { PayPlanType, PortalApp, RoleName } from "~/models/portal/sdk"
import { PlanLimitOverviewCard } from "~/routes/account.$accountId.$appId.plan/components/PlanLimitOverviewCard"
import { AnalyticActions, AnalyticCategories, trackEvent } from "~/utils/analytics"
import { getPlanName } from "~/utils/planUtils"

type FreeAppPlanProps = {
  app: PortalApp
  userRole: RoleName
}

const FreeAppPlan = ({ app, userRole }: FreeAppPlanProps) => {
  const navigate = useNavigate()

  return userRole === "MEMBER" ? (
    <Stack mt={"xl"}>
      <PlanLimitOverviewCard app={app} />
    </Stack>
  ) : (
    <Stack align="center" mt={"xl"}>
      <Stack spacing="xs" ta="center">
        <Title order={3}>Upgrade your plan</Title>
        <Text>
          Your current plan is {getPlanName(app.legacyFields.planType)}. <br /> Upgrade
          now to Auto-Scale and pay as you go.
        </Text>
      </Stack>
      <SimpleGrid breakpoints={[{ maxWidth: "lg", cols: 1 }]} cols={3}>
        <AccountPlan disableFree type={PayPlanType.FreetierV0} />
        <AccountPlan
          type={PayPlanType.PayAsYouGoV0}
          onContinue={() => {
            trackEvent({
              category: AnalyticCategories.app,
              action: AnalyticActions.app_plan_upgrade,
              label: app.id,
            })
            navigate(
              `/api/stripe/checkout-session?app-id=${app.id}&app-accountId=${app.accountID}&app-name=${app.name}`,
            )
          }}
        />
        <AccountPlan
          type={PayPlanType.Enterprise}
          onContinue={() => {
            trackEvent({
              category: AnalyticCategories.app,
              action: AnalyticActions.app_plan_enterprise,
              label: app.id,
            })
            window.open("https://www.grove.city/enterprise", "_blank", "noreferrer")
          }}
        />
      </SimpleGrid>
    </Stack>
  )
}

export default FreeAppPlan
