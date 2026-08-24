"use client";

import { useEffect, useMemo, useState } from "react";
import { Overview } from "@/components/Overview";
import { Sidebar } from "@/components/Sidebar";
import { TopNavbar } from "@/components/TopNavbar";
import type { Shakha } from "@/data/shakhas";

type ShakhaViewProps = {
  shakhas: Shakha[];
};

export function ShakhaView({ shakhas }: ShakhaViewProps) {
  const [selectedState, setSelectedState] = useState("All India");
  const [activeId, setActiveId] = useState("delhi-rohini");
  const [activeView, setActiveView] = useState<"overview" | "all-checkpoints">(
    "overview"
  );

  const states = useMemo(
    () => Array.from(new Set(shakhas.map((shakha) => shakha.state))).sort(),
    [shakhas]
  );

  const filteredShakhas = useMemo(() => {
    if (selectedState === "All India") {
      return shakhas;
    }

    return shakhas.filter((shakha) => shakha.state === selectedState);
  }, [selectedState, shakhas]);

  useEffect(() => {
    if (!filteredShakhas.some((shakha) => shakha.id === activeId)) {
      setActiveId(filteredShakhas[0]?.id ?? "");
    }
  }, [activeId, filteredShakhas]);

  if (filteredShakhas.length === 0) {
    return null;
  }

  return (
    <>
      <TopNavbar
        states={states}
        selectedState={selectedState}
        onStateChange={setSelectedState}
        activeView={activeView}
        onViewChange={setActiveView}
      />
      <div className="mx-auto flex max-w-[1600px] gap-6 px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <Sidebar
          states={states}
          selectedState={selectedState}
          onStateChange={setSelectedState}
          activeView={activeView}
          onViewChange={setActiveView}
        />
        <section className="flex-1">
          <div className="overflow-hidden rounded-[32px] border border-bhagwa-200/70 bg-white/75 shadow-glow backdrop-blur">
            {activeView === "overview" ? (
              <Overview
                shakhas={filteredShakhas}
                activeId={activeId}
                onActiveIdChange={setActiveId}
                selectedState={selectedState}
              />
            ) : (
              <>
                <div className="border-b border-bhagwa-100 px-6 py-4 lg:px-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-bhagwa-700">
                    All Checkpoints View
                  </p>
                  <h1 className="mt-4 font-[family-name:var(--font-heading)] text-4xl leading-tight text-bhagwa-900 sm:text-5xl">
                    Selected shakha and full checkpoints list
                  </h1>
                </div>
                <section className="grid gap-6 px-6 py-6 lg:grid-cols-1 lg:px-10 lg:py-8">
                  <div className="mx-auto w-full max-w-5xl space-y-4">
                    <div
                      id="selected-shakha"
                      className="rounded-[28px] border border-bhagwa-200 bg-white p-6"
                    >
                      <p className="text-sm font-bold uppercase tracking-[0.28em] text-bhagwa-700">
                        Selected shakha
                      </p>
                      <h3 className="mt-3 font-[family-name:var(--font-heading)] text-3xl text-bhagwa-900">
                        {filteredShakhas.find((shakha) => shakha.id === activeId)?.name ??
                          filteredShakhas[0]?.name}
                      </h3>
                      <div className="mt-6 space-y-4">
                        <DetailRow
                          label="Mukhya Shikshak"
                          value={
                            filteredShakhas.find((shakha) => shakha.id === activeId)
                              ?.mukhyaShikshak ?? filteredShakhas[0]?.mukhyaShikshak ?? ""
                          }
                        />
                        <DetailRow
                          label="Location"
                          value={
                            filteredShakhas.find((shakha) => shakha.id === activeId)
                              ?.location ?? filteredShakhas[0]?.location ?? ""
                          }
                        />
                        <DetailRow
                          label="City"
                          value={
                            filteredShakhas.find((shakha) => shakha.id === activeId)
                              ?.city ?? filteredShakhas[0]?.city ?? ""
                          }
                        />
                        <DetailRow
                          label="State"
                          value={
                            filteredShakhas.find((shakha) => shakha.id === activeId)
                              ?.state ?? filteredShakhas[0]?.state ?? ""
                          }
                        />
                        <DetailRow
                          label="Coordinates"
                          value={`${
                            filteredShakhas.find((shakha) => shakha.id === activeId)?.coordinates
                              .lat ?? filteredShakhas[0]?.coordinates.lat ?? ""
                          }, ${
                            filteredShakhas.find((shakha) => shakha.id === activeId)?.coordinates
                              .lng ?? filteredShakhas[0]?.coordinates.lng ?? ""
                          }`}
                        />
                        <DetailRow
                          label="Number of People"
                          value={`${
                            filteredShakhas.find((shakha) => shakha.id === activeId)
                              ?.numberOfPeople ?? filteredShakhas[0]?.numberOfPeople ?? ""
                          }`}
                        />
                      </div>
                    </div>

                    <div
                      id="all-checkpoints"
                      className="rounded-[28px] border border-bhagwa-200 bg-white p-6"
                    >
                      <p className="text-sm font-bold uppercase tracking-[0.28em] text-bhagwa-700">
                        All checkpoints
                      </p>
                      <div className="mt-4 grid gap-3">
                        {filteredShakhas.map((shakha) => {
                          const isActive = shakha.id === activeId;

                          return (
                            <button
                              key={shakha.id}
                              type="button"
                              onClick={() => setActiveId(shakha.id)}
                              className={`rounded-2xl border px-4 py-4 text-left ${
                                isActive
                                  ? "border-bhagwa-400 bg-bhagwa-50"
                                  : "border-bhagwa-100 bg-white hover:border-bhagwa-300 hover:bg-bhagwa-50/50"
                              }`}
                            >
                              <div className="flex items-center justify-between gap-3">
                                <div>
                                  <p className="font-semibold text-bhagwa-900">
                                    {shakha.name}
                                  </p>
                                  <p className="mt-1 text-sm text-ink/60">
                                    {shakha.location}
                                  </p>
                                </div>
                                <span className="rounded-full bg-bhagwa-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-bhagwa-700">
                                  {shakha.numberOfPeople} swayamsevaks
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-bhagwa-100 bg-sand px-4 py-4">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-bhagwa-700">
        {label}
      </p>
      <p className="mt-2 text-base font-semibold text-ink">{value}</p>
    </div>
  );
}
