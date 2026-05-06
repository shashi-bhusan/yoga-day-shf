"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useCallback, useState, type FormEvent } from "react";

const CORPORATE_MAIL = "info@scotlandyogaday.co.uk";

const involvementRows = [
  {
    opportunity: "Sponsorship",
    description:
      "Elevate your brand visibility through our marketing materials, social media, and on-site event signage.",
  },
  {
    opportunity: "Workshops",
    description:
      "Share your expertise by leading a session or demonstration focused on yoga, nutrition, or mental health.",
  },
  {
    opportunity: "Exhibitor stalls",
    description:
      "Engage directly with attendees by showcasing products or services that promote a healthy lifestyle.",
  },
  {
    opportunity: "Volunteer teams",
    description:
      "Boost employee morale by engaging your staff in a fulfilling day of event coordination and community service.",
  },
] as const;

const interestOptions = [
  { value: "", label: "Select an option" },
  { value: "Sponsorship", label: "Sponsorship" },
  { value: "Workshop", label: "Workshop" },
  { value: "Exhibitor stall", label: "Exhibitor stall" },
  { value: "Partner", label: "Partner" },
  { value: "Volunteer team", label: "Volunteer team" },
  { value: "Other", label: "Other" },
] as const;

export function CorporateSection() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [startedAt] = useState(() => Date.now());
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitOk, setSubmitOk] = useState(false);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setSubmitError(null);
      setSubmitOk(false);
      setIsSending(true);

      try {
        const res = await fetch("/api/corporate-inquiry", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name,
            contact,
            organisation,
            interest,
            message,
            website,
            startedAt,
          }),
        });

        const data = (await res.json().catch(() => null)) as
          | { ok: true }
          | { ok: false; error?: string }
          | null;

        if (!res.ok || !data || !("ok" in data) || data.ok !== true) {
          const errorMessage =
            data && "error" in data && data.error
              ? data.error
              : "We couldn’t send your enquiry. Please try again.";
          setSubmitError(errorMessage);
          return;
        }

        setSubmitOk(true);
        setName("");
        setContact("");
        setOrganisation("");
        setInterest("");
        setMessage("");
        setWebsite("");
      } catch {
        setSubmitError("We couldn’t send your enquiry. Please try again.");
      } finally {
        setIsSending(false);
      }
    },
    [name, contact, organisation, interest, message, website, startedAt],
  );

  return (
    <div className="mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className="mb-6 text-center text-balance sm:mb-8"
          style={{
            fontSize: "clamp(1.75rem, 3.8vw, 2.75rem)",
            fontWeight: 700,
            color: "var(--primary)",
          }}
        >
          Partner with us: celebrate yoga, community &amp; wellbeing
        </h2>
        <div
          className="mx-auto mb-10 max-w-3xl space-y-5 text-pretty sm:mb-12"
          style={{ fontSize: "1.08rem", lineHeight: 1.75, color: "var(--muted-foreground)" }}
        >
          <p>
            Scotland&apos;s International Yoga Day is more than just an event; it&apos;s
            a movement. Following the incredible success of previous years, the Scottish
            Hindu Foundation is proud to host the 2026 celebration at The Pyramid at
            Anderston, Glasgow, on 20th June.
          </p>
          <p>
            We invite your organisation to be part of this journey. By collaborating
            with us, you aren&apos;t just supporting an event — you are championing
            physical health, mental clarity, and cultural unity across Scotland.
          </p>
        </div>

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
          className="mb-6 text-center sm:mb-8"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 1.85rem)",
            fontWeight: 600,
            color: "var(--foreground)",
          }}
        >
          Why partner with us?
        </h3>
        <div className="mx-auto mb-10 max-w-3xl space-y-5 sm:mb-12">
          <p
            className="text-pretty"
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "var(--muted-foreground)",
            }}
          >
            <strong className="text-foreground">Reach a diverse audience:</strong>{" "}
            Connect with families, fitness enthusiasts, mindfulness practitioners, and
            community leaders from across the country.
          </p>
          <p
            className="text-pretty"
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "var(--muted-foreground)",
            }}
          >
            <strong className="text-foreground">Align with wellness:</strong>{" "}
            Demonstrate your commitment to holistic health and corporate social
            responsibility.
          </p>
          <p
            className="text-pretty"
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "var(--muted-foreground)",
            }}
          >
            <strong className="text-foreground">Community impact:</strong> Help us keep
            yoga accessible to all while fostering a spirit of togetherness.
          </p>
        </div>

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

        <h3
          className="mb-4 sm:mb-6"
          style={{
            fontSize: "1.8rem",
            fontWeight: 600,
            color: "var(--foreground)",
          }}
        >
          How you can get involved
        </h3>
        <p
          className="mb-6 max-w-3xl"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "var(--muted-foreground)",
          }}
        >
          We offer a variety of ways for businesses and organisations to participate,
          each designed to provide meaningful engagement:
        </p>

        <div
          className="mb-12 hidden overflow-x-auto rounded-2xl border md:block"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}
        >
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm sm:text-base">
            <thead>
              <tr style={{ backgroundColor: "var(--muted)" }}>
                <th
                  className="border-b px-4 py-3 font-semibold sm:px-5 sm:py-4"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--foreground)",
                    width: "28%",
                  }}
                >
                  Opportunity
                </th>
                <th
                  className="border-b px-4 py-3 font-semibold sm:px-5 sm:py-4"
                  style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
                >
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {involvementRows.map((row) => (
                <tr key={row.opportunity} className="align-top">
                  <td
                    className="border-b px-4 py-3 font-medium sm:px-5 sm:py-4"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--primary)",
                    }}
                  >
                    {row.opportunity}
                  </td>
                  <td
                    className="border-b px-4 py-3 sm:px-5 sm:py-4"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--muted-foreground)",
                      lineHeight: 1.65,
                    }}
                  >
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-10 space-y-5 sm:mb-12 md:hidden">
          {involvementRows.map((row, index) => (
            <motion.div
              key={row.opportunity}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-xl border p-4"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--muted)" }}
            >
              <h4
                className="mb-2"
                style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--primary)" }}
              >
                {row.opportunity}
              </h4>
              <p style={{ fontSize: "1rem", lineHeight: 1.65, color: "var(--muted-foreground)" }}>
                {row.description}
              </p>
            </motion.div>
          ))}
        </div>

        <h3
          className="mb-4"
          style={{
            fontSize: "1.65rem",
            fontWeight: 600,
            color: "var(--foreground)",
          }}
        >
          Let&apos;s create something impactful
        </h3>
        <div
          className="mb-10 max-w-3xl space-y-4"
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "var(--muted-foreground)",
          }}
        >
          <p>
            We believe every partnership should be as unique as the practice of yoga
            itself. We are eager to tailor a collaboration package that aligns perfectly
            with your organisation&apos;s specific values and goals.
          </p>
          <p>
            Ready to join the movement? Whether you want to sponsor, exhibit, or lead a
            session, we&apos;d love to hear from you.
          </p>
        </div>

        <div
          className="mb-12 rounded-2xl border p-6 sm:p-8"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--muted)",
          }}
        >
          <h4
            className="mb-6 text-center"
            style={{
              fontSize: "1.35rem",
              fontWeight: 700,
              color: "var(--primary)",
            }}
          >
            Contact us
          </h4>
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-xl space-y-4"
            style={{ color: "var(--foreground)" }}
          >
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="corp-website">Website</label>
              <input
                id="corp-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(ev) => setWebsite(ev.target.value)}
              />
            </div>
            <div>
              <label htmlFor="corp-name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input
                id="corp-name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none ring-primary/30 focus-visible:ring-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="corp-contact" className="mb-1.5 block text-sm font-medium">
                Contact
              </label>
              <input
                id="corp-contact"
                name="contact"
                type="text"
                autoComplete="email"
                value={contact}
                onChange={(ev) => setContact(ev.target.value)}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none ring-primary/30 focus-visible:ring-2"
                placeholder="Email or phone"
              />
            </div>
            <div>
              <label htmlFor="corp-org" className="mb-1.5 block text-sm font-medium">
                Organisation / business
              </label>
              <input
                id="corp-org"
                name="organisation"
                type="text"
                autoComplete="organization"
                value={organisation}
                onChange={(ev) => setOrganisation(ev.target.value)}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none ring-primary/30 focus-visible:ring-2"
                placeholder="Company or organisation name"
              />
            </div>
            <div>
              <label htmlFor="corp-interest" className="mb-1.5 block text-sm font-medium">
                Stall / sponsor / partner
              </label>
              <select
                id="corp-interest"
                name="interest"
                value={interest}
                onChange={(ev) => setInterest(ev.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none ring-primary/30 focus-visible:ring-2"
              >
                {interestOptions.map((opt) => (
                  <option key={opt.value || "placeholder"} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="corp-message" className="mb-1.5 block text-sm font-medium">
                Tell us about yourself
              </label>
              <textarea
                id="corp-message"
                name="message"
                rows={5}
                value={message}
                onChange={(ev) => setMessage(ev.target.value)}
                required
                className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none ring-primary/30 focus-visible:ring-2"
                placeholder="Your goals, questions, or how you’d like to collaborate…"
              />
            </div>
            {submitOk ? (
              <p className="text-center text-sm font-medium" style={{ color: "var(--primary)" }}>
                Thanks — your enquiry has been sent. We’ll reply to your contact details soon.
              </p>
            ) : null}
            {submitError ? (
              <p className="text-center text-sm font-medium" style={{ color: "var(--destructive)" }}>
                {submitError}
              </p>
            ) : (
              <p className="text-center text-xs" style={{ color: "var(--muted-foreground)" }}>
                Submitting sends your enquiry to{" "}
                <span className="font-medium text-foreground/90">{CORPORATE_MAIL}</span>.
              </p>
            )}
            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={isSending}
                className="inline-block rounded-lg px-10 py-3.5 font-semibold text-white transition-transform hover:scale-[1.02] sm:py-4"
                style={{
                  backgroundColor: "var(--secondary)",
                  fontSize: "1.05rem",
                }}
              >
                {isSending ? "Sending…" : "Send enquiry"}
              </button>
            </div>
          </form>
        </div>

        <p
          className="mx-auto mb-10 max-w-3xl text-center text-pretty"
          style={{
            fontSize: "1.08rem",
            lineHeight: 1.75,
            fontWeight: 500,
            color: "var(--foreground)",
          }}
        >
          Together, let&apos;s make Scotland&apos;s International Yoga Day 2026 a landmark
          event for wellbeing.
        </p>

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
