"use client";

import { useState } from "react";
// import { navLinks } from "@/components/nav-links";

type TopNavbarProps = {
  states: string[];
  selectedState: string;
  onStateChange: (state: string) => void;
  activeView: "overview" | "all-checkpoints";
  onViewChange: (view: "overview" | "all-checkpoints") => void;
};

export function TopNavbar({
  states,
  selectedState,
  onStateChange,
  activeView,
  onViewChange
}: TopNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { label: "Overview", view: "overview" as const },
    { label: "All Checkpoints", view: "all-checkpoints" as const }
  ];
  return (
    <header className="sticky top-0 z-30 border-b border-bhagwa-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-bhagwa-700">
              RSS Directory
            </p>
            <p className="mt-1 font-[family-name:var(--font-heading)] text-xl text-bhagwa-900">
              Bharat Shakha Map
            </p>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="rounded-full border border-bhagwa-200 px-4 py-2 text-sm font-semibold text-bhagwa-800 md:hidden"
          >
            Menu
          </button>
          <nav className="hidden items-center gap-3 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => {
                  if ("view" in link) {
                    onViewChange(link.view);
                  }
                }}
                className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                  "view" in link && link.view === activeView
                    ? "border-bhagwa-500 bg-bhagwa-600 text-white"
                    : "border-transparent text-ink/70 hover:border-bhagwa-200 hover:bg-bhagwa-50 hover:text-bhagwa-800"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {mobileOpen ? (
          <div className="mt-4 rounded-[28px] border border-bhagwa-200 bg-white/95 p-4 shadow-lg md:hidden">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => {
                    if ("view" in link) {
                      onViewChange(link.view);
                    }
                    setMobileOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold ${
                    "view" in link && link.view === activeView
                      ? "bg-bhagwa-600 text-white"
                      : "text-ink/75 hover:bg-bhagwa-50 hover:text-bhagwa-800"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs opacity-70">0{index + 1}</span>
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-bhagwa-200 bg-bhagwa-50 p-4">
              <p className="text-sm font-semibold text-bhagwa-900">States</p>
              <select
                value={selectedState}
                onChange={(event) => onStateChange(event.target.value)}
                className="mt-3 w-full rounded-xl border border-bhagwa-200 bg-white px-3 py-3 text-sm font-semibold text-ink outline-none"
              >
                <option value="All India">All India</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
