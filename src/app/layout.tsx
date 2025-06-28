import "@/icons/style.css";
import "@/styles/tailwind.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import Notification from "@/components/Notification";
import Loader from "@/components/pages/Loader";
import Layout from "@/components/Layout";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import AnalyticsScript from "@/components/Analytics/Script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="snap-y snap-mandatory scroll-smooth">
      <head>
        <AnalyticsScript />
      </head>
      <body className="bg-black min-h-dvh font-roboto overflow-x-hidden">
        <Loader />
        <Layout.Main>{children}</Layout.Main>
        <Notification />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
