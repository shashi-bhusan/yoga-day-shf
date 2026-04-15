"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  BookOpen,
  Briefcase,
  Globe,
  Heart,
  Mountain,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import { ImageWithFallback } from "@/components/scotland/image-with-fallback";
import { ScotlandSiteHeader } from "@/components/scotland/scotland-site-header";
import { TheEventTabs } from "@/components/scotland/the-event-tabs";
const LOGO_SRC = "/images/logos/scotland-yoga-day-logo.png";
const EVENTBRITE_URL =
  "https://www.eventbrite.co.uk/e/1987392705080?aff=oddtdtcreator";
const YEARBOOK_2025_URL =
  "https://online.fliphtml5.com/msyzm/ugee/index.html";
const YEARBOOK_2024_URL = "https://online.fliphtml5.com/msyzm/jspc/";

export function ScotlandSite() {
  const pillars = [
    {
      icon: Heart,
      title: "Community Vitality",
      description:
        "Making wellness accessible to every corner of Scotland, regardless of age, ability, or background.",
    },
    {
      icon: Briefcase,
      title: "Workplace Bliss",
      description:
        "Partnering with Scotland's leading industries to tackle workplace stress and promote a culture of health.",
    },
    {
      icon: Sparkles,
      title: "The Fun Pose",
      description:
        "Bringing joy and playfulness to wellness through celebration and community connection.",
    },
  ];

  const events = [
    {
      icon: Mountain,
      title: "The Great Scottish Sun Salutation",
      description: "A massive, synchronized flow at the foot of Stirling Castle.",
    },
    {
      icon: Globe,
      title: "The Wellness Symposium",
      description:
        "A professional forum featuring experts on mindfulness, ergonomics, and mental health.",
    },
    {
      icon: Users,
      title: "Forest Bathing & Flow",
      description: "Immersive experiences in the Cairngorms and Trossachs.",
    },
    {
      icon: Video,
      title: "Digital Sanctuary",
      description:
        "A high-end virtual stream for those joining from remote areas or the office.",
    },
  ];

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

      <section id="event" className="scroll-mt-28 px-4 sm:px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-14 text-center"
          >
            <h2
              className="mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                color: "var(--primary)",
              }}
            >
              The event
            </h2>
            <p
              className="mx-auto mb-6 max-w-4xl"
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
              className="mx-auto max-w-4xl"
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
          </motion.div>
          <TheEventTabs />
        </div>
      </section>

      <section
        id="schools"
        className="scroll-mt-28 px-4 sm:px-6 py-16"
        style={{ backgroundColor: "var(--muted)" }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--primary)",
            }}
          >
            Schools Yoga Tour
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.65,
              color: "var(--muted-foreground)",
            }}
          >
            Workshops for students — mindfulness, resilience, and teamwork in
            schools across Scotland.
          </motion.p>
          <Link
            href="/schools-tour"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-center font-semibold text-white transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: "var(--secondary)" }}
          >
            Explore the Schools Yoga Tour
          </Link>
        </div>
      </section>

      <section id="pillars" className="scroll-mt-28 px-4 sm:px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--primary)",
            }}
          >
            Our Framework
          </motion.h2>
          <div className="grid gap-12 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <div
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <pillar.icon
                    size={36}
                    style={{ color: "var(--accent-foreground)" }}
                  />
                </div>
                <h3
                  className="mb-4"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                    color: "var(--muted-foreground)",
                  }}
                >
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="corporate" className="scroll-mt-28 px-4 sm:px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--primary)",
            }}
          >
            Align with wellbeing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.65,
              color: "var(--muted-foreground)",
            }}
          >
            Corporate Social Responsibility, employee wellbeing, and partnership
            opportunities with Scotland&apos;s International Yoga Day.
          </motion.p>
          <Link
            href="/corporate"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-center font-semibold text-white transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: "var(--secondary)" }}
          >
            Corporate &amp; partnerships
          </Link>
        </div>
      </section>

      <section
        id="gallery"
        className="scroll-mt-28 px-4 sm:px-6 py-24"
        style={{ backgroundColor: "var(--muted)" }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--primary)",
            }}
          >
            Event highlights
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl p-8"
                style={{ backgroundColor: "var(--background)" }}
              >
                <div
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <event.icon
                    size={28}
                    style={{ color: "var(--accent-foreground)" }}
                  />
                </div>
                <h3
                  className="mb-4"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "var(--foreground)",
                  }}
                >
                  {event.title}
                </h3>
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                    color: "var(--muted-foreground)",
                  }}
                >
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-20 max-w-5xl"
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

      <section id="origins" className="scroll-mt-28 px-4 sm:px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--primary)",
            }}
          >
            Origins of yoga &amp; Yoga Day in Scotland
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.65,
              color: "var(--muted-foreground)",
            }}
          >
            From ancient roots to today&apos;s celebration — how yoga connects with
            Scotland.
          </motion.p>
          <Link
            href="/origins"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-center font-semibold text-white transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: "var(--secondary)" }}
          >
            Read origins &amp; history
          </Link>
        </div>
      </section>

      <section
        id="impact"
        className="scroll-mt-28 px-4 sm:px-6 py-16"
        style={{ backgroundColor: "var(--muted)" }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--primary)",
            }}
          >
            Impact &amp; long-term plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.65,
              color: "var(--muted-foreground)",
            }}
          >
            Healthcare partnerships, schools, and community celebration — building
            something that lasts.
          </motion.p>
          <Link
            href="/impact"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-center font-semibold text-white transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: "var(--secondary)" }}
          >
            Read impact &amp; long-term plans
          </Link>
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
