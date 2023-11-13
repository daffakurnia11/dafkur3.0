import type { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/icons/style.css";
import "@/styles/app.scss";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

export const metadata: Metadata = {
  title: "Home - Dafkur 3.0.0",
  description: "Welcome",
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
