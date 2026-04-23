"use client";

import { motion } from "motion/react";
import { Briefcase, Heart, Sparkles } from "lucide-react";

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
] as const;

export function FrameworkSection() {
  return (
    <div className="mx-auto max-w-7xl">
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
  );
}
