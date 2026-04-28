"use client";

import { motion } from "motion/react";
import { Briefcase, Heart, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Community Vitality",
    description:
      "Reflects the principle of balance and harmony. By making wellness accessible to every corner of Scotland, regardless of age, ability, or background, the initiative nurtures a collective upliftment. When individuals are supported in their wellbeing, the entire community becomes more aligned and resilient.",
  },
  {
    icon: Briefcase,
    title: "Bliss Vitality",
    description:
      "Addresses overactivity and restlessness, commonly seen in modern work culture. By partnering with leading industries, this pillar introduces practices that calm the nervous system, reduce stress, and foster mindful productivity. It shifts workplaces from burnout-driven environments to spaces of sustainable energy and purpose.",
  },
  {
    icon: Sparkles,
    title: "Life Vitality",
    description:
      "Embodies the joy and playfulness of life. Joy is not separate from wellbeing; it is essential to it. Through celebration, movement, and shared experiences, this component reminds us that connection and laughter are powerful healers.",
  },
] as const;

export function FrameworkSection() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-8 sm:gap-10 md:grid-cols-3 md:items-start md:gap-6 lg:gap-10">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="mx-auto max-w-md text-left md:max-w-none"
          >
            <div
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full md:mx-0 md:mb-5"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <pillar.icon
                size={30}
                style={{ color: "var(--accent-foreground)" }}
              />
            </div>
            <h3
              className="mb-3 text-center md:text-left"
              style={{
                fontSize: "1.35rem",
                fontWeight: 600,
                color: "var(--foreground)",
              }}
            >
              {pillar.title}
            </h3>
            <p
              className="text-pretty"
              style={{
                fontSize: "1.02rem",
                lineHeight: 1.72,
                color: "var(--muted-foreground)",
              }}
            >
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mx-auto mt-10 max-w-3xl text-pretty text-center sm:mt-12"
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.75,
          color: "var(--muted-foreground)",
        }}
      >
        Together, these three vitality components create a living expression of yoga
        that is both authentic and accessible — honouring its roots while allowing it
        to flourish in Scotland&apos;s unique cultural landscape.
      </motion.p>
    </div>
  );
}
