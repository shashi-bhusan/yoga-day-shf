import type { Metadata } from "next";
import { FrameworkPageClient } from "@/components/scotland/framework-page-client";

export const metadata: Metadata = {
  title: "Our Framework | Scotland's International Yoga Day",
  description:
    "Authenticity, lineage, and Vedic thought — Community Vitality, Bliss Vitality, and Life Vitality shape Scotland's International Yoga Day.",
};

export default function FrameworkPage() {
  return <FrameworkPageClient />;
}
