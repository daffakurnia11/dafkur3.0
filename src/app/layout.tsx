import type { Metadata } from "next";
import { Viewport } from "next";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/icons/style.css";
import "@/styles/app.scss";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

const APP_NAME = "DeltaKilo";
const APP_DEFAULT_TITLE = "DeltaKilo 3.0.0";
const APP_TITLE_TEMPLATE = "%s - DeltaKilo 3.0.0";
const APP_DESCRIPTION = "Welcome to DeltaKilo!";

export const viewport: Viewport = {
  themeColor: "#181c1c",
};

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="layout position-relative min-vh-100">
          <Header />
          <div className="layout-content">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
