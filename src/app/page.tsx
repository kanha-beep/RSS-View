import { ShakhaView } from "@/components/ShakhaView";
import { shakhas } from "@/data/shakhas";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-mesh-sunset text-ink">
      <ShakhaView shakhas={shakhas} />
    </main>
  );
}
