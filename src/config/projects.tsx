export const projects = [
  {
    name: "Nice Style Travel",
    image: "nice-style-travel.png",
    tagline:
      "An end-to-end travel platform combining seamless booking with collaborative trip planning and social memory sharing.",
    description:
      "Nice Style Travel bridges the gap between travel booking and social journey planning. Designed for modern travelers, the application streamlines complex booking workflows—from multi-destination flights and tour packages to visa processing—while embedding collaborative tools that allow groups of friends to plan itineraries together and publish their travel memories.",
    features: [
      "<em class='font-semibold text-heading-tertiary'>Global Booking Engine: </em> Enables users to search and purchase domestic/international flights, curated tour packages, and global visa services.",
      "<em class='font-semibold text-heading-tertiary'>Collaborative Trip Planning: </em> Allows friends to coordinate travel details, shared itineraries, and logistics together in real time.",
      "<em class='font-semibold text-heading-tertiary'>Travel Journaling & Social Sharing: </em> Includes a memory feed where users can document past trips and share experiences with their network."
    ],
    techstack: [
      "React Native",
      "Expo",
      "React.js",
      "Tanstack Start",
      "Next.js"
    ],
    technicalHighlights: [
      "<em class='font-semibold text-heading-tertiary'>Third-Party API Integration: </em> Integrated real-time flight booking APIs, handling volatile pricing and multi-step transaction pipelines with fallback retry mechanisms.",
      "<em class='font-semibold text-heading-tertiary'>Event-Driven Rewards Engine: </em> Designed an idempotent rewards system that dynamically awards points for user transactions and social actions without duplicate triggers.",
      "<em class='font-semibold text-heading-tertiary'>Interactive Mapping & Native Sharing: </em> Built a custom map visualization layer using spatial clustering to highlight global travel footprints, integrated with native social sharing capabilities for custom-generated trip cards."
    ]
  },
  {
    name: "Naychi Logistics",
    image: "naychi.png",
    tagline:
      "A logistics management platform for local supply chains with real-time tracking and visibility.",
    description:
      "Naychi Logistics is a comprehensive logistics management platform designed to streamline supply chain operations. Built for local food and beverage manufacturer, the platform automates real-time tracking, and efficient route planning, enabling seamless delivery and visibility across multiple regions.",
    features: [
      "<em class='font-semibold text-heading-tertiary'>Real-Time Tracking & Visibility: </em> Provides real-time updates on active delivery trucks, ensuring efficient delivery and visibility across multiple regions.",
      "<em class='font-semibold text-heading-tertiary'>Route Planning & Optimization: </em> Streamlines multi-shop order workflows and delivery operations, optimizing routes and reducing delivery times.",
      "<em class='font-semibold text-heading-tertiary'>Centralized Management System: </em> Designed a centralized management system for shop registries, inventory fulfillment, and automated sales order processing."
    ],
    techstack: ["React", "Google Maps", "Laravel", "MySQL"],
    technicalHighlights: [
      "<em class='font-semibold text-heading-tertiary'>Custom Map Visualization: </em> Built a custom map visualization layer using spatial clustering to highlight travel footprints and provide real-time tracking.",
      "<em class='font-semibold text-heading-tertiary'>Designed a centralized management system for shop registries,</em> inventory fulfillment, and automated sales order processing."
    ]
  },
  {
    name: "Flash Call",
    image: "flash-call.png",
    tagline:
      "A VoIP communication platform for global calling with built-in billing and account management.",
    description:
      "Flash Call is an internal telecommunications app engineered to deliver reliable, low-latency VoIP voice calls globally. Built for telecom clients, the app unifies seamless real-time voice sessions with automated billing, user account provisioning, and transparent call-history tracking.",
    features: [
      "<em class='font-semibold text-heading-tertiary'>Global VoIP Telephony: </em> Enables high-quality cross-border audio calls with low latency directly through native device audio interfaces.",
      "<em class='font-semibold text-heading-tertiary'>In-App Balance & Billing: </em> Allows users to securely top up call credits and purchase international calling plans using flexible payment gateways.",
      "<em class='font-semibold text-heading-tertiary'>Call History & Account Ledger: </em> Stores and displays detailed call records, durations, rates, and billing history in real time."
    ],
    techstack: [
      "React Native",
      "Twilio Voice SDK",
      "Stripe",
      "Node.js",
      "Express",
      "MySQL"
    ],
    technicalHighlights: [
      "<em class='font-semibold text-heading-tertiary'>Native VoIP SDK Integration: </em> Integrated the Twilio Voice SDK into bare React Native, configuring native audio permission bridges, background call listeners, and call state handlers.",
      "<em class='font-semibold text-heading-tertiary'>Secure Payment & Credit Processing: </em> Implemented Stripe payment workflows on Node.js to handle secure top-ups, updating MySQL credit balances transactionally upon payment verification.",
      "<em class='font-semibold text-heading-tertiary'>Data Persistence & History Tracking: </em> Structured MySQL database schemas to track granular call logs, durations, and credit deductions for real-time user balance calculations."
    ]
  },
  {
    name: "Kaname Hub",
    image: "kaname-hub.png",
    tagline:
      "A corporate financial operations app streamlining multi-tiered budget planning, requests, and approvals.",
    description:
      "Kaname Hub is an enterprise financial management application built to simplify corporate budgeting workflows. Designed for structured organization hierarchies, the platform automates budget requests, tracks department allocations, and manages approval routing across custom user roles—from team leaders to department managers and finance directors.",
    features: [
      "<em class='font-semibold text-heading-tertiary'>Role-Based Approval Workflows: </em> Configures hierarchical approval pipelines where requests route automatically based on user authority levels.",
      "<em class='font-semibold text-heading-tertiary'>Real-Time Budget Planning: </em> Allows department managers to map out quarterly/annual budgets and track pending vs. approved allocations.",
      "<em class='font-semibold text-heading-tertiary'>Audit Trail & Status Tracking: </em> Maintains detailed records of every budget adjustment, approval step, and rejection note for corporate compliance."
    ],
    techstack: ["React Native", "Expo", "Laravel", "MySQL"],
    technicalHighlights: [
      "<em class='font-semibold text-heading-tertiary'>Hierarchical RBAC Architecture: </em> Architected a dynamic Role-Based Access Control system using Laravel middleware to strictly scope API endpoints and data access according to corporate authority tiers.",
      "<em class='font-semibold text-heading-tertiary'>Transactional Workflow Engine: </em> Built an automated approval state machine in MySQL with database transactions to guarantee atomic budget updates and eliminate race conditions during concurrent approval steps.",
      "<em class='font-semibold text-heading-tertiary'>Optimized Mobile Data Sync: </em> Implemented efficient client-side caching and optimistic UI updates in React Native to provide instant feedback when leaders approve or reject multi-line item requests on mobile."
    ]
  }
];
