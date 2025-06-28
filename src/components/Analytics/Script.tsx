import Script from "next/script";
import React from "react";

export default function AnalyticsScript() {
  const gtagId = process.env.NEXT_PUBLIC_GOOGLE_TAG;

  if (!gtagId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtagId}');`}
      </Script>
    </>
  );
}
