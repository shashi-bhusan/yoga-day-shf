import type { Metadata } from "next";
import { ImpactPageClient } from "@/components/scotland/impact-page-client";

export const metadata: Metadata = {
  title: "Impact & long-term plans | Scotland's International Yoga Day",
  description:
    "Healthcare partnerships, schools, and community celebration — building something that lasts.",
};

export default function ImpactPage() {
  return <ImpactPageClient />;
}
