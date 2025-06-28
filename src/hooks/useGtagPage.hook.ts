"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function useGtagPage() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");

    if (typeof window.gtag === "function") {
      window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_TAG!, {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);
}
