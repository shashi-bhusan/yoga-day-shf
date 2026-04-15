import type { Metadata } from "next";
import { OriginsPageClient } from "@/components/scotland/origins-page-client";

export const metadata: Metadata = {
  title: "Origins of yoga & Yoga Day in Scotland | Scotland's International Yoga Day",
  description:
    "How yoga reached Scotland and how International Yoga Day is celebrated here.",
};

export default function OriginsPage() {
  return <OriginsPageClient />;
}
