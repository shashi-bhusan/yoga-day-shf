import type { Metadata } from "next";
import { CorporatePageClient } from "@/components/scotland/corporate-page-client";

export const metadata: Metadata = {
  title: "Corporate & partnerships | Scotland's International Yoga Day",
  description:
    "Align with wellbeing — CSR, brand visibility, and partnership opportunities with Scotland's International Yoga Day.",
};

export default function CorporatePage() {
  return <CorporatePageClient />;
}
