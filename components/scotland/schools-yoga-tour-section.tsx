"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const contactMail = "mailto:info@yogadayshf.org?subject=Schools%20Yoga%20Tour";

function SectionTitle({
  children,
  centered = false,
}: {
  children: ReactNode;
  centered?: boolean;
}) {
  return (
    <h3
      className={`mb-5 flex items-center gap-3 text-balance sm:mb-6 ${centered ? "justify-center" : ""}`}
      style={{
        fontSize: "clamp(1.35rem, 2.5vw, 1.6rem)",
        fontWeight: 700,
        color: "var(--primary)",
      }}
    >
      <span
        className="h-8 w-1 shrink-0 rounded-full sm:h-9"
        style={{ backgroundColor: "var(--primary)" }}
        aria-hidden
      />
      {children}
    </h3>
  );
}

export function SchoolsYogaTourSection() {
  return (
    <div className="space-y-10 sm:space-y-14">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        <SectionTitle>Benefits for students</SectionTitle>
        <p
          className="mb-6 max-w-3xl text-pretty sm:mb-8"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "var(--muted-foreground)",
          }}
        >
          Yoga is more than a stretch; it&apos;s a toolkit for life. Our workshops
          are designed to provide immediate wins for students&apos; mental and
          physical health:
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {[
            {
              title: "Instant stress decompression",
              body: "Simple pranayama (breathwork) techniques to lower cortisol and manage exam-season anxiety.",
            },
            {
              title: "Sharpened cognitive focus",
              body: "Movement sequences that reset the brain, improving concentration and information retention.",
            },
            {
              title: "Emotional resilience",
              body: "Teaching the pause — helping students respond to challenges with calm rather than impulse.",
            },
            {
              title: "Physical vitality",
              body: "Improving posture and mobility (ideal for counteracting desk slouch).",
            },
            {
              title: "Social connection",
              body: "Team-building exercises that foster empathy, trust, and community.",
            },
          ].map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-border bg-muted/45 p-4 sm:p-5"
            >
              <p
                className="mb-1.5 font-semibold text-foreground"
                style={{ fontSize: "1.02rem" }}
              >
                {item.title}
              </p>
              <p
                className="text-pretty leading-relaxed"
                style={{
                  fontSize: "0.98rem",
                  lineHeight: 1.65,
                  color: "var(--muted-foreground)",
                }}
              >
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <SectionTitle>How the workshop works</SectionTitle>
        <p
          className="mb-4"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "var(--muted-foreground)",
          }}
        >
          We know the school diary is packed. That&apos;s why we&apos;ve optimised
          our tour into a{" "}
          <strong className="text-foreground">30-minute high-impact session</strong>{" "}
          that can be delivered in a gym hall, assembly space, or even a large
          classroom.
        </p>
        <ul
          className="space-y-4"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "var(--muted-foreground)",
          }}
        >
          <li>
            <strong className="text-foreground">The context (5 mins):</strong> A
            brief, engaging introduction to yoga&apos;s roots and its journey from
            the Hindu tradition to modern Scotland.
          </li>
          <li>
            <strong className="text-foreground">The flow (20 mins):</strong> An
            active, inclusive session led by Glasgow&apos;s top-tier teachers,
            focusing on team-building poses and mindful movement.
          </li>
          <li>
            <strong className="text-foreground">The toolset (5 mins):</strong> A
            takeaway meditation or breathing technique students can use at their
            desks when they feel stressed.
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.12 }}
      >
        <SectionTitle>Partner with us</SectionTitle>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-8">
          <div className="space-y-4">
            <div
              className="overflow-hidden rounded-2xl border"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--muted)" }}
            >
              <Image
                src="/images/sections/partner-with-us-dsc05530.png"
                alt="Community partners standing together at a yoga day event"
                width={2048}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="aspect-[16/9] overflow-hidden rounded-2xl border"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--muted)" }}
            >
              <Image
                src="/images/sections/cultural-integrity-img20240622.png"
                alt="Cultural programme at a Hindu community event in Glasgow"
                width={2048}
                height={910}
                className="h-full w-full object-cover object-[42%_50%]"
              />
            </div>
          </div>
          <div>
            <h4
              className="mb-2"
              style={{
                fontSize: "1.15rem",
                fontWeight: 600,
                color: "var(--foreground)",
              }}
            >
              The best of Glasgow
            </h4>
            <p
              className="mb-6"
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "var(--muted-foreground)",
              }}
            >
              We aren&apos;t just bringing yoga to your school; we are bringing
              Glasgow&apos;s premier yoga talent. Our facilitators are highly vetted,
              insurance-certified, and deeply experienced in working with children
              and young people. They combine modern physiological expertise with the
              spiritual depth of the practice.
            </p>
            <h4
              className="mb-2"
              style={{
                fontSize: "1.15rem",
                fontWeight: 600,
                color: "var(--foreground)",
              }}
            >
              Cultural integrity
            </h4>
            <p
              className="mb-6"
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "var(--muted-foreground)",
              }}
            >
              By partnering with the Hindu community, your school is choosing an
              authentic educational experience. We move beyond &ldquo;yoga as
              exercise&rdquo; to honour the heritage, ethics, and philosophy that
              make yoga a holistic path to wellbeing.
            </p>
            <h4
              className="mb-2"
              style={{
                fontSize: "1.15rem",
                fontWeight: 600,
                color: "var(--foreground)",
              }}
            >
              Bring the tour to your school
            </h4>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "var(--muted-foreground)",
              }}
            >
              We handle the logistics; you provide the space. Organised in close
              collaboration with school leadership, we ensure the content aligns
              with your specific Health and Wellbeing (HWB) goals for the term.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="rounded-2xl border p-8 text-center"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--muted)" }}
      >
        <SectionTitle centered>Contact us</SectionTitle>
        <p
          className="mb-4"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: "var(--muted-foreground)",
          }}
        >
          To bring the Schools Yoga Tour to your school, email us with your
          location, year groups, and preferred term.
        </p>
        <a
          href={contactMail}
          className="inline-flex rounded-lg px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--secondary)" }}
        >
          Email the team
        </a>
      </motion.div>
    </div>
  );
}
