import type { Metadata } from "next";
import { CorporatePageClient } from "@/components/scotland/corporate-page-client";

export const metadata: Metadata = {
  title: "Corporate & partnerships | Scotland's International Yoga Day",
  description:
    "Partner with Scotland's International Yoga Day 2026 — sponsorship, workshops, exhibitor stalls, and CSR alignment with the Scottish Hindu Foundation.",
};

export default function CorporatePage() {
  return <CorporatePageClient />;
}
