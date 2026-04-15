"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initGA, trackPageView } from "@/lib/analytics";

/**
 * Mirrors SHF ScrollToTop + initGA: initialize once, then send page views on route change.
 * Suspense is required for useSearchParams in the App Router.
 */
function GaPageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchString = searchParams.toString();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    const page = searchString ? `${pathname}?${searchString}` : pathname;
    trackPageView(page);
  }, [pathname, searchString]);

  return null;
}

export function AnalyticsProvider() {
  return (
    <Suspense fallback={null}>
      <GaPageViews />
    </Suspense>
  );
}
