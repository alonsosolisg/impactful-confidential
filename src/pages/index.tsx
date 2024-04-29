import Activity from "@/components/main/activity";
import Hero from "@/components/main/hero";
import Topbar from "@/components/main/topbar";
import RsvpPopup from "@/components/reusable/rsvp-popup";
import { useState } from "react";

export default function Home() {
  const [toggleRsvpPopup, setToggleRsvpPopup] = useState(false);
  return (
    <main
      className={`relative font-typewriter bg-[#DADADA]/80 ${
        toggleRsvpPopup ? "overflow-hidden w-screen h-screen" : "overflow-auto"
      }`}
    >
      <RsvpPopup
        toggleRsvpPopup={toggleRsvpPopup}
        setToggleRsvpPopup={setToggleRsvpPopup}
      />
      <Topbar />
      <Hero setToggleRsvpPopup={setToggleRsvpPopup} />
      <Activity />
    </main>
  );
}
