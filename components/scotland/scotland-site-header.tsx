"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { SunMoon } from "lucide-react";
import { useSiteTheme } from "@/components/theme-context";

const LOGO_SRC = "/images/logos/scotland-yoga-day-logo.png";
const FACEBOOK_PAGE_URL =
  "https://www.facebook.com/profile.php?id=61575746207837";
const EVENTBRITE_URL =
  "https://www.eventbrite.co.uk/e/1987392705080?aff=oddtdtcreator";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "The Event", href: "#event" },
  { name: "Schools Tour", href: "/schools-tour" },
  { name: "Our Framework", href: "#pillars" },
  { name: "Corporate", href: "/corporate" },
  { name: "Highlights", href: "#gallery" },
  { name: "Gallery", href: "/gallery" },
  { name: "Origins", href: "/origins" },
  { name: "Impact", href: "/impact" },
  { name: "Get Involved", href: "#involved" },
] as const;

type Props = {
  /** When true, in-page hash links go to `/#section` so they work from other routes (e.g. /gallery). */
  linkHashesToHome?: boolean;
};

function navHref(href: string, linkHashesToHome: boolean) {
  if (href.startsWith("#") && linkHashesToHome) {
    return `/${href}`;
  }
  return href;
}

export function ScotlandSiteHeader({ linkHashesToHome = false }: Props) {
  const { theme, toggleTheme } = useSiteTheme();
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const navOpacity = linkHashesToHome ? 1 : headerOpacity;

  const themeToggleLabel =
    theme === "traditional"
      ? "Switch to modern theme"
      : "Switch to traditional theme";

  const headerIconBtnClass =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-foreground/15 bg-background/95 text-foreground shadow-md backdrop-blur-md transition-colors hover:bg-background sm:h-12 sm:w-12";

  return (
    <>
      <div className="fixed top-3 right-3 z-50 flex items-center gap-2 sm:top-4 sm:right-4 sm:gap-2.5">
        <a
          href={FACEBOOK_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={headerIconBtnClass}
          aria-label="Scotland's International Yoga Day on Facebook"
          title="Facebook"
        >
          <svg
            className="h-[1.35rem] w-[1.35rem] sm:h-6 sm:w-6"
            viewBox="0 0 24 24"
            aria-hidden
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#1877F2"
              d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            />
          </svg>
        </a>
        <a
          href={EVENTBRITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={headerIconBtnClass}
          aria-label="Tickets on Eventbrite"
          title="Eventbrite"
        >
          <Image
            src="/images/icons/eventbrite-logo-clear.png"
            alt=""
            width={500}
            height={500}
            className="h-7 w-7 shrink-0 object-contain sm:h-8 sm:w-8"
            sizes="32px"
            aria-hidden
          />
        </a>
        <motion.button
          type="button"
          onClick={toggleTheme}
          className={headerIconBtnClass}
          aria-label={themeToggleLabel}
          title={themeToggleLabel}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
        >
          <SunMoon className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" aria-hidden />
        </motion.button>
      </div>

      <motion.nav
        aria-label="Primary"
        className="fixed top-0 right-0 left-0 z-40 border-b backdrop-blur-md"
        style={{
          opacity: navOpacity,
          borderColor: "var(--border)",
          backgroundColor: "rgba(255, 255, 255, 0.88)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-1 pr-[10.5rem] sm:px-6 sm:py-1 sm:pr-[11.5rem] lg:pr-[12.5rem]">
          <div className="flex flex-col gap-1.5 sm:gap-2 lg:flex-row lg:items-center lg:gap-4">
            <div className="relative z-10 flex min-w-0 shrink-0 items-center">
              <Link href="/" className="inline-flex">
                <Image
                  src={LOGO_SRC}
                  alt="Scotland's International Yoga Day — Home"
                  width={666}
                  height={375}
                  className="h-14 w-auto max-w-[min(100%,11rem)] object-contain object-left sm:h-20 sm:max-w-none lg:h-24"
                  priority
                />
              </Link>
            </div>
            <div className="hidden min-h-0 min-w-0 flex-1 items-center justify-center lg:flex">
              <div className="flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[0.8125rem] font-medium leading-tight tracking-wide text-foreground/85 sm:gap-x-4 sm:text-sm xl:gap-x-5 xl:text-[0.9375rem]">
                {navItems.map((item) => {
                  const href = navHref(item.href, linkHashesToHome);
                  const desktopClass =
                    "whitespace-nowrap rounded-sm px-0.5 transition-colors hover:text-foreground";
                  if (item.href.startsWith("#")) {
                    return linkHashesToHome ? (
                      <Link key={item.name} href={href} className={desktopClass}>
                        {item.name}
                      </Link>
                    ) : (
                      <a key={item.name} href={href} className={desktopClass}>
                        {item.name}
                      </a>
                    );
                  }
                  return (
                    <Link key={item.name} href={item.href} className={desktopClass}>
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-2.5 gap-y-0.5 border-t border-foreground/10 px-3 py-1 text-[0.8125rem] font-medium leading-tight text-foreground/85 sm:gap-x-3 sm:text-sm lg:hidden">
          {navItems.map((item) => {
            const href = navHref(item.href, linkHashesToHome);
            const mobileClass =
              "underline-offset-2 transition-colors hover:text-foreground hover:underline";
            if (item.href.startsWith("#")) {
              return linkHashesToHome ? (
                <Link key={item.name} href={href} className={mobileClass}>
                  {item.name}
                </Link>
              ) : (
                <a key={item.name} href={href} className={mobileClass}>
                  {item.name}
                </a>
              );
            }
            return (
              <Link key={item.name} href={item.href} className={mobileClass}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
