"use client";

import { useId, useState } from "react";

const EVENTBRITE_URL = "https://www.eventbrite.co.uk";

type TabId = "schedule" | "location" | "instructors";

const tabs: { id: TabId; label: string }[] = [
  { id: "schedule", label: "Event schedule" },
  { id: "location", label: "Location & venue" },
  { id: "instructors", label: "Featured instructors" },
];

export function TheEventTabs() {
  const baseId = useId();
  const [open, setOpen] = useState<TabId>("schedule");

  return (
    <div className="mx-auto max-w-4xl">
      <div
        className="mb-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center"
        role="tablist"
        aria-label="The event"
      >
        {tabs.map((tab) => {
          const selected = open === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`${baseId}-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setOpen(tab.id)}
              className="rounded-lg border px-4 py-3 text-left text-sm font-semibold transition-colors sm:text-center"
              style={{
                borderColor: selected ? "var(--primary)" : "var(--border)",
                backgroundColor: selected ? "var(--muted)" : "var(--background)",
                color: selected ? "var(--primary)" : "var(--foreground)",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {open === "schedule" && (
        <div
          role="tabpanel"
          id={`${baseId}-panel-schedule`}
          aria-labelledby={`${baseId}-schedule`}
          className="rounded-2xl border p-8 sm:p-10"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--background)",
          }}
        >
          <h3
            className="mb-4"
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--primary)",
            }}
          >
            Event schedule
          </h3>
          <p
            className="mb-6"
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.75,
              color: "var(--muted-foreground)",
            }}
          >
            <strong style={{ color: "var(--foreground)" }}>
              Due to be announced soon.
            </strong>{" "}
            Full timings, sessions, and stage programme will be published here
            as soon as they are confirmed.
          </p>
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.75,
              color: "var(--muted-foreground)",
            }}
          >
            Tickets will be available via{" "}
            <a
              href={EVENTBRITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-4"
              style={{ color: "var(--primary)" }}
            >
              Eventbrite
            </a>
            . We will share the official listing link alongside the schedule.
          </p>
        </div>
      )}

      {open === "location" && (
        <div
          role="tabpanel"
          id={`${baseId}-panel-location`}
          aria-labelledby={`${baseId}-location`}
          className="space-y-10 rounded-2xl border p-8 sm:p-10"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--background)",
          }}
        >
          <div>
            <h3
              className="mb-3"
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--primary)",
              }}
            >
              Primary venue
            </h3>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "var(--foreground)",
              }}
            >
              <strong>The Pyramid at Anderston</strong>
              <br />
              759 Argyle St, Glasgow{" "}
              <span className="whitespace-nowrap">G3 8DS</span>
            </p>
          </div>

          <div>
            <h4
              className="mb-2"
              style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--foreground)" }}
            >
              The setting
            </h4>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "var(--muted-foreground)",
              }}
            >
              The Pyramid is a community space in the heart of Anderston, Glasgow
              — welcoming, accessible, and built for people coming together.
            </p>
          </div>

          <div>
            <h4
              className="mb-3"
              style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--foreground)" }}
            >
              Getting there — public transport
            </h4>
            <ul
              className="list-disc space-y-2 pl-5"
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "var(--muted-foreground)",
              }}
            >
              <li>About a 5-minute walk from Anderston train station.</li>
              <li>About a 7-minute walk from Charing Cross train station.</li>
              <li>
                From Glasgow Central: services{" "}
                <strong className="text-foreground">1 (A, B, C, D)</strong> and{" "}
                <strong className="text-foreground">2</strong> towards Elderslie
                Street.
              </li>
              <li>
                From Buchanan Bus Station:{" "}
                <strong className="text-foreground">500</strong> (Airport
                Express) and <strong className="text-foreground">X7</strong>{" "}
                towards Pitt Street.
              </li>
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4
                className="mb-2"
                style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--foreground)" }}
              >
                Parking
              </h4>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--muted-foreground)",
                }}
              >
                Limited availability nearby at local rates. We encourage public
                transport where possible.
              </p>
            </div>
            <div>
              <h4
                className="mb-2"
                style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--foreground)" }}
              >
                Accessibility
              </h4>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--muted-foreground)",
                }}
              >
                The venue offers wheelchair access and accessible facilities. If
                you have specific access requirements, please contact us ahead of
                the day and we will do our best to support you.
              </p>
            </div>
          </div>

          <div>
            <h4
              className="mb-3"
              style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--foreground)" }}
            >
              Interactive map
            </h4>
            <iframe
              title="Map: The Pyramid at Anderston, Glasgow"
              className="h-[min(22rem,55vw)] w-full max-w-3xl rounded-xl border"
              style={{ borderColor: "var(--border)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              src="https://maps.google.com/maps?q=The+Pyramid+at+Anderston+759+Argyle+St+Glasgow+G3+8DS&hl=en&z=16&output=embed"
            />
          </div>

          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: "var(--muted)" }}
          >
            <h4
              className="mb-3"
              style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--foreground)" }}
            >
              Practical tips
            </h4>
            <p
              className="mb-4"
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "var(--muted-foreground)",
              }}
            >
              <strong style={{ color: "var(--foreground)" }}>What to bring:</strong>{" "}
              A mat (rentals will be available), a reusable water bottle, and —
              since it&apos;s Scotland — layers for all four seasons in one hour.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.75,
                color: "var(--muted-foreground)",
              }}
            >
              <strong style={{ color: "var(--foreground)" }}>Rain plan:</strong> The
              &ldquo;Om&rdquo; goes on regardless of the weather, thanks to our
              indoor backup space at the venue.
            </p>
          </div>
        </div>
      )}

      {open === "instructors" && (
        <div
          role="tabpanel"
          id={`${baseId}-panel-instructors`}
          aria-labelledby={`${baseId}-instructors`}
          className="rounded-2xl border p-8 sm:p-10"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--background)",
          }}
        >
          <h3
            className="mb-4"
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--primary)",
            }}
          >
            Featured instructors
          </h3>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.75,
              color: "var(--muted-foreground)",
            }}
          >
            Our teaching team and featured instructors will be announced alongside
            the full event schedule. Check back soon, or register your interest
            below to hear first.
          </p>
        </div>
      )}
    </div>
  );
}
