"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

export type SiteTheme = "traditional" | "modern";

type ThemeContextValue = {
  theme: SiteTheme;
  setTheme: (t: SiteTheme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "yoga-day-shf-theme";

function readStoredTheme(): SiteTheme {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "modern" || stored === "traditional") return stored;
  if (stored === "classic") return "traditional";
  return "traditional";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<SiteTheme>("traditional");

  useLayoutEffect(() => {
    const stored = readStoredTheme();
    document.documentElement.dataset.theme = stored;
    if (stored !== "traditional") {
      requestAnimationFrame(() => {
        setThemeState(stored);
      });
    }
  }, []);

  const setTheme = useCallback((t: SiteTheme) => {
    setThemeState(t);
    document.documentElement.dataset.theme = t;
    window.localStorage.setItem(STORAGE_KEY, t);
  }, []);

  const toggleTheme = useCallback(() => {
    const next: SiteTheme = theme === "traditional" ? "modern" : "traditional";
    setTheme(next);
  }, [theme, setTheme]);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useSiteTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useSiteTheme must be used within ThemeProvider");
  }
  return ctx;
}
