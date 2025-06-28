// utils/useGtagEvent.ts
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    // eslint-disable-next-line no-unused-vars
    gtag?: (...args: any[]) => void;
  }
}

export const useGtag = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const event = (name: string, params?: Record<string, any>) => {
    if (typeof window.gtag !== "function") return;

    const utm_source = searchParams?.get("utm_source");
    const utm_medium = searchParams?.get("utm_medium");
    const viewport = window.innerWidth < 768 ? "mobile" : "desktop";

    window.gtag("event", name, {
      page_path: pathname,
      event_user_viewport: viewport,
      event_utm_source: utm_source,
      event_utm_medium: utm_medium,
      ...(params ?? {}),
    });
  };

  return { event };
};
