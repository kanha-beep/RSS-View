type SidebarProps = {
  states: string[];
  selectedState: string;
  onStateChange: (state: string) => void;
  activeView: "overview" | "all-checkpoints";
  onViewChange: (view: "overview" | "all-checkpoints") => void;
};

type SidebarLink =
  | { label: string; view: "overview" | "all-checkpoints" }
  | { label: string };

const links: SidebarLink[] = [
  { label: "Overview", view: "overview" as const },
  {
    label: "All Checkpoints",
    view: "all-checkpoints" as const
  },
  // { label: "States" },
  // { label: "Find Shakha" },
  // { label: "Volunteers" },
  // { label: "Reports" }
];

export function Sidebar({
  states,
  selectedState,
  onStateChange,
  activeView,
  onViewChange
}: SidebarProps) {
  return (
    <aside className="sticky top-24 hidden h-fit w-60 shrink-0 rounded-[28px] border border-bhagwa-200/70 bg-white/80 p-4 shadow-lg backdrop-blur lg:block">
      <p className="px-3 text-xs font-bold uppercase tracking-[0.28em] text-bhagwa-700">
        Quick Links
      </p>
      <div className="mt-4 space-y-2">
        {links.map((link, index) => (
          <button
            key={link.label}
            type="button"
            onClick={() => {
              if ("view" in link && link.view) {
                onViewChange(link.view);
              }
            }}
            className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold ${
              ("view" in link && link.view === activeView) ||
              (!("view" in link) && index === 0 && activeView === "overview")
                ? "bg-bhagwa-600 text-white"
                : "text-ink/75 hover:bg-bhagwa-50 hover:text-bhagwa-800"
            }`}
          >
            <span>{link.label}</span>
            <span className="text-xs opacity-70">0{index + 1}</span>
          </button>
        ))}
      </div>
      <div
        id="states-filter"
        className="mt-6 rounded-2xl border border-bhagwa-200 bg-white p-4"
      >
        <p className="text-sm font-semibold text-bhagwa-900">States</p>
        <p className="mt-2 text-xs leading-6 text-ink/65">
          Select a state to zoom the map and show more specific checkpoints.
        </p>
        <select
          value={selectedState}
          onChange={(event) => onStateChange(event.target.value)}
          className="mt-4 w-full rounded-xl border border-bhagwa-200 bg-bhagwa-50 px-3 py-3 text-sm font-semibold text-ink outline-none"
        >
          <option value="All India">All India</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
}
