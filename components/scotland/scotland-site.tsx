"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { BookOpen } from "lucide-react";
import { ImageWithFallback } from "@/components/scotland/image-with-fallback";
import { ScotlandSiteHeader } from "@/components/scotland/scotland-site-header";
import { EventHighlightsSection } from "@/components/scotland/event-highlights-section";
import { TheEventTabs } from "@/components/scotland/the-event-tabs";
const LOGO_SRC = "/images/logos/scotland-yoga-day-logo.png";
const EVENTBRITE_URL =
  "https://www.eventbrite.co.uk/e/1987392705080?aff=oddtdtcreator";
const YEARBOOK_2025_URL =
  "https://online.fliphtml5.com/msyzm/ugee/index.html";
const YEARBOOK_2024_URL = "https://online.fliphtml5.com/msyzm/jspc/";

/** Event section hero: `public/images/event/eventbrite-2026.png` (from 2026/Eventbrite.png; see documents/README.txt). */
const EVENT_SECTION_IMAGE_SRC = "/images/event/eventbrite-2026.png";

export function ScotlandSite() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <ScotlandSiteHeader />

      <section id="home" className="relative flex min-h-screen items-center pt-24">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full w-full"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1738084843875-48f8118c87af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx5b2dhJTIwcHJhY3RpY2UlMjBzdW5yaXNlJTIwbWVkaXRhdGlvbiUyMHBlYWNlZnVsfGVufDF8fHx8MTc3NTgzMzIzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Yoga practice at sunrise - peaceful meditation"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <Image
                src={LOGO_SRC}
                alt="Scotland's International Yoga Day"
                width={666}
                height={375}
                className="h-28 w-auto sm:h-32"
                priority
              />
            </motion.div>
            <motion.h1
              className="mb-4 text-white"
              style={{
                fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)",
                fontWeight: 700,
                lineHeight: 1.08,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Scotland&apos;s International Yoga Day 2026
            </motion.h1>
            <motion.p
              className="mb-8 text-lg text-white/95 sm:text-xl"
              style={{ lineHeight: 1.55 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              Join us for a day of yoga, mindfulness, and community.
            </motion.p>
            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href={EVENTBRITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-center font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: "var(--primary)", fontSize: "1.1rem" }}
              >
                Register now
              </a>
              <a
                href="#event"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/90 bg-white/10 px-6 py-3 text-center font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Event details
              </a>
            </motion.div>
            <motion.p
              className="mt-8 text-sm text-white/85"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Presented with the{" "}
              <span className="font-semibold text-white">Scottish Hindu Foundation</span>
              {" · "}
              <span className="font-semibold text-white">
                The Shankaracharya Foundation
              </span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section
        id="event"
        className="scroll-mt-28 px-4 pt-24 pb-8 sm:px-6 sm:pb-10"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-10"
          >
            <h2 className="mb-8 text-center lg:mb-10">
              <span className="sr-only">The Event</span>
              <span
                aria-hidden
                className="relative inline-flex flex-wrap items-baseline justify-center gap-x-1 sm:gap-x-1.5"
                style={{
                  fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
                  lineHeight: 1.05,
                }}
              >
                <span
                  className="font-semibold lowercase"
                  style={{
                    color: "var(--muted-foreground)",
                    fontSize: "0.42em",
                    letterSpacing: "-0.02em",
                  }}
                >
                  the
                </span>
                <span
                  className="font-extrabold tracking-tight"
                  style={{
                    backgroundImage:
                      "linear-gradient(118deg, var(--primary) 0%, #c2410c 52%, #ea580c 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Event
                </span>
              </span>
              <span
                aria-hidden
                className="mx-auto mt-4 flex w-full max-w-xs flex-col items-center justify-center gap-2 sm:max-w-none sm:flex-row sm:gap-3"
              >
                <span
                  className="h-1 w-14 rounded-full sm:w-20"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--primary), transparent)",
                  }}
                />
                <span
                  className="text-center text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  20 June · Glasgow & nationwide
                </span>
                <span
                  className="hidden h-1 w-14 rounded-full sm:block sm:w-20"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--primary), transparent)",
                  }}
                />
              </span>
            </h2>
            <div className="mx-auto grid max-w-5xl items-center gap-8 text-center lg:grid-cols-12 lg:gap-10 lg:text-left">
              <div className="space-y-6 lg:col-span-6">
                <p
                  className="mx-auto max-w-2xl lg:mx-0"
                  style={{
                    fontSize: "1.2rem",
                    lineHeight: 1.8,
                    color: "var(--foreground)",
                  }}
                >
                  On 20 June, Scotland joins the global community to celebrate
                  International Yoga Day. This isn&apos;t just a series of classes; it
                  is a coordinated national movement designed to improve physical and
                  mental resilience for all.
                </p>
                <p
                  className="mx-auto max-w-2xl lg:mx-0"
                  style={{
                    fontSize: "1.2rem",
                    lineHeight: 1.8,
                    color: "var(--foreground)",
                  }}
                >
                  Through our flagship gathering at The Pyramid, Glasgow, alongside
                  community-led activities across the country, we bridge ancient
                  tradition and modern Scottish life.
                </p>
              </div>
              <figure className="mx-auto flex w-full max-w-full flex-col items-center justify-self-center lg:col-span-6">
                <div
                  className="flex w-fit max-w-full justify-center rounded-2xl border p-2 shadow-md sm:p-3"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--muted)",
                  }}
                >
                  {/* Portrait poster: card shrink-wraps image (no side gutters); height cap keeps overlays visible */}
                  <Image
                    src={EVENT_SECTION_IMAGE_SRC}
                    width={1200}
                    height={2100}
                    alt="Scotland's International Yoga Day — official Eventbrite listing and June celebration across Scotland."
                    className="h-auto max-h-[min(92vh,1180px)] w-auto max-w-full object-contain"
                    sizes="(max-width: 1024px) 100vw, min(560px, 45vw)"
                  />
                </div>
                <figcaption
                  className="mt-3 w-full max-w-prose text-center text-sm leading-snug lg:text-left"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Official tickets and event information on Eventbrite — June
                  celebration with flagship activities in Glasgow and nationwide.
                </figcaption>
              </figure>
            </div>
          </motion.div>
          <TheEventTabs />
        </div>
      </section>

      <EventHighlightsSection />

      <section
        id="gallery"
        className="scroll-mt-28 px-4 sm:px-6 py-24"
        style={{ backgroundColor: "var(--muted)" }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto max-w-5xl"
          >
            <h3
              className="mb-4 text-center"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                color: "var(--primary)",
              }}
            >
              Souvenir
            </h3>
            <p
              className="mx-auto mb-10 max-w-2xl text-center"
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.65,
                color: "var(--muted-foreground)",
              }}
            >
              Digital souvenir flipbooks from past Scotland&apos;s International Yoga
              Day celebrations. Each link opens in a new browser tab.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col rounded-2xl p-8"
                style={{ backgroundColor: "var(--background)" }}
              >
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <BookOpen
                    size={26}
                    style={{ color: "var(--accent-foreground)" }}
                  />
                </div>
                <h4
                  className="mb-3"
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                  }}
                >
                  2025 edition
                </h4>
                <p
                  className="mb-6 flex-1"
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                    color: "var(--muted-foreground)",
                  }}
                >
                  Highlights and memories from the 2025 celebration.
                </p>
                <a
                  href={YEARBOOK_2025_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-center font-semibold text-white transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: "var(--primary)" }}
                >
                  Open 2025 flipbook
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="flex flex-col rounded-2xl p-8"
                style={{ backgroundColor: "var(--background)" }}
              >
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <BookOpen
                    size={26}
                    style={{ color: "var(--accent-foreground)" }}
                  />
                </div>
                <h4
                  className="mb-3"
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                  }}
                >
                  2024 edition
                </h4>
                <p
                  className="mb-6 flex-1"
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                    color: "var(--muted-foreground)",
                  }}
                >
                  Look back at the 2024 programme and community moments.
                </p>
                <a
                  href={YEARBOOK_2024_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-center font-semibold text-white transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: "var(--secondary)" }}
                >
                  Open 2024 flipbook
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer
        id="involved"
        className="scroll-mt-28 px-4 sm:px-6 py-20"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="mb-4 text-white"
              style={{ fontSize: "2.5rem", fontWeight: 700 }}
            >
              Stay informed
            </h2>
            <p
              className="mb-8 text-white/90"
              style={{ fontSize: "1.15rem", lineHeight: 1.7 }}
            >
              Sign up for the latest schedule releases, instructor announcements,
              and early-bird registration.
            </p>
            <div className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row sm:gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 rounded-lg px-6 py-4 text-foreground"
                style={{ fontSize: "1rem" }}
              />
              <button
                type="button"
                className="rounded-lg px-8 py-4 transition-transform hover:scale-105"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--accent-foreground)",
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
              >
                Subscribe
              </button>
            </div>
            <p className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
              <a
                href={EVENTBRITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 hover:text-white"
              >
                Tickets on Eventbrite
              </a>
              <span aria-hidden className="text-white/40">
                ·
              </span>
              <Link href="/info" className="underline underline-offset-4 hover:text-white">
                Text-only details
              </Link>
            </p>
            <div className="mt-12 border-t border-white/20 pt-8 text-white/70">
              <p style={{ fontSize: "0.95rem" }}>
                {
                  "© 2026 Designed and Maintained by beenaIT Solutions. All rights reserved."
                }
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
