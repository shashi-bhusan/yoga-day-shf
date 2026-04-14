"use client";

import { motion } from "motion/react";

export function ImpactSection() {
  return (
    <div className="mx-auto max-w-3xl space-y-12 text-left">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3
          className="mb-4"
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--primary)",
          }}
        >
          The impact so far
        </h3>
        <h4
          className="mb-3"
          style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--foreground)" }}
        >
          NHS Edinburgh: yoga on prescription
        </h4>
        <p
          className="mb-4"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          One of the most significant milestones to date has been the introduction
          of yoga on prescription through NHS Edinburgh. By working in partnership
          with healthcare professionals, yoga is now being recognised not just as a
          wellbeing activity, but as a supportive, preventative health intervention.
        </p>
        <p
          className="mb-4"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          Through social prescribing pathways, patients are being signposted to
          yoga as a complementary option to help manage stress, anxiety,
          low-level depression, chronic pain, and overall wellbeing. This marks an
          important shift from yoga being perceived as an optional lifestyle
          activity to becoming a credible, accessible tool within community
          healthcare.
        </p>
        <p
          className="mb-2 font-semibold"
          style={{ color: "var(--foreground)" }}
        >
          This initiative helps to:
        </p>
        <ul
          className="list-disc space-y-2 pl-5"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "var(--muted-foreground)",
          }}
        >
          <li>
            Reduce barriers to access, particularly for those who may not
            otherwise seek out yoga.
          </li>
          <li>
            Support patients holistically — addressing mental, emotional, and
            physical health together.
          </li>
          <li>
            Ease pressure on traditional clinical services by providing non-medical
            wellbeing support.
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        <h4
          className="mb-3"
          style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--foreground)" }}
        >
          Working with the NHS to make yoga more accessible
        </h4>
        <p
          className="mb-4"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          Our collaboration with the NHS goes beyond a single programme. It
          represents a shared commitment to health equity and accessibility.
        </p>
        <p
          className="mb-2 font-semibold"
          style={{ color: "var(--foreground)" }}
        >
          By working closely with health professionals, community groups, and local
          organisations, we aim to ensure that yoga:
        </p>
        <ul
          className="list-disc space-y-2 pl-5"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "var(--muted-foreground)",
          }}
        >
          <li>
            Is inclusive and welcoming to people of all ages, abilities, and
            backgrounds.
          </li>
          <li>
            Is delivered safely, responsibly, and with appropriate clinical
            awareness.
          </li>
          <li>
            Reflects the needs of local communities rather than a one-size-fits-all
            approach.
          </li>
        </ul>
        <p
          className="mt-4"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          This partnership approach ensures yoga remains grounded, evidence-informed,
          and aligned with wider public health goals across Scotland.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.08 }}
      >
        <h3
          className="mb-4"
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--primary)",
          }}
        >
          International Yoga Day: growing every year
        </h3>
        <p
          className="mb-4"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          Each year, International Yoga Day in Scotland continues to grow in scale,
          reach, and impact. What began as a single celebration has evolved into a
          nationwide moment of connection — bringing together communities,
          teachers, organisations, and first-time participants.
        </p>
        <p
          className="mb-2 font-semibold"
          style={{ color: "var(--foreground)" }}
        >
          The growth of International Yoga Day reflects:
        </p>
        <ul
          className="list-disc space-y-2 pl-5"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "var(--muted-foreground)",
          }}
        >
          <li>
            Rising awareness of yoga&apos;s benefits for wellbeing and mental health.
          </li>
          <li>Strong community appetite for inclusive, shared experiences.</li>
          <li>
            Increasing collaboration between cultural, health, and grassroots
            organisations.
          </li>
        </ul>
        <p
          className="mt-4"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          More importantly, it demonstrates that yoga in Scotland is not static —
          it is a living, evolving practice that continues to meet people where they
          are.
        </p>
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
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--primary)",
          }}
        >
          Looking ahead: our long-term plans
        </h3>
        <h4
          className="mb-3"
          style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--foreground)" }}
        >
          Expanding the Schools Yoga Tour
        </h4>
        <p
          className="mb-4"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          Looking to the future, a key priority is to expand the Schools Yoga Tour,
          bringing yoga directly into educational settings across Scotland. Children
          and young people today face increasing pressures — from academic stress and
          social challenges to digital overload and anxiety. Introducing yoga in
          schools offers practical tools that support emotional regulation and
          resilience, focus and self-awareness, and physical movement and healthy
          habits.
        </p>
        <p
          className="mb-2 font-semibold"
          style={{ color: "var(--foreground)" }}
        >
          By expanding the Schools Yoga Tour, we aim to:
        </p>
        <ul
          className="mb-4 list-disc space-y-2 pl-5"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "var(--muted-foreground)",
          }}
        >
          <li>
            Reach more schools across urban, rural, and underserved areas.
          </li>
          <li>
            Support pupils of all ages with age-appropriate, inclusive yoga
            practices.
          </li>
          <li>
            Work alongside teachers and education professionals to complement
            existing wellbeing initiatives.
          </li>
        </ul>
        <p
          className="mb-8"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          This is not about replacing physical education or mindfulness programmes,
          but about adding another supportive layer — one that equips young people
          with lifelong tools for balance and wellbeing.
        </p>
        <h4
          className="mb-3"
          style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--foreground)" }}
        >
          A sustainable vision
        </h4>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          The impact we are building through healthcare partnerships, community
          celebration, and education is part of a longer-term vision: a Scotland
          where yoga is accessible, grounded, and embedded into everyday life — not
          reserved for a select few. By focusing on collaboration, inclusion, and
          long-term sustainability, we aim to ensure that yoga continues to support
          individuals, communities, and public wellbeing for generations to come.
        </p>
      </motion.div>
    </div>
  );
}
