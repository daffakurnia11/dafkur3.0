import { NextSeo, NextSeoProps } from "next-seo";
import Head from "next/head";
import React from "react";
import defaultSeoConfig from "../../next-seo.config.json";

export default function Seo(props: Partial<NextSeoProps>) {
  const seoConfig = {
    ...defaultSeoConfig,
    ...props,
    openGraph: {
      ...defaultSeoConfig.openGraph,
      ...props.openGraph,
    },
    twitter: {
      ...defaultSeoConfig.twitter,
      ...props.twitter,
    },
  };

  return (
    <>
      <Head>
        <NextSeo {...seoConfig} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Daffa Kurnia Fatah",
              url: "https://dafkur.com",
              sameAs: [
                "https://www.linkedin.com/in/daffakurniafatah",
                "https://github.com/daffakurnia11",
                "https://www.instagram.com/daffakurniaf11/",
              ],
              jobTitle: "Full-stack web developer",
              worksFor: {
                "@type": "Company",
                name: "Itsavirus",
              },
              alumniOf: "Institut Teknologi Sepuluh Nopember",
              image: "https://dafkur.com/profile.png",
            }),
          }}
        />
      </Head>
    </>
  );
}
