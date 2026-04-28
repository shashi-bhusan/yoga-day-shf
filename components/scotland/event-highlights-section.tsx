"use client";

import { motion } from "motion/react";
import { GalleryMasonry } from "@/components/gallery/gallery-masonry";
import { eventHighlightsItems } from "@/lib/event-highlights";
import Link from "next/link";

export function EventHighlightsSection() {
  const items = eventHighlightsItems();

  return (
    <section
      id="event-highlights"
      className="scroll-mt-28 bg-background px-4 pt-5 pb-14 sm:px-6 sm:pt-6 sm:pb-16"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-3 text-center"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "var(--primary)",
          }}
        >
          Event highlights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mx-auto mb-6 max-w-2xl text-center text-pretty sm:mb-8"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: "var(--muted-foreground)",
          }}
        >
          Moments from recent celebrations — practice, performance, and community
          across Scotland. See the full{" "}
          <Link
            href="/gallery"
            className="font-semibold underline underline-offset-4 transition-opacity hover:opacity-80"
            style={{ color: "var(--primary)" }}
          >
            photo gallery
          </Link>{" "}
          for more by year.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <GalleryMasonry
            items={items}
            photoAltPrefix="Scotland's International Yoga Day — event highlight"
            imageQuality={88}
          />
        </motion.div>
      </div>
    </section>
  );
}
