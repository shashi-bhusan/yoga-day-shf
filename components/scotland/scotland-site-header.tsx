"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, SunMoon } from "lucide-react";
import { useSiteTheme } from "@/components/theme-context";

const LOGO_SRC = "/images/logos/scotland-yoga-day-logo.png";
const FACEBOOK_PAGE_URL =
  "https://www.facebook.com/profile.php?id=61575746207837";
const EVENTBRITE_URL =
  "https://www.eventbrite.co.uk/e/1987392705080?aff=oddtdtcreator";

type NavChild = { readonly name: string; readonly href: string };

type NavItem = {
  readonly name: string;
  readonly href: string;
  readonly children?: readonly NavChild[];
};

const navItems: readonly NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "The Event", href: "#event" },
  { name: "Schools Tour", href: "/schools-tour" },
  { name: "Our Framework", href: "/framework" },
  { name: "Highlights", href: "#gallery" },
  { name: "Gallery", href: "/gallery" },
  { name: "Origins", href: "/origins" },
  {
    name: "Get Involved",
    href: "#involved",
    children: [
      { name: "Impact", href: "/impact" },
      { name: "Corporate", href: "/corporate" },
    ],
  },
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

const submenuPanelClass =
  "absolute left-1/2 z-50 min-w-[10.5rem] -translate-x-1/2 rounded-md border py-1.5 shadow-md backdrop-blur-md";

const submenuLinkClass =
  "block px-3 py-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-foreground/5 hover:text-foreground";

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

  const submenuBorder = { borderColor: "var(--border)" } as const;
  const submenuBg = { backgroundColor: "rgba(255, 255, 255, 0.97)" } as const;

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
                  const desktopClass =
                    "inline-flex items-center gap-0.5 whitespace-nowrap rounded-sm px-0.5 transition-colors hover:text-foreground";

                  if (item.children) {
                    const href = navHref(item.href, linkHashesToHome);
                    const trigger =
                      item.href.startsWith("#") && linkHashesToHome ? (
                        <Link
                          href={href}
                          className={desktopClass}
                          aria-haspopup="menu"
                        >
                          {item.name}
                          <ChevronDown
                            className="size-3 shrink-0 opacity-50"
                            aria-hidden
                          />
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className={desktopClass}
                          aria-haspopup="menu"
                        >
                          {item.name}
                          <ChevronDown
                            className="size-3 shrink-0 opacity-50"
                            aria-hidden
                          />
                        </a>
                      );

                    return (
                      <div key={item.name} className="group/nav relative">
                        {trigger}
                        {/* Hit area between trigger and menu */}
                        <div
                          className="pointer-events-none invisible absolute left-1/2 top-full z-50 h-2 w-[120%] -translate-x-1/2 opacity-0 transition-[opacity,visibility] group-hover/nav:pointer-events-auto group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:pointer-events-auto group-focus-within/nav:visible group-focus-within/nav:opacity-100"
                          aria-hidden
                        />
                        <div
                          role="menu"
                          aria-label={`${item.name} links`}
                          className={`pointer-events-none invisible top-[calc(100%+0.5rem)] opacity-0 transition-[opacity,visibility] duration-150 group-hover/nav:pointer-events-auto group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:pointer-events-auto group-focus-within/nav:visible group-focus-within/nav:opacity-100 ${submenuPanelClass}`}
                          style={{ ...submenuBorder, ...submenuBg }}
                        >
                          {item.children.map((ch) => (
                            <Link
                              key={ch.name}
                              href={ch.href}
                              role="menuitem"
                              className={submenuLinkClass}
                            >
                              {ch.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  const href = navHref(item.href, linkHashesToHome);
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
            const mobileClass =
              "underline-offset-2 transition-colors hover:text-foreground hover:underline";

            if (item.children) {
              const href = navHref(item.href, linkHashesToHome);
              const involvedMain =
                linkHashesToHome ? (
                  <Link href={href} className={mobileClass}>
                    {item.name}
                  </Link>
                ) : (
                  <a href={item.href} className={mobileClass}>
                    {item.name}
                  </a>
                );
              return (
                <span
                  key={item.name}
                  className="inline-flex flex-wrap items-baseline justify-center gap-x-0.5"
                >
                  {involvedMain}
                  <details className="relative inline-block align-top">
                    <summary
                      className="cursor-pointer list-none px-0.5 text-foreground/55 transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden"
                      aria-label="Impact and Corporate pages"
                    >
                      <span aria-hidden>▾</span>
                    </summary>
                    <div
                      className={`${submenuPanelClass} mt-1`}
                      style={{ ...submenuBorder, ...submenuBg }}
                    >
                      {item.children.map((ch) => (
                        <Link
                          key={ch.name}
                          href={ch.href}
                          className={submenuLinkClass}
                          onClick={(e) => {
                            const root = e.currentTarget.closest("details");
                            if (root) (root as HTMLDetailsElement).open = false;
                          }}
                        >
                          {ch.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                </span>
              );
            }

            const href = navHref(item.href, linkHashesToHome);
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
