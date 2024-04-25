import Image from "next/image";
import React from "react";

const Topbar = () => {
  return (
    <div className="sticky z-[10] top-0 w-full bg-[#DADADA]/20 backdrop-blur-xl h-fit px-[25px] py-2.5 justify-between items-center inline-flex">
      <div className="xs:hidden lg:flex text-center text-black text-[25px] font-normal">
        SUBJECT: CONFIDENTIAL
      </div>
      <Image
        src={"/images/ebs_logo.png"}
        alt="EBS Logo"
        width={100}
        height={50}
        className="object-cover"
      />
      <div className="xs:hidden lg:flex text-center text-black text-[25px] font-normal">
        CODE: 24XY9732W
      </div>
    </div>
  );
};

export default Topbar;
