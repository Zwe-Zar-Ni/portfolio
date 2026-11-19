export type Experience = {
  title: string;
  company: string;
  link: string;
  date: string;
  responsibilities: {
    title: string;
    stack: string;
    link: string;
    points: string[];
  }[];
};

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "OOAK Inc",
    link: "https://ooak.jp/",
    date: "December 2023 - March 2026",
    responsibilities: [
      {
        title: "Order Management Dashboard",
        stack: "Laravel · Vue.js · MySQL",
        link: "https://order.ooak.jp/",
        points: [
          "Developed a centralized order management dashboard for physical home WiFi, pocket WiFi, and data SIM products in Japan replacing fragmented paper-based and spreadsheet workflows with a unified order management system.",
          "Implemented order lifecycle management, enabling staff to track order statuses, process returns, and manage order records through a centralized interface.",
          "Developed operational features including Excel exports, order-related document storage, and sales analytics to improve data accessibility and business reporting.",
          "Contributed to database design and implemented role-based access control to support structured data management and secure staff operations."
        ]
      },
      {
        title: "SIM Operation Management System",
        stack:
          "React.js · TypeScript · TanStack Query · Axios · React Hook Form · Zod · Tailwind CSS",
        link: "https://console.legitone.co.jp/",
        points: [
          "Developed frontend interfaces for a SIM operation management platform connecting telecom operators, MVNOs, and an upstream internet service provider.",
          "Built API-driven dashboards and data management interfaces using React and TypeScript, integrating backend services with Axios and TanStack Query for server-state management and data synchronization.",
          "Implemented complex forms with React Hook Form and Zod, providing schema-based validation and structured input handling for operational workflows.",
          "Developed reusable UI components and data table interfaces to support consistent user experiences across administrative modules."
        ]
      },
      {
        title: "Flash Call — International VoIP Calling Application",
        stack:
          "React Native · TypeScript · Twilio Programmable Voice · Stripe · Zustand · NativeWind",
        link: "https://play.google.com/store/apps/details?id=com.flash.ooak&hl=en",
        points: [
          "Developed the cross-platform mobile frontend for an international calling application, integrating Twilio Programmable Voice SDK for incoming and outgoing calls and Stripe for purchasing call plans and call minutes.",
          "Implemented centralized call-state management using Zustand and coordinated call lifecycle events between the mobile application, backend, and Twilio to handle call states not fully exposed by the React Native SDK.",
          "Integrated native platform capabilities to support background calling and platform-specific calling functionality, including iOS CallKit and Android services.",
          "Implemented call history functionality and prepared production releases, managing application publishing requirements for both the Apple App Store and Google Play Store."
        ]
      }
    ]
  },
  {
    title: "Frontend Developer",
    company: "A3L",
    link: "https://www.a3l.dev",
    date: "January 2026 - June 2026",
    responsibilities: [
      {
        title: "Nice Style Travel & Tours",
        stack:
          "TypeScript · React Native · Expo · React · TanStack Start · Payload CMS · Next.js · MongoDB · TanStack Query · TanStack Form · Zustand",
        link: "https://play.google.com/store/apps/details?id=com.nicestylegroup.travel&pcampaignid=web_share",
        points: [
          "Collaborated on building the customer-facing travel app. Established reusable form handling with TanStack Form to centralize form configuration and improve consistency across the app.",
          "Led approximately 90% of the admin dashboard frontend development, building administrative interfaces with TanStack Start, TanStack Query, TanStack Form, Tailwind CSS, and shadcn/ui.",
          "Led approximately 90% of CMS development using Payload CMS, Next.js, and MongoDB. Designed schemas to migrate existing tour and visa data into structured multilingual content, implemented lifecycle hooks to maintain translations, and exposed custom APIs for mobile app consumption."
        ]
      }
    ]
  },
  {
    title: "Frontend Developer",
    company: "Solvere",
    link: "https://www.solvere.website",
    date: "June 2026 - Present",
    responsibilities: [
      {
        title: "Naychi Logistics Platform",
        stack:
          "TypeScript · React.js · Google Maps · TanStack Query · Pusher · React Hook Form · Zod · Zustand · i18next · Tailwind CSS",
        link: "",
        points: [
          "Developed frontend features for a logistics platform serving a food manufacturing and distribution business, centralizing merchant management, order-collection visits, and delivery route planning.",
          "Implemented role-aware interfaces and real-time truck location tracking for collection and delivery routes, integrating browser geolocation, Google Maps, and Pusher for live location updates.."
        ]
      }
    ]
  }
];
