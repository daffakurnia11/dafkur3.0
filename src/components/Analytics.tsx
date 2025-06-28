import Script from "next/script";
import React from "react";

type Props = {};

export default function GoogleAnalytics({}: Props) {
  const gtagId = process.env.NEXT_PUBLIC_GOOGLE_TAG;

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
