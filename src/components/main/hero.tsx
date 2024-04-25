import React from "react";
import CountdownTimer from "../reusable/countdown-timer";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-fit xs:px-4 lg:px-[150px] pt-20 pb-[125px] flex-col justify-center items-center gap-5 inline-flex">
      <div className="justify-center flex-wrap items-center gap-2.5 inline-flex">
        <div className="text-black xs:text-5xl lg:text-6xl font-normal font-blackops">
          IMPACTFUL
        </div>
        <div className="text-black xs:text-[35px] lg:text-[45px] font-normal">
          ENTREPRENEURSHIP
        </div>
      </div>
      <div className="w-full h-px relative bg-stone-900 rounded-[100px]" />
      <div className="self-stretch xs:px-[10px] lg:px-[100px] py-5 justify-center items-center gap-2.5 inline-flex">
        <div className="grow justify-center items-center flex flex-wrap shrink basis-0 text-center">
          <div className="bg-black hover:bg-blue-500 mx-2 h-[25px] w-[110px] text-2xl font-normal"></div>
          <span className="text-black hover:text-yellow-500 text-2xl font-normal ">
            , you have been selected.
            <br />
          </span>
          <span className="text-black hover:text-red-500 text-2xl font-normal ">
            Impactful Entrepreneurs connect,
          </span>
          <div className="bg-black hover:bg-green-500 mx-2 h-[25px] w-[200px] text-2xl font-normal"></div>
          <span className="text-black hover:text-blue-500 text-2xl font-normal ">
            unite the
          </span>
          <div className="bg-black hover:bg-yellow-500 mx-2 h-[25px] w-[150px] text-2xl font-normal"></div>
          <span className="text-black hover:text-green-500 text-2xl font-normal ">
            , and collaborate with
          </span>
          <span className="text-black hover:text-red-500 text-2xl font-semibold ">
            {" "}
          </span>
          <span className="text-black hover:text-yellow-500 text-2xl font-normal">
            <div className="bg-black hover:bg-green-500 mx-2 h-[25px] w-[180px] text-2xl font-normal"></div>
          </span>
          <div className="bg-black hover:bg-blue-500 mx-2 h-[25px] w-[80px] text-2xl font-normal"></div>
          <span className="text-black hover:text-red-500 text-2xl font-normal ">
            Are you up to the challenge?
          </span>
        </div>
      </div>
      <div className="flex-col justify-center items-center gap-[25px] flex">
        <CountdownTimer targetDate="May 8, 2024 14:00:00" />
        <div className="text-black hover:text-blue-500 transition-all xs:text-[45px] sm:text-[60px] lg:text-[85px] font-semibold ">
          May 8th, 2024
        </div>
        <button
          onClick={() => {
            console.log("RSVP button clicked");
          }}
          className="px-[85px] bg-stone-900 rounded-[10px] justify-center items-center gap-2.5 inline-flex hover:scale-105 hover:bg-red-500 hover:text-black transition-all"
        >
          <div className="text-zinc-300 text-[50px] font-semibold ">RSVP</div>
        </button>
      </div>
      <div className="text-center hover:text-green-500 text-black text-[65px] font-normal font-blackops">
        4 TEAMS
      </div>
      <div className="justify-center flex-wrap items-center gap-5 inline-flex">
        <Image
          src={"/images/yellow_con.png"}
          width={1000}
          height={1000}
          alt="yellow"
          className="w-[250px] h-[250px] rounded-full bg-[#d0d0d0]"
        />
        <Image
          src={"/images/red_con.png"}
          width={1000}
          height={1000}
          alt="red"
          className="w-[250px] h-[250px] rounded-full bg-[#d0d0d0]"
        />
        <Image
          src={"/images/blue_con.png"}
          width={1000}
          height={1000}
          alt="blue"
          className="w-[250px] h-[250px] rounded-full bg-[#d0d0d0]"
        />
        <Image
          src={"/images/green_con.png"}
          width={1000}
          height={1000}
          alt="green"
          className="w-[250px] h-[250px] rounded-full bg-[#d0d0d0]"
        />
      </div>
      <div className="text-center">
        <span className="text-black hover:text-yellow-500 xs:text-[25px] lg:text-[35px] font-normal  underline">
          ONLY
        </span>
        <span className="text-black hover:text-blue-500 xs:text-[25px] lg:text-[35px] font-normal ">
          {" "}
          Students From
          <br />
          Impactful Entrepreneuship
        </span>
      </div>
    </div>
  );
};

export default Hero;
