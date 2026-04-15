"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ScotlandSiteHeader } from "@/components/scotland/scotland-site-header";
import { SchoolsYogaTourSection } from "@/components/scotland/schools-yoga-tour-section";

export function SchoolsYogaTourPageClient() {
  return (
    <>
      <ScotlandSiteHeader linkHashesToHome />
      <main className="min-h-screen min-w-0 overflow-x-hidden bg-background pt-24 text-foreground">
        <section
          className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24"
          style={{ backgroundColor: "var(--muted)" }}
        >
          <div className="mx-auto max-w-6xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-4 text-center"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "var(--primary)",
              }}
            >
              Schools Yoga Tour
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="mx-auto mb-12 max-w-2xl text-center"
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.65,
                color: "var(--muted-foreground)",
              }}
            >
              Workshops for students — mindfulness, resilience, and teamwork in
              schools across Scotland.
            </motion.p>
            <SchoolsYogaTourSection />
            <p
              className="mt-14 text-center text-sm"
              style={{ color: "var(--muted-foreground)" }}
            >
              <Link
                href="/"
                className="font-semibold underline underline-offset-4 transition-colors hover:opacity-80"
                style={{ color: "var(--primary)" }}
              >
                ← Back to Scotland&apos;s International Yoga Day
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
