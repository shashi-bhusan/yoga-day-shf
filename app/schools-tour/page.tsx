import type { Metadata } from "next";
import { SchoolsYogaTourPageClient } from "@/components/scotland/schools-yoga-tour-page-client";

export const metadata: Metadata = {
  title: "Schools Yoga Tour | Scotland's International Yoga Day",
  description:
    "Workshops for students — mindfulness, resilience, and teamwork in schools across Scotland.",
};

export default function SchoolsTourPage() {
  return <SchoolsYogaTourPageClient />;
}
