import { PayPlanType } from "~/models/portal/sdk"

const schema = {
  common: {
    submit: "submit",
    StopSubscription: "Stop Subscription",
    save: "save",
  },
  search: {
    label: "Search",
    placeholder: "Search by Transaction Hash, Block # and Address",
  },
  terms: {
    address: "address",
    addresses: "addresses",
    app: "app",
    apps: "apps",
    block: "block",
    blocks: "blocks",
    node: "node",
    nodes: "nodes",
    network: "network",
    networks: "networks",
    rentToOwn: "rent to own",
    support: "support",
    transaction: "transaction",
    transactions: "transactions",
  },
  error: {
    default: "Default Error Message",
    browser: "Browser Error Message",
    server: "Server Error Message",
  },
  faq: {
    title: "Pocket Portal",
    subtitle: "FAQ",
    faqs: [
      {
        question: "What is the Pocket Portal?",
        answer:
          "The Pocket Portal is a dashboard for creating and monitoring blockchain infrastructure endpoint(s) powered by Pocket Network's decentralized full-node network.",
      },
      {
        question: "How can this be free?",
        answer:
          "The Pocket Network provides bandwidth to decentralized applications that stake POKT. For the Pocket Portal's free tier, the Pocket Network Foundation has pre-staked POKT on behalf of anyone who signs up for up to 1M relays per day.",
      },
      {
        question: "How long can I use the free option?",
        answer: (
          <>
            Currently, the Foundation is operating with "good faith" guidelines, meaning
            that as long as you are actually using the service as intended, you can use
            the free tier for as long as you'd like. If we notice there is little to no
            traffic coming through those endpoints, we will reach out directly to see if
            we can support you. It's important to note there is a finite supply of POKT
            available for the free tier subsidies, so our goal is to allocate this to
            developers who truly want to use and improve the service and grow their user
            base. If you are not using the service, and remain unresponsive to{" "}
            <a href="mailto:portal@gmail.com?subject=Support">our support outreach</a>, we
            reserve the right to withdraw the endpoint in order to reallocate it to
            another development team.
          </>
        ),
      },
      {
        question: "What happens if I go over my daily relay limit?",
        answer: (
          <>
            The Pocket Portal has overflow protection in case an app accidentally goes
            over its daily relay limit. All surplus relays are served by our backup
            infrastructure, ensuring no service interruptions. This is only a temporary
            measure so you should{" "}
            <a href="https://discord.com/invite/uYs6Esum3r">reach out to our team</a> if
            you need more relays.
          </>
        ),
      },
      {
        question: "Which blockchains can I connect to?",
        answer: (
          <>
            The Pocket Portal currently supports creating an endpoint for 10+ chains,
            including Ethereum, xDAI, Binance Smart Chain, Avalanche, Fuse, and more. You
            can find the{" "}
            <a href="https://docs.pokt.network/home/resources/references/supported-blockchains">
              full list here
            </a>
            . If you would like to discuss or help decide which networks to include next,{" "}
            <a href="https://discord.com/invite/uYs6Esum3r">join us in Discord</a>.
          </>
        ),
      },
      {
        question:
          "What blockchains are available to connect to? Which are planned to come next?",
        answer: (
          <>
            The Pocket Portal currently supports creating an endpoint for 10+ chains,
            including Ethereum, Binance Smart Chain, Avalanche, Polygon, Fuse, and more.
            You can find the{" "}
            <a href="https://docs.pokt.network/home/resources/references/supported-blockchains">
              the full list here
            </a>
            . In that list, you will see a section titled "Integrating New Relay Chains,"
            which is where you can find the networks that are confirmed to be whitelisted
            next. If you would like to discuss or help decide which networks are not
            already on that list to include next, we recommend you chat with us in discord
            and cement your perspective by creating a{" "}
            <a href="https://forum.pokt.network/t/pip-6-2-settlers-of-new-chains/1027">
              Pocket forum proposal
            </a>
            .
          </>
        ),
      },
      {
        question: "How many endpoints can I create?",
        answer: (
          <>
            The Pocket Portal currently allows any user to create up to 4 endpoints. Each
            endpoint can be used to serve 1 blockchain. Each endpoint grants up to 1
            million free relays per day. If you need more relays or want to stake your own
            POKT, <a href="https://discord.com/invite/uYs6Esum3r">join us in Discord</a>{" "}
            and let us know.
          </>
        ),
      },
    ],
  },
  landing: {
    chains: [
      "avalanche",
      "solana",
      "algorand",
      "okx",
      "fuse",
      "pokt",
      "ethereum",
      "polygon",
      "gnosis",
      "harmony",
      "binance_smart_chain",
      "iotex",
      "boba",
      "evmos",
      "fantom",
    ],
    callOutBoxText: [
      {
        title: "One click Endpoints",
        smallText: "For any network with 1M daily relays free",
        blueText: "10+",
        description: "Networks",
      },
      {
        title: "Thousands of nodes",
        smallText: "Serving any network at any given moment",
        blueText: "47K+",
        description: "Nodes",
      },
      {
        title: "Monitor your Infra",
        smallText: "Tracking and managing your app across any chain",
        blueText: "6B+",
        description: "Weekly relays",
      },
    ],
    title: "Your gateway to Web3 done right.",
    subtitle:
      "Deploy within minutes to decentralized infrastructure that can service dozens of chains. The Portal acts as your one-stop-shop to manage, make changes, and monitor your application's connection to blockchain data.",
    welcomeText: "Welcome to Web3 done the right way.",
    getStarted: "Get Started",
    connect: "Connect to these networks.",
    whosNext: "See who's next.",
  },
  feedback: {
    personal: "Do not share any personal info",
    errorText: "Text area must be filled out to submit a suggestion.",
    textAreaPlaceholder: "Would be interesting to...",
    feedbackSubText: "Help us to improve Pocket Portal",
    feedbackTitle: "Share Feedback",
    feedbackShareAltText: "share feedback",
    thanksSubtext: "For your feedback!",
    thanksTitle: "Thanks",
    heartImageAlt: "heart image",
    clickOpen: "Click to open feedback box",
    clickClose: "Click to close feedback box",
  },
  dashboard: {
    routes: {
      network: "Network",
      apps: "Apps",
      docs: "Docs",
      discord: "Discord",
    },
  },
  appId: {
    routes: {
      overview: "Overview",
      requests: "Requests",
      security: "Security",
      notifications: "Notifications",
      plan: "Plan Details",
    },
  },
  AppRequestsByOriginCard: {
    label: "Requests By Origin",
    columns: ["Percent", "Origin", "Relays"],
  },
  AppRequestsErrorsCard: {
    label: "Requests Errors",
    columns: ["Type", "Message", "Node", "Size", "Date"],
  },
  AppRequestsRateCard: {
    label: "Requests Rate",
    list: {
      successDelta: {
        label: "Success Delta",
        help: "Percentage of success among the total request attempted to perform by the application on the last 24h.",
      },
      errorRate: {
        label: "Error Rate",
        help: "Percentage of error among the total request attempted to perform by the application.",
      },
      totalRequests: {
        label: "Total Requests",
      },
    },
  },
  AppUsageCurrentCard: {
    label: "Daily Usage",
    list: {
      sessionRelays: {
        label: "Session Relays",
        help: "Total number of request sent during the current network session, each session has 4 blocks, 15 min each, 1 hour total.",
      },
      dailyRelays: {
        label: "Daily Relays",
        help: "Total number of request sent during the current day.",
      },
      maxRelays: {
        label: "Max Relays",
        help: "Maxium number of request this application can send during a single day.",
      },
    },
  },
  AppPlanOverviewCard: {
    title: "Application Plan",
    subscription: "Subscription",
    status: "Status",
    relays: "Total Relays on this Billing Period",
    date: "Start Date",
    managePlan: "Manage Plan in Stripe",
  },
  AppPlanLatestInvoiceCard: {
    title: "Latest Invoice",
    invoice: "Invoice",
    status: "Status",
    relaysBilled: "Relays Billed",
    relaysUsed: "Relays Used",
    dateStart: "Period Start",
    dateEnd: "Period End",
    download: "Download",
    view: "View in Stripe",
  },
  AppOverLimitCard: {
    title: "Session Limit Reached",
    subtitle: "It's time to up your stake, your app is over the session limit",
    body: [
      "Don't worry, we've got you covered. To maintain service, the Portal automatically redirects all surplus relays to our backup infrastructure. If you want all relays to be served by Pocket Network, you'll need to stake more POKT.",
      "Please contact the team for further assistance.",
    ],
    link: "Contact POKT Team",
  },
  appAddressCard: {
    heading: "POKT App Addresses",
    error: "No apps found.",
  },
  footer: {
    termsOfUse: "Site Terms of Use",
    privacyPolicy: "Privacy Policy",
  },
  AppPlansOverview: {
    planDetailsTitles: {
      pricing: "Pricing",
      relayLimit: "Relay Limit",
      chainAccess: "Chain Access",
      appsLimit: "Apps Limit",
      overviewHeader: "Flexible plans that grow with your app",
      overviewDescription:
        "Scalable plans because your needs change as yous app grows. All plans access to Pocket Network multichain infrastructure with our chain!",
    },
    planDetails: {
      [PayPlanType.PayAsYouGoV0]: {
        title: "Pay As You Go",
        description:
          "250k free relays per day, per app. Beyond that, pay only for what you use. The counter resets every 24h but you’ll only get billed monthly. Even better, after 24 months of paid relays, you’ll receive POKT to stake for continued service. No more payments.",
        description2: "No more sunk costs. Just fast, reliable infrastructure.",
        pricing: "Pay per relay + 250K Free Relays",
        relayLimit: "No limit",
        appsLimit: "Up to 2 Applicaitions",
        chainAccess: "No limit",
      },
      [PayPlanType.FreetierV0]: {
        title: "Always Free",
        description:
          "Access to reliable, censor resistant infrastructure. Free up to 250k relays per day.",
        description2: "",
        pricing: "$0.00",
        relayLimit: "250k per app per day",
        appsLimit: "Up to 2 Applicaitions",
        chainAccess: "No limit",
      },
      [PayPlanType.TestPlanV0]: {
        title: "Always Free",
        description:
          "Access to reliable, censor resistant infrastructure. Free up to 250k relays per day.",
        description2: "",
        pricing: "$0.00",
        relayLimit: "250k per app per day",
        appsLimit: "Up to 2 Applicaitions",
        chainAccess: "No limit",
      },
    },
  },
  AppPlanDetails: {
    relayLimit: "Relays Limit",
    relaysPerDay: "relays per day",
    currentPlan: "Current Plan",
    currentPlanToolTip: "This is the current plan for this specific application.",
    upgrade: "Upgrade",
    renew: "Renew Subscription",
  },
  PlanView: {
    title: "Stripe Error",
    description:
      "We are sorry but there appears to be an issue with out connection to stripe. You can try managing your subscription directly in Stripe's portal.",
    button: "Manage Plan in Stripe",
  },
  ContactSalesView: {
    title: "We have Enterprise solutions for your needs",
    description:
      "Give us some basic information of your request and our solutions team will reach out soon to find the best way of service your application.",
    formSubmitted: "Form Submitted",
    done: "Done",
    formSubmissionFailed: "Form Submission Failed",
  },
  ContactSalesForm: {
    submitting: "Submitting",
    submit: "Submit",
    firstName: {
      label: "First Name",
      placeholder: "Enter your name",
    },
    lastName: {
      label: "Last Name",
      placeholder: "Enter your last name",
    },
    email: {
      label: "Email",
      placeholder: "Enter your email",
    },
    company: {
      label: "Company",
      placeholder: "Enter a company name",
    },
    chains: {
      label: "Protocol/Chains of interest",
      placeholder: "I'm interested in chain...",
    },
    relays: {
      label: "Relay Needs",
      placeholder: "How many daily relays your application request",
    },
    tellUsMore: {
      label: "Tell us more about what you are building",
      placeholder: "I'm building a Chain...",
    },
  },
  CalculateYourPricing: {
    title: "Calculate your pricing",
    firstDescription:
      "Use the calculator below to give you an estimate of what your monthly bill could look like.",
    secondDescription:
      "Enter the number of relays you think your app might consume in a day. Don’t exclude the free relays. We will do the math for you.",
    avgRelaysPerDay: "AVG Relays per Day",
    pricePerRelay: "Price per Relay",
    totalMonthlyPrice: "Total Monthly Estimated Price",
    howIsThisCalculated: "How is this calculated?",
    modalTitle: "How is this price calculated",
    modalDescription:
      "This formula is how Pocket portal calculates and charge you app relyas montly. If you want to learn more see our",
    secondModalDescription: "documentation",
    totalDailyRelays: "Total daily relays",
    freeRelays: "free relays",
    costPerDay: "Cost per day",
    done: "Done",
    sumPerDay: "The sum of each cost per day",
    monthlyFee: "Monthly fee",
  },
  security: {
    headings: {
      secretKey: "Private Secret Key Required",
      approvedChains: "Approved Chains",
      userAgents: "Whitelist User-Agents",
      origins: "Whitelist Origins",
      contracts: "Whitelist Contracts",
      methods: "Whitelist Methods",
    },
    secretSwitchAria: "Private key required",
    userAgentPlaceholder: "Type user agent here",
    userAgentAria: "Add user agents to white list",
    defaultSelectChainText: "Select Chain",
    chainsDropdownAria: "Select a chain to add to white list",
    OriginPlaceholder: "Type origin here",
    OriginAria: "Add origins to white list",
    contractAria: "Add contract selections to white list",
    contractError:
      "You must select a chain and have a value to add to methods whitelist.",
    methodAria: "Add method selections to white list",
    methodError: "You must select a chain and have a value to add to methods whitelist.",
    secretKeyText:
      "To maximize the security of your application, you should activate the private secret key for all requests and enable the use of whitelist user agents and origins.",
  },
}

export default schema
