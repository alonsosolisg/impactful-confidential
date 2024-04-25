import React, { useState, useEffect } from "react";

const AnimatedCountdown = () => {
  const targetDate = new Date("May 1, 2024 14:00:00").getTime();

  const [currentTime, setCurrentTime] = useState(() => new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1); // Update every millisecond

    return () => clearInterval(timer);
  }, []);

  const getTimeLeft = () => {
    const timeLeft = targetDate - currentTime;
    if (timeLeft <= 0) {
      return "00 . 00 . 0000";
    }

    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    // Add glitch effect by randomizing visible digits
    const hoursGlitch = hours
      .toString()
      .padStart(2, "0")
      .replace(/\d/g, (digit) => (Math.random() > 0.5 ? digit : "?"));
    const minutesGlitch = minutes
      .toString()
      .padStart(2, "0")
      .replace(/\d/g, (digit) => (Math.random() > 0.5 ? digit : "?"));
    const secondsGlitch = seconds
      .toString()
      .padStart(2, "0")
      .replace(/\d/g, (digit) => (Math.random() > 0.5 ? digit : "?"));

    return `${hoursGlitch} . ${minutesGlitch} . ${secondsGlitch}`;
  };

  return (
    <div className="w-full h-fit xs:px-[10px] lg:px-[100px] pb-[75px] flex-col justify-start items-center gap-[29px] inline-flex">
      <div className="text-center text-black xs:text-[45px] lg:text-[65px] font-normal font-blackops">
        NEXT MISSION
      </div>
      <div className="px-20 xs:py-[15px] lg:py-[25px] bg-stone-900 rounded-[10px] shadow justify-center items-center gap-2.5 inline-flex">
        <div className="text-center text-white xs:text-[30px] md:text-[40px] lg:text-[65px] font-normal font-blackops">
          {getTimeLeft()}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCountdown;
