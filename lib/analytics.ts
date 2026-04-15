import ReactGA from "react-ga4";

/**
 * Same pattern as Scottish_Hindu_Foundation (Vite: VITE_GA_MEASUREMENT_ID).
 * Set in Vercel / .env.local: NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 */
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

let initialized = false;

export function initGA() {
  if (typeof window === "undefined") return;
  if (GA_MEASUREMENT_ID && !initialized) {
    ReactGA.initialize(GA_MEASUREMENT_ID);
    initialized = true;
  }
}

export function trackPageView(path: string) {
  if (typeof window === "undefined") return;
  if (!initialized) return;
  ReactGA.send({ hitType: "pageview", page: path });
}

export function trackEvent(category: string, action: string, label?: string) {
  if (typeof window === "undefined") return;
  if (!initialized) return;
  ReactGA.event({ category, action, label });
}
