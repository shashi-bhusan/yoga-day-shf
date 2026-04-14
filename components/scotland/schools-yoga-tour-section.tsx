"use client";

import { motion } from "motion/react";

const contactMail = "mailto:info@yogadayshf.org?subject=Schools%20Yoga%20Tour";

export function SchoolsYogaTourSection() {
  return (
    <div className="mx-auto max-w-3xl space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          In honour of the International Day of Yoga (21 June), our team organises
          a workshop tour to support the mental health and wellbeing of
          Scotland&apos;s students. This isn&apos;t just about physical exercise;
          it is a journey into mindfulness, resilience, and teamwork, rooted in a
          living tradition that spans over 5,000 years.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        <h3
          className="mb-4"
          style={{
            fontSize: "1.45rem",
            fontWeight: 700,
            color: "var(--primary)",
          }}
        >
          Benefits for students
        </h3>
        <p
          className="mb-4"
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
        <ul
          className="list-disc space-y-3 pl-5"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: "var(--muted-foreground)",
          }}
        >
          <li>
            <strong className="text-foreground">Instant stress decompression:</strong>{" "}
            Simple pranayama (breathwork) techniques to lower cortisol and manage
            exam-season anxiety.
          </li>
          <li>
            <strong className="text-foreground">Sharpened cognitive focus:</strong>{" "}
            Movement sequences that reset the brain, improving concentration and
            information retention.
          </li>
          <li>
            <strong className="text-foreground">Emotional resilience:</strong>{" "}
            Teaching the pause — helping students respond to challenges with calm
            rather than impulse.
          </li>
          <li>
            <strong className="text-foreground">Physical vitality:</strong>{" "}
            Improving posture and mobility (ideal for counteracting desk slouch).
          </li>
          <li>
            <strong className="text-foreground">Social connection:</strong>{" "}
            Team-building exercises that foster empathy, trust, and community.
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h3
          className="mb-4"
          style={{
            fontSize: "1.45rem",
            fontWeight: 700,
            color: "var(--primary)",
          }}
        >
          How the workshop works
        </h3>
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
        <h3
          className="mb-4"
          style={{
            fontSize: "1.45rem",
            fontWeight: 700,
            color: "var(--primary)",
          }}
        >
          Partner with us
        </h3>
        <h4
          className="mb-2"
          style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--foreground)" }}
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
          insurance-certified, and deeply experienced in working with children and
          young people. They combine modern physiological expertise with the
          spiritual depth of the practice.
        </p>
        <h4
          className="mb-2"
          style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--foreground)" }}
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
          exercise&rdquo; to honour the heritage, ethics, and philosophy that make
          yoga a holistic path to wellbeing.
        </p>
        <h4
          className="mb-2"
          style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--foreground)" }}
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
          collaboration with school leadership, we ensure the content aligns with
          your specific Health and Wellbeing (HWB) goals for the term.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="rounded-2xl border p-8 text-center"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--muted)" }}
      >
        <h3
          className="mb-3"
          style={{
            fontSize: "1.35rem",
            fontWeight: 700,
            color: "var(--primary)",
          }}
        >
          Contact us
        </h3>
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
