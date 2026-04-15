"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function CorporateSection() {
  return (
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
          Responsibility (CSR) and employee health. Scotland&apos;s International
          Yoga Day offers a unique platform to reach an engaged, health-conscious
          audience.
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
          <Link
            href="/#involved"
            className="inline-block rounded-lg px-10 py-4 text-white transition-transform hover:scale-105"
            style={{
              backgroundColor: "var(--secondary)",
              fontSize: "1.1rem",
              fontWeight: 600,
            }}
          >
            View partnership opportunities
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
