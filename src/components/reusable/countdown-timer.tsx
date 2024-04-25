import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = Number(target) - Number(now);

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      } else {
        // Clear interval and set time to zero or trigger any event when the countdown is over
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="px-[3px] py-2 flex-row justify-center items-center xs:gap-1.5 lg:gap-10 inline-flex">
      <div className="flex flex-col justify-center items-center">
        <div className="xs:px-4 lg:px-[29px] bg-black hover:bg-yellow-500 flex-col justify-center items-center gap-2.5 flex">
          <div className="text-zinc-300 xs:text-[35px] sm:text-[50px] md:text-[80px] lg:text-[100px] xl:text-[150px] font-semibold ">
            {timeLeft.days}
          </div>
        </div>
        <div className="text-black xs:text-[18px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] font-semibold ">
          Days
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="xs:px-4 lg:px-[29px] bg-black hover:bg-green-500 flex-col justify-center items-center gap-2.5 flex">
          <div className="text-zinc-300 xs:text-[35px] sm:text-[50px] md:text-[80px] lg:text-[100px] xl:text-[150px] font-semibold ">
            {timeLeft.hours}
          </div>
        </div>

        <div className="text-black xs:text-[18px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] font-semibold ">
          Hours
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="xs:px-4 lg:px-[29px] bg-black hover:bg-red-500 flex-col justify-center items-center gap-2.5 flex">
          <div className="text-zinc-300 xs:text-[35px] sm:text-[50px] md:text-[80px] lg:text-[100px] xl:text-[150px] font-semibold ">
            {timeLeft.minutes}
          </div>
        </div>
        <div className="text-black xs:text-[18px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] font-semibold ">
          Minutes
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="xs:px-4 lg:px-[29px] bg-black hover:bg-blue-500 flex-col justify-center items-center gap-2.5 flex">
          <div className="text-zinc-300 xs:text-[35px] sm:text-[50px] md:text-[80px] lg:text-[100px] xl:text-[150px] font-semibold ">
            {timeLeft.seconds}
          </div>
        </div>
        <div className="text-black xs:text-[18px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] font-semibold ">
          Seconds
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
