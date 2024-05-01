import Activity from "@/components/main/activity";
import Hero from "@/components/main/hero";
import Topbar from "@/components/main/topbar";
import RsvpPopup from "@/components/reusable/rsvp-popup";
import SecretCodePopup from "@/components/reusable/secretCodePopup";
import { useState } from "react";

const yellowCode = process.env.NEXT_PUBLIC_YELLOW_CODE as string;
const greenCode = process.env.NEXT_PUBLIC_GREEN_CODE as string;
const redCode = process.env.NEXT_PUBLIC_RED_CODE as string;
const blueCode = process.env.NEXT_PUBLIC_BLUE_CODE as string;

export default function Home() {
  const [toggleRsvpPopup, setToggleRsvpPopup] = useState(false);
  const [greenClue, setGreenClue] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [redClue, setRedClue] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [blueClue, setBlueClue] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [yellowClue, setYellowClue] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  return (
    <main
      className={`relative font-typewriter bg-[#DADADA]/80 ${
        toggleRsvpPopup ? "overflow-hidden w-screen h-screen" : "overflow-auto"
      } ${
        yellowClue[1] && yellowClue[2] && yellowClue[3] && yellowClue[4]
          ? "overflow-hidden w-screen h-screen"
          : "overflow-auto"
      }
      ${
        greenClue[1] && greenClue[2] && greenClue[3] && greenClue[4]
          ? "overflow-hidden w-screen h-screen"
          : "overflow-auto"
      }
      ${
        redClue[1] && redClue[2] && redClue[3] && redClue[4]
          ? "overflow-hidden w-screen h-screen"
          : "overflow-auto"
      }
      ${
        blueClue[1] && blueClue[2] && blueClue[3] && blueClue[4]
          ? "overflow-hidden w-screen h-screen"
          : "overflow-auto"
      }
      `}
    >
      {yellowClue[1] && yellowClue[2] && yellowClue[3] && yellowClue[4] && (
        <SecretCodePopup
          secretCode={yellowCode}
          color="yellow"
          closePopup={() => {
            setYellowClue({ 1: false, 2: false, 3: false, 4: false });
          }}
        />
      )}
      {greenClue[1] && greenClue[2] && greenClue[3] && greenClue[4] && (
        <SecretCodePopup
          secretCode={greenCode}
          color="green"
          closePopup={() => {
            setGreenClue({ 1: false, 2: false, 3: false, 4: false });
          }}
        />
      )}
      {redClue[1] && redClue[2] && redClue[3] && redClue[4] && (
        <SecretCodePopup
          secretCode={redCode}
          color="red"
          closePopup={() => {
            setRedClue({ 1: false, 2: false, 3: false, 4: false });
          }}
        />
      )}
      {blueClue[1] && blueClue[2] && blueClue[3] && blueClue[4] && (
        <SecretCodePopup
          secretCode={blueCode}
          color="blue"
          closePopup={() => {
            setBlueClue({ 1: false, 2: false, 3: false, 4: false });
          }}
        />
      )}
      <RsvpPopup
        toggleRsvpPopup={toggleRsvpPopup}
        setToggleRsvpPopup={setToggleRsvpPopup}
      />
      <Topbar />
      <Hero
        setToggleRsvpPopup={setToggleRsvpPopup}
        greenClue={greenClue}
        setGreenClue={setGreenClue}
        redClue={redClue}
        setRedClue={setRedClue}
        blueClue={blueClue}
        setBlueClue={setBlueClue}
        yellowClue={yellowClue}
        setYellowClue={setYellowClue}
      />
      <Activity />
    </main>
  );
}
