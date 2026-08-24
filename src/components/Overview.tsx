"use client";

import { useEffect, useMemo, useRef } from "react";
import L from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap
} from "react-leaflet";
import type { Shakha } from "@/data/shakhas";

type OverviewProps = {
  shakhas: Shakha[];
  activeId: string;
  onActiveIdChange: (id: string) => void;
  selectedState: string;
};

const indiaCenter: [number, number] = [22.9734, 78.6569];
const indiaZoom = 5;

const defaultIcon = L.divIcon({
  className: "shakha-marker",
  html: '<span class="marker-core"></span>',
  iconSize: [24, 24],
  iconAnchor: [12, 12]
});

const activeIcon = L.divIcon({
  className: "shakha-marker shakha-marker-active",
  html: '<span class="marker-core"></span>',
  iconSize: [28, 28],
  iconAnchor: [14, 14]
});

export function Overview({
  shakhas,
  activeId,
  onActiveIdChange,
  selectedState
}: OverviewProps) {
  return (
    <>
      <div className="grid gap-8 border-b border-bhagwa-100 px-6 py-8 lg:grid-cols-[1.25fr_0.75fr] lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-bhagwa-700">
            Rashtriya Swayamsevak Sangh
          </p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-heading)] text-4xl leading-tight text-bhagwa-900 sm:text-5xl">
            Explore shakha locations across India with a live map, zoom, and
            state-level filtering.
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-2xl border border-bhagwa-200 bg-bhagwa-50 px-5 py-4">
              <p className="text-sm text-ink/60">Visible checkpoints</p>
              <p className="mt-1 text-2xl font-extrabold text-bhagwa-800">
                {shakhas.length}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-end">
          <div className="rounded-2xl border border-bhagwa-200 bg-white px-5 py-4">
            <p className="text-sm text-ink/60">Selected region</p>
            <p className="mt-1 text-2xl font-extrabold text-bhagwa-800">
              {selectedState}
            </p>
          </div>
        </div>
      </div>
      <section className="px-6 py-6 lg:px-10 lg:py-8">
        <div className="rounded-[28px] border border-bhagwa-100 bg-[#fffaf2] p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="rounded-full border border-bhagwa-200 bg-white px-4 py-2 text-xs font-semibold text-ink/60">
              {selectedState}
            </div>
          </div>
          <div className="relative h-[520px] overflow-hidden rounded-[24px] border border-bhagwa-200 shadow-inner">
            <MapContainer
              center={indiaCenter}
              zoom={indiaZoom}
              minZoom={4}
              maxZoom={18}
              scrollWheelZoom
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MapViewportController
                shakhas={shakhas}
                selectedState={selectedState}
              />
              {shakhas.map((shakha) => (
                <Marker
                  key={shakha.id}
                  position={[shakha.coordinates.lat, shakha.coordinates.lng]}
                  icon={shakha.id === activeId ? activeIcon : defaultIcon}
                  eventHandlers={{
                    click: () => onActiveIdChange(shakha.id)
                  }}
                >
                  <Popup>
                    <div className="min-w-[220px]">
                      <p className="font-semibold text-bhagwa-900">
                        {shakha.name}
                      </p>
                      <p className="mt-1 text-sm text-slate-700">
                        {shakha.location}
                      </p>
                      <p className="mt-1 text-sm text-slate-700">
                        {shakha.city}, {shakha.state}
                      </p>
                      <p className="mt-2 text-sm">
                        <strong>Mukhya Shikshak:</strong> {shakha.mukhyaShikshak}
                      </p>
                      <p className="text-sm">
                        <strong>Coordinates:</strong> {shakha.coordinates.lat},{" "}
                        {shakha.coordinates.lng}
                      </p>
                      <p className="text-sm">
                        <strong>Number of People:</strong> {shakha.numberOfPeople}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>
    </>
  );
}

function MapViewportController({
  shakhas,
  selectedState
}: {
  shakhas: Shakha[];
  selectedState: string;
}) {
  const map = useMap();
  const hasInitializedRef = useRef(false);
  const previousViewportKeyRef = useRef("");
  const viewportKey = useMemo(
    () => `${selectedState}__${shakhas.map((shakha) => shakha.id).join("|")}`,
    [selectedState, shakhas]
  );

  useEffect(() => {
    if (hasInitializedRef.current && previousViewportKeyRef.current === viewportKey) {
      return;
    }

    previousViewportKeyRef.current = viewportKey;
    hasInitializedRef.current = true;

    if (shakhas.length === 0) {
      map.setView(indiaCenter, indiaZoom);
      return;
    }

    if (selectedState === "All India") {
      const bounds = L.latLngBounds(
        shakhas.map((shakha) => [shakha.coordinates.lat, shakha.coordinates.lng])
      );
      map.flyToBounds(bounds, { padding: [40, 40], maxZoom: 6 });
      return;
    }

    if (shakhas.length === 1) {
      map.flyTo([shakhas[0].coordinates.lat, shakhas[0].coordinates.lng], 11, {
        duration: 1.2
      });
      return;
    }

    const bounds = L.latLngBounds(
      shakhas.map((shakha) => [shakha.coordinates.lat, shakha.coordinates.lng])
    );
    map.flyToBounds(bounds, { padding: [40, 40], maxZoom: 8 });
  }, [map, shakhas, viewportKey]);

  return null;
}
