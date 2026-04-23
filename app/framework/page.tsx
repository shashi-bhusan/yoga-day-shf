import type { Metadata } from "next";
import { FrameworkPageClient } from "@/components/scotland/framework-page-client";

export const metadata: Metadata = {
  title: "Our Framework | Scotland's International Yoga Day",
  description:
    "Community Vitality, Workplace Bliss, and The Fun Pose — how we structure Scotland's International Yoga Day.",
};

export default function FrameworkPage() {
  return <FrameworkPageClient />;
}
