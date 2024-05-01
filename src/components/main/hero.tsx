import React from "react";
import CountdownTimer from "../reusable/countdown-timer";
import Image from "next/image";

const Hero = ({
  setToggleRsvpPopup,
  greenClue,
  setGreenClue,
  redClue,
  setRedClue,
  blueClue,
  setBlueClue,
  yellowClue,
  setYellowClue,
}: {
  setToggleRsvpPopup: React.Dispatch<React.SetStateAction<boolean>>;
  greenClue: { [key: number]: boolean };
  setGreenClue: React.Dispatch<React.SetStateAction<any>>;
  redClue: { [key: number]: boolean };
  setRedClue: React.Dispatch<React.SetStateAction<any>>;
  blueClue: { [key: number]: boolean };
  setBlueClue: React.Dispatch<React.SetStateAction<any>>;
  yellowClue: { [key: number]: boolean };
  setYellowClue: React.Dispatch<React.SetStateAction<any>>;
}) => {
  return (
    <div className="w-full h-fit xs:px-4 lg:px-[150px] pt-20 pb-[125px] flex-col justify-center items-center gap-5 inline-flex">
      <div className="justify-center flex-wrap items-center gap-2.5 inline-flex">
        <div
          onClick={() => {
            setBlueClue({ ...blueClue, 4: !blueClue[4] });
          }}
          className={`text-black xs:text-5xl lg:text-6xl font-normal font-blackops ${
            blueClue[4] ? "text-blue-500" : "text-black"
          }`}
        >
          IMPACTFUL
        </div>
        <div
          onClick={() => {
            setYellowClue({ ...yellowClue, 4: !yellowClue[4] });
          }}
          className={`text-black xs:text-[35px] lg:text-[45px] font-normal ${
            yellowClue[4] ? "text-yellow-500" : "text-black"
          }`}
        >
          ENTREPRENEURSHIP
        </div>
      </div>
      <div className="w-full h-px relative bg-stone-900 rounded-[100px]" />
      <div className="self-stretch xs:px-[10px] lg:px-[100px] py-5 justify-center items-center gap-2.5 inline-flex">
        <div className="grow justify-center items-center flex flex-wrap shrink basis-0 text-center">
          <div
            onClick={() => {
              setBlueClue({ ...blueClue, 1: !blueClue[1] });
            }}
            className={`bg-black mx-2 h-[25px] w-[110px] text-2xl font-normal ${
              blueClue[1] ? "bg-blue-500" : "bg-black"
            }`}
          ></div>
          <span
            onClick={() => {
              setYellowClue({ ...yellowClue, 1: !yellowClue[1] });
            }}
            className={`text-black text-2xl font-normal ${
              yellowClue[1] ? "text-yellow-500" : "text-black"
            }`}
          >
            , you have been selected.
            <br />
          </span>
          <span
            onClick={() => {
              setRedClue({ ...redClue, 1: !redClue[1] });
            }}
            className={`text-black text-2xl font-normal ${
              redClue[1] ? "text-red-500" : "text-black"
            }`}
          >
            Impactful Entrepreneurs connect,
          </span>
          <div
            onClick={() => {
              setGreenClue({ ...greenClue, 1: !greenClue[1] });
            }}
            className={`bg-black  mx-2 h-[25px] w-[200px] text-2xl font-normal ${
              greenClue[1] ? "bg-green-500" : "bg-black"
            }`}
          ></div>
          <span
            onClick={() => {
              setBlueClue({ ...blueClue, 2: !blueClue[2] });
            }}
            className={`text-black text-2xl font-normal ${
              blueClue[2] ? "text-blue-500" : "text-black"
            }`}
          >
            unite the
          </span>
          <div
            onClick={() => {
              setYellowClue({ ...yellowClue, 2: !yellowClue[2] });
            }}
            className={`bg-black mx-2 h-[25px] w-[150px] text-2xl font-normal ${
              yellowClue[2] ? "bg-yellow-500" : "bg-black"
            }`}
          ></div>
          <span
            onClick={() => {
              setRedClue({ ...redClue, 2: !redClue[2] });
            }}
            className={`text-black text-2xl font-normal ${
              redClue[2] ? "text-red-500" : "text-black"
            }`}
          >
            , and collaborate with
          </span>
          <div
            onClick={() => {
              setGreenClue({ ...greenClue, 2: !greenClue[2] });
            }}
            className={`bg-black mx-2 h-[25px] w-[180px] text-2xl font-normal ${
              greenClue[2] ? "bg-green-500" : "bg-black"
            }`}
          ></div>
          <div
            onClick={() => {
              setBlueClue({ ...blueClue, 3: !blueClue[3] });
            }}
            className={`bg-black mx-2 h-[25px] w-[80px] text-2xl font-normal ${
              blueClue[3] ? "bg-blue-500" : "bg-black"
            }`}
          ></div>
          <span
            onClick={() => {
              setYellowClue({ ...yellowClue, 3: !yellowClue[3] });
            }}
            className={`text-black text-2xl font-normal ${
              yellowClue[3] ? "text-yellow-500" : "text-black"
            }`}
          >
            Are you up to the challenge?
          </span>
        </div>
      </div>
      <div className="flex-col justify-center items-center gap-[25px] flex">
        <CountdownTimer targetDate="May 8, 2024 14:00:00" />
        <div
          onClick={() => {
            setGreenClue({ ...greenClue, 3: !greenClue[3] });
          }}
          className={`text-black transition-all xs:text-[45px] sm:text-[60px] lg:text-[85px] font-semibold ${
            greenClue[3] ? "text-green-500" : "text-black"
          }`}
        >
          May 8th, 2024
        </div>
        <button
          onClick={() => {
            setToggleRsvpPopup(true);
          }}
          className="px-[85px] bg-stone-900 rounded-[10px] justify-center items-center gap-2.5 inline-flex hover:scale-105 hover:bg-red-500 hover:text-black transition-all"
        >
          <div className="text-zinc-300 text-[50px] font-semibold ">RSVP</div>
        </button>
      </div>
      <div
        onClick={() => {
          setRedClue({ ...redClue, 3: !redClue[3] });
        }}
        className={`text-center text-black text-[65px] font-normal font-blackops ${
          redClue[3] ? "text-red-500" : "text-black"
        }`}
      >
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
        <span
          onClick={() => {
            setGreenClue({ ...greenClue, 4: !greenClue[4] });
          }}
          className={`text-black xs:text-[25px] lg:text-[35px] font-normal underline ${
            greenClue[4] ? "text-green-500" : "text-black"
          }`}
        >
          ONLY
        </span>
        <span
          onClick={() => {
            setRedClue({ ...redClue, 4: !redClue[4] });
          }}
          className={`text-black xs:text-[25px] lg:text-[35px] font-normal ${
            redClue[4] ? "text-red-500" : "text-black"
          }`}
        >
          Students From
          <br />
          Impactful Entrepreneuship
        </span>
      </div>
    </div>
  );
};

export default Hero;
