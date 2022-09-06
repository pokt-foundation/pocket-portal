import { expect } from "vitest"
import StopRemoveApp from "./StopRemoveApp"
import { render, screen } from "test/helpers"
import schema from "~/locales/en"
import { PayPlanType } from "~/models/portal/sdk"

const stopSubscription = schema.common.StopSubscription
const removeApplication = "Remove Application"

describe("<StopRemoveApp />", () => {
  it("renders Stop Subscription button for paid plantype", () => {
    render(<StopRemoveApp appId={"123"} planType={PayPlanType.PayAsYouGoV0} />)

    expect(screen.getByText(schema.common.StopSubscription)).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: schema.common.StopSubscription }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: schema.stopRemoveApp.removeApp }),
    ).not.toBeInTheDocument()
  })
  it("renders remove application for free tier plantype", () => {
    render(<StopRemoveApp appId={"123"} planType={PayPlanType.FreetierV0} />)

    expect(screen.getByText(schema.stopRemoveApp.removeApp)).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: schema.stopRemoveApp.removeApp }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: schema.common.StopSubscription }),
    ).not.toBeInTheDocument()
  })
})
