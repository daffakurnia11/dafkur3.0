import "@/icons/style.css";
import "@/styles/tailwind.css";
import Loader from "./loader";
import Layout from "@/components/Layout";
import type { Metadata } from "next";
import Notification from "@/components/Notification";

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
    <html lang="en">
      <body className="bg-black min-h-dvh font-roboto">
        <Loader />
        <Layout>{children}</Layout>
        <Notification />
      </body>
    </html>
  );
}
