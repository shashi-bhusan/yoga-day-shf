"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Briefcase,
  Globe,
  Heart,
  Mountain,
  Sparkles,
  SunMoon,
  Users,
  Video,
} from "lucide-react";
import { useSiteTheme } from "@/components/theme-context";
import { ImageWithFallback } from "@/components/scotland/image-with-fallback";
import { TheEventTabs } from "@/components/scotland/the-event-tabs";
import { SchoolsYogaTourSection } from "@/components/scotland/schools-yoga-tour-section";
import { OriginsSection } from "@/components/scotland/origins-section";
import { ImpactSection } from "@/components/scotland/impact-section";

const LOGO_SRC = "/images/logos/scotland-yoga-day-logo.png";
const EVENTBRITE_URL = "https://www.eventbrite.co.uk";

export function ScotlandSite() {
  const { theme, toggleTheme } = useSiteTheme();
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "The Event", href: "#event" },
    { name: "Schools Tour", href: "#schools" },
    { name: "Our Pillars", href: "#pillars" },
    { name: "Corporate", href: "#corporate" },
    { name: "Highlights", href: "#gallery" },
    { name: "Origins", href: "#origins" },
    { name: "Impact", href: "#impact" },
    { name: "Get Involved", href: "#involved" },
  ];

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

  const themeToggleLabel =
    theme === "traditional"
      ? "Switch to modern theme"
      : "Switch to traditional theme";

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <motion.button
        type="button"
        onClick={toggleTheme}
        className="fixed top-3 right-3 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-background/95 text-foreground shadow-md backdrop-blur-md sm:top-4 sm:right-4 sm:h-12 sm:w-12"
        aria-label={themeToggleLabel}
        title={themeToggleLabel}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        <SunMoon className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" aria-hidden />
      </motion.button>

      <motion.nav
        aria-label="Primary"
        className="fixed top-0 right-0 left-0 z-40 border-b backdrop-blur-md"
        style={{
          opacity: headerOpacity,
          borderColor: "var(--border)",
          backgroundColor: "rgba(255, 255, 255, 0.88)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-1 pr-14 sm:px-6 sm:py-1 sm:pr-16 lg:pr-20">
          <div className="flex flex-col gap-1.5 sm:gap-2 lg:flex-row lg:items-center lg:gap-4">
            <div className="relative z-10 flex min-w-0 shrink-0 items-center">
              <Image
                src={LOGO_SRC}
                alt="Scotland's International Yoga Day"
                width={666}
                height={375}
                className="h-16 w-auto sm:h-20 lg:h-24"
                priority
              />
            </div>
            <div className="hidden min-h-0 min-w-0 flex-1 items-center justify-center lg:flex">
              <div className="flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[0.8125rem] font-medium leading-tight tracking-wide text-foreground/85 sm:gap-x-4 sm:text-sm xl:gap-x-5 xl:text-[0.9375rem]">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="whitespace-nowrap rounded-sm px-0.5 transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-2.5 gap-y-0.5 border-t border-foreground/10 px-3 py-1 text-[0.8125rem] font-medium leading-tight text-foreground/85 sm:gap-x-3 sm:text-sm lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="underline-offset-2 transition-colors hover:text-foreground hover:underline"
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.nav>

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

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
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

      <section id="event" className="scroll-mt-28 px-6 py-24">
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
        className="scroll-mt-28 px-6 py-24"
        style={{ backgroundColor: "var(--muted)" }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-center"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
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
        </div>
      </section>

      <section id="pillars" className="scroll-mt-28 px-6 py-24">
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
            Our three pillars
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

      <section id="corporate" className="scroll-mt-28 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="mb-8 text-center"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "var(--primary)",
              }}
            >
              Align with wellbeing
            </h2>
            <p
              className="mx-auto mb-8 max-w-3xl text-center"
              style={{ fontSize: "1.15rem", lineHeight: 1.7 }}
            >
              Showcase your organization&apos;s commitment to Corporate Social
              Responsibility (CSR) and employee health. Scotland&apos;s
              International Yoga Day offers a unique platform to reach an engaged,
              health-conscious audience.
            </p>
            <div
              className="mb-12 rounded-2xl p-8 text-center"
              style={{ backgroundColor: "var(--muted)" }}
            >
              <p
                style={{
                  fontSize: "1.6rem",
                  fontStyle: "italic",
                  color: "var(--primary)",
                  fontWeight: 500,
                }}
              >
                &ldquo;Investing in the health of our nation is the most sustainable
                investment a business can make.&rdquo;
              </p>
            </div>

            <h3
              className="mb-8"
              style={{
                fontSize: "1.8rem",
                fontWeight: 600,
                color: "var(--foreground)",
              }}
            >
              Why partner with us?
            </h3>
            <div className="mb-10 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Brand visibility",
                  desc: "National press coverage and high-traffic digital placement.",
                },
                {
                  title: "Employee engagement",
                  desc: 'Exclusive "Corporate Wellness Packages" for your staff.',
                },
                {
                  title: "Social impact",
                  desc: 'Support local mental health charities through our "Yoga for All" fund.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="rounded-xl p-6"
                  style={{
                    backgroundColor: "var(--background)",
                    border: "2px solid var(--border)",
                  }}
                >
                  <h4
                    className="mb-3"
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "var(--primary)",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "1.05rem", lineHeight: 1.6 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <button
                type="button"
                className="rounded-lg px-10 py-4 text-white transition-transform hover:scale-105"
                style={{
                  backgroundColor: "var(--secondary)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                }}
              >
                View partnership opportunities
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="gallery"
        className="scroll-mt-28 px-6 py-24"
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
        </div>
      </section>

      <section id="origins" className="scroll-mt-28 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--primary)",
            }}
          >
            Origins of yoga &amp; Yoga Day in Scotland
          </motion.h2>
          <OriginsSection />
        </div>
      </section>

      <section
        id="impact"
        className="scroll-mt-28 px-6 py-24"
        style={{ backgroundColor: "var(--muted)" }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-center"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
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
            className="mx-auto mb-12 max-w-2xl text-center"
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.65,
              color: "var(--muted-foreground)",
            }}
          >
            Healthcare partnerships, schools, and community celebration — building
            something that lasts.
          </motion.p>
          <ImpactSection />
        </div>
      </section>

      <footer
        id="involved"
        className="scroll-mt-28 px-6 py-20"
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
