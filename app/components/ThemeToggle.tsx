"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-12px_rgba(0,0,0,0.6)]"
      aria-label="Toggle theme"
    >
      <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
      {isDark ? "Dark" : "Light"}
    </button>
  );
}
