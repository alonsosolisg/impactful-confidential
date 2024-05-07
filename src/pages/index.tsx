import Competition from "@/components/main/activity";
import Activity from "@/components/main/activity";
import Hero from "@/components/main/hero";
import Scoreboard from "@/components/main/scoreboard";
import Topbar from "@/components/main/topbar";
import RsvpPopup from "@/components/reusable/rsvp-popup";
import SecretCodePopup from "@/components/reusable/secretCodePopup";
import { useState } from "react";

const yellowCode = "1NV3ST1NG";
const greenCode = "M0N3Y";
const redCode = "PR0F1T";
const blueCode = "N3TW0RK";

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
      <Scoreboard />
      <Competition />
    </main>
  );
}
