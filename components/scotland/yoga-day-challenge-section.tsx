"use client";

import Image from "next/image";
import { motion } from "motion/react";

const CHALLENGE_IMAGES = [
  {
    src: "/images/event/challenge/challenge-1.jpg",
    alt: "Scotland Yoga Day Challenge — participants taking part in the sun salutation challenge",
  },
  {
    src: "/images/event/challenge/challenge-2.jpg",
    alt: "Scotland Yoga Day Challenge — community energy and celebration on the day",
  },
] as const;

const LEVELS = ["15 minutes", "30 minutes", "45 minutes"] as const;

export function YogaDayChallengeSection() {
  return (
    <section
      id="yoga-challenge"
      className="scroll-mt-28 px-4 py-20 sm:px-6 sm:py-24"
      style={{ backgroundColor: "var(--muted)" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-4 text-center text-balance"
          style={{
            fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
            fontWeight: 700,
            color: "var(--primary)",
          }}
        >
          The Scotland Yoga Day Challenge
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mx-auto mb-10 max-w-3xl space-y-5 text-pretty text-center sm:mb-12"
          style={{
            fontSize: "1.08rem",
            lineHeight: 1.75,
            color: "var(--muted-foreground)",
          }}
        >
          <p>
            Take part in Scotland&apos;s Yoga Challenge and test your focus,
            endurance, and determination in a fun and uplifting atmosphere.
          </p>
          <p>
            The challenge is centred around{" "}
            <strong className="text-foreground">Surya Namaskar (Sun Salutations)</strong>
            — one of yoga&apos;s most powerful and energising sequences.
            Participants can choose their own level and complete the challenge at
            their own pace throughout the day.
          </p>
          <p>
            Whether you are a beginner looking to try something new or an
            experienced yogi wanting to push yourself further, the Yoga Challenge is
            open to everyone.
          </p>
        </motion.div>

        <div className="mb-12 grid gap-6 sm:grid-cols-2 sm:gap-8">
          {CHALLENGE_IMAGES.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="overflow-hidden rounded-2xl border shadow-md"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--background)",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1080}
                height={1080}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="aspect-square w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-center"
        >
          <h3
            className="mb-6 inline-block text-balance"
            style={{
              fontSize: "clamp(1.35rem, 2.8vw, 1.65rem)",
              fontWeight: 600,
              color: "var(--foreground)",
            }}
          >
            Challenge levels
          </h3>
        </motion.div>

        <div className="mb-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {LEVELS.map((label, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 + index * 0.06 }}
              className="rounded-xl border p-5 text-center sm:p-6"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--background)",
              }}
            >
              <p
                className="font-semibold"
                style={{
                  fontSize: "1.15rem",
                  color: "var(--primary)",
                }}
              >
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mb-10 rounded-2xl border p-6 text-center sm:p-8"
          style={{
            borderColor: "var(--primary)",
            backgroundColor: "var(--background)",
          }}
        >
          <p
            className="mx-auto max-w-2xl text-pretty"
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "var(--foreground)",
            }}
          >
            All children taking part will receive a{" "}
            <strong>medal and certificate</strong> for completing their challenge.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mx-auto max-w-3xl space-y-5 text-pretty text-center"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "var(--muted-foreground)",
          }}
        >
          <p>
            More than just a physical challenge, this is an opportunity to
            experience the deeper spirit of yoga — discipline, mindfulness, breath,
            movement, and inner strength.
          </p>
          <p className="font-medium text-foreground">
            Join us, challenge yourself, and be part of a day celebrating wellbeing,
            community, and authentic yoga in Scotland.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
