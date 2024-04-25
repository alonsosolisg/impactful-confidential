import Activity from "@/components/main/activity";
import Hero from "@/components/main/hero";
import Topbar from "@/components/main/topbar";

export default function Home() {
  return (
    <main className="relative font-typewriter bg-[#DADADA]/80">
      <Topbar />
      <Hero />
      <Activity />
    </main>
  );
}
