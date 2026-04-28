"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ScotlandSiteHeader } from "@/components/scotland/scotland-site-header";
import { FrameworkSection } from "@/components/scotland/framework-section";

export function FrameworkPageClient() {
  return (
    <>
      <ScotlandSiteHeader linkHashesToHome />
      <main className="min-h-screen min-w-0 overflow-x-hidden bg-background pt-28 text-foreground sm:pt-32">
        <section className="scroll-mt-32 px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-6 text-center sm:mb-8"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "var(--primary)",
              }}
            >
              Our Framework
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="text-pretty text-[1.05rem] leading-[1.78] sm:text-[1.08rem]"
              style={{ color: "var(--muted-foreground)" }}
            >
              Scotland&apos;s International Yoga Day is rooted in something deeper than
              physical movement — it is grounded in authenticity, lineage, and rightful
              custodianship. Yoga, as understood through Vedic psychology, is a pathway
              to union: aligning body, mind, and consciousness. It originates from the
              Hindu tradition, where its wisdom has been preserved, practiced, and passed
              down through generations. Recognising this lineage is not about exclusion
              — it is about integrity. When the custodians of this knowledge are honoured,
              the essence of yoga remains intact, allowing it to serve its true purpose:
              inner harmony and collective wellbeing.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-6 text-pretty text-[1.05rem] leading-[1.78] sm:mt-7 sm:text-[1.08rem]"
              style={{ color: "var(--muted-foreground)" }}
            >
              From this foundation, the structure of Scotland&apos;s International Yoga
              Day Framework naturally unfolds through our three vitality components —
              each reflecting key principles of Vedic thought.
            </motion.p>
          </div>

          <div className="mx-auto mt-8 max-w-6xl sm:mt-10">
            <FrameworkSection />
          </div>

          <p
            className="mx-auto mt-10 max-w-3xl text-center text-sm sm:mt-12"
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
        </section>
      </main>
    </>
  );
}
