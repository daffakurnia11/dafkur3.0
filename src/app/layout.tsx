import "@/icons/style.css";
import "@/styles/tailwind.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import Notification from "@/components/Notification";
import Loader from "@/components/pages/Loader";
import Layout from "@/components/Layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="snap-y snap-mandatory scroll-smooth">
      <body className="bg-black min-h-dvh font-roboto overflow-x-hidden">
        <Loader />
        <Layout.Main>{children}</Layout.Main>
        <Notification />
      </body>
    </html>
  );
}
