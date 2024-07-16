import "@/icons/style.css";
import "@/styles/tailwind.css";

import type { Metadata } from "next";
import Notification from "@/components/Notification";
import Loader from "@/components/pages/Loader";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Dafkur 3.0.0",
  description: "Welcome to Dafkur 3.0.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="snap-y snap-mandatory">
      <body className="bg-black min-h-dvh font-roboto">
        <Loader />
        <Layout.Main>{children}</Layout.Main>
        <Notification />
      </body>
    </html>
  );
}
