"use client";

import { motion } from "motion/react";

export function OriginsSection() {
  return (
    <div className="mx-auto max-w-3xl space-y-10">
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
          From the Himalayas to the Highlands: the journey of yoga
        </h3>
        <p
          className="mb-4"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          Yoga originated in the sacred Vedic traditions of ancient India.
          Developed by sages and scholars, it was never intended to be just
          &ldquo;stretching.&rdquo; It was designed as a holistic science to unite
          the body, mind, and spirit.
        </p>
        <p
          className="mb-4"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          Yoga is one of the world&apos;s oldest holistic traditions, with origins
          stretching back over 5,000 years to ancient India. Far more than a
          physical practice, yoga emerged as a comprehensive system for cultivating
          harmony between mind, body, and spirit.
        </p>
        <p
          className="mb-4"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          The earliest references to yogic practices appear in the Vedas, sacred
          texts composed between 1500 and 500 BCE, where meditation, breath
          control, and spiritual discipline are central themes. Over time, these
          ideas were further explored in the Upanishads, which shifted the focus
          inward — encouraging self-inquiry, awareness, and liberation (moksha)
          through disciplined practice.
        </p>
        <p
          className="mb-4"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          Yoga was systematised in the Yoga Sutras of Patanjali, a foundational text
          that outlines the Eight Limbs of Yoga — ethical living, self-discipline,
          posture, breath, sensory awareness, concentration, meditation, and
          ultimate union or clarity of consciousness. This framework continues to
          guide yoga practitioners around the world today.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          As yoga evolved, later traditions such as Hatha Yoga placed greater
          emphasis on the physical body as a vehicle for spiritual growth,
          introducing postures (asanas) and breath practices (pranayama) that are
          now widely recognised. Despite its global spread, yoga remains deeply
          rooted in its original purpose: cultivating awareness, balance,
          compassion, and dharma.
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
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--primary)",
          }}
        >
          International Day of Yoga
        </h3>
        <p
          className="mb-4"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          Recognising yoga&apos;s universal value, the United Nations officially
          declared 21 June as the International Day of Yoga in 2014. The date
          coincides with the summer solstice, symbolising light, renewal, and
          transformation — themes that align closely with yogic philosophy.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          Since then, the International Day of Yoga has become a worldwide
          celebration of wellbeing, bringing communities together across cultures,
          faiths, and generations to experience yoga as a shared human practice.
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
          Scotland&apos;s International Yoga Day
        </h3>
        <p
          className="mb-4"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          Scotland has embraced International Yoga Day with a distinctly
          community-focused and inclusive spirit. Each year, smaller events are held
          across the country — from Edinburgh, Glasgow, and Aberdeen to local parks,
          studios, and cultural venues — welcoming people of all backgrounds and
          abilities.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--muted-foreground)",
          }}
        >
          In recent years, Scotland&apos;s International Yoga Day has grown into a
          flagship celebration, hosted in Edinburgh and more recently Glasgow, and
          supported by the Scottish Hindu Foundation. These events often combine
          yoga practice with meditation, cultural performances, talks on health and
          wellbeing, and opportunities for reflection. What makes Scotland&apos;s
          celebrations unique is the emphasis on accessibility, community
          wellbeing, and shared heritage — yoga presented not as a commercial
          trend, but as a living practice that supports physical health, mental
          resilience, and social connection.
        </p>
      </motion.div>
    </div>
  );
}
