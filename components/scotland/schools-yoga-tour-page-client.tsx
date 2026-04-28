"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ScotlandSiteHeader } from "@/components/scotland/scotland-site-header";
import { SchoolsYogaTourSection } from "@/components/scotland/schools-yoga-tour-section";

const SCHOOLS_TOUR_POSTER_SRC = "/images/schools/school-yoga-tour-poster.png";

export function SchoolsYogaTourPageClient() {
  return (
    <>
      <ScotlandSiteHeader linkHashesToHome />
      <main className="min-h-screen min-w-0 overflow-x-hidden bg-background pt-28 text-foreground sm:pt-32">
        <section
          className="scroll-mt-32 px-3 py-10 sm:px-5 sm:py-12 lg:py-14"
          style={{ backgroundColor: "var(--muted)" }}
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-center sm:mb-8"
            >
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm"
                style={{ color: "var(--muted-foreground)" }}
              >
                Scotland&apos;s International Yoga Day
              </p>
              <h1
                className="text-balance bg-gradient-to-br from-[color:var(--primary)] via-[#c2410c] to-[#ea580c] bg-clip-text text-transparent"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Schools Yoga Tour
              </h1>
            </motion.div>

            {/* Single surface: fills width so muted page doesn’t feel empty around the hero */}
            <div
              className="overflow-hidden rounded-3xl border shadow-sm sm:rounded-[1.75rem]"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--background)",
                boxShadow: "0 1px 0 rgba(0,0,0,0.04)",
              }}
            >
              <div className="grid gap-6 p-5 sm:gap-8 sm:p-6 lg:grid-cols-2 lg:items-center lg:gap-8 lg:p-8">
                <div
                  className="mx-auto flex min-w-0 max-w-lg flex-col justify-center space-y-4 text-center sm:space-y-5 lg:mx-0 lg:max-w-none lg:justify-center lg:text-left"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.06 }}
                    className="text-pretty text-base font-medium leading-snug text-foreground sm:text-lg"
                  >
                    Workshops for students — mindfulness, resilience, and teamwork
                    in schools across Scotland.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.12 }}
                    className="text-pretty text-[1.02rem] leading-[1.72] sm:text-[1.05rem]"
                  >
                    In honour of the International Day of Yoga (21 June), our team
                    organises a workshop tour to support the mental health and
                    wellbeing of Scotland&apos;s students. This isn&apos;t just about
                    physical exercise; it is a journey into mindfulness, resilience,
                    and teamwork, rooted in a living tradition that spans over 5,000
                    years.
                  </motion.p>
                </div>

                <figure className="relative flex min-w-0 flex-col items-center justify-center lg:border-l lg:border-border lg:pl-6 lg:pr-2">
                  <div className="flex w-full flex-col items-center px-2 py-4 sm:px-4 sm:py-5 lg:px-2 lg:py-0">
                    <div className="mx-auto w-full max-w-[min(88vw,252px)] sm:max-w-[min(88vw,272px)] lg:max-w-[min(100%,300px)]">
                      <div
                        className="overflow-hidden rounded-2xl border shadow-md"
                        style={{
                          borderColor: "var(--border)",
                          backgroundColor: "var(--background)",
                        }}
                      >
                        <div
                          className="relative w-full overflow-hidden"
                          style={{ aspectRatio: "900 / 1220" }}
                        >
                          <Image
                            src={SCHOOLS_TOUR_POSTER_SRC}
                            alt="School Yoga Tour poster — illustrated children practising yoga in a Scottish landscape, with Scotland's International Yoga Day and Glasgow Life branding."
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 1024px) 88vw, 288px"
                            priority
                          />
                        </div>
                      </div>
                      <figcaption
                        className="mt-2 max-w-[26ch] text-center text-[11px] leading-snug text-muted-foreground sm:text-xs"
                      >
                        Tour artwork — partner schools and enquiries via{" "}
                        <span className="font-medium text-foreground/80">Contact us</span>{" "}
                        below.
                      </figcaption>
                    </div>
                  </div>
                </figure>
              </div>
            </div>

            <div className="mx-auto mt-8 max-w-6xl border-t border-foreground/10 pt-8 sm:mt-10 sm:pt-10 lg:mt-12 lg:pt-12">
              <SchoolsYogaTourSection />
            </div>

            <p
              className="mt-12 text-center text-sm sm:mt-14"
              style={{ color: "var(--muted-foreground)" }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-semibold underline underline-offset-4 transition-opacity hover:opacity-80"
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
