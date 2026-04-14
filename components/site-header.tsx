"use client";

import Link from "next/link";
import { useSiteTheme } from "./theme-context";

export function SiteHeader() {
  const { theme, toggleTheme } = useSiteTheme();
  const switchLabel =
    theme === "traditional"
      ? "Switch to Modern Theme"
      : "Switch to Traditional Theme";

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/info" className="site-logo">
          Yoga Day SHF
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <Link href="/info#elevating-scotland">About</Link>
          <Link href="/info#our-three-pillars">Pillars</Link>
          <Link href="/info#align-with-wellbeing">Partners</Link>
          <Link href="/info#event-highlights">Highlights</Link>
        </nav>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-pressed={theme === "modern"}
        >
          {switchLabel}
        </button>
      </div>
    </header>
  );
}
