import "bootstrap/dist/css/bootstrap.min.css";
import "@/icons/style.css";
import "@/styles/app.scss";
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
      <body>
        <main className="layout position-relative min-vh-100">
          <Loader />
          <Layout>{children}</Layout>
          <Notification />
        </main>
      </body>
    </html>
  );
}
