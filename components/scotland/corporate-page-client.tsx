"use client";

import Link from "next/link";
import { ScotlandSiteHeader } from "@/components/scotland/scotland-site-header";
import { CorporateSection } from "@/components/scotland/corporate-section";

export function CorporatePageClient() {
  return (
    <>
      <ScotlandSiteHeader linkHashesToHome />
      <main className="min-h-screen min-w-0 overflow-x-hidden bg-background pt-28 text-foreground sm:pt-32">
        <section className="scroll-mt-32 px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <CorporateSection />
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
