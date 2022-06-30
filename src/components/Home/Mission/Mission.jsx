import React from "react";
import hero from "../../../../public/heroImg3.png";
import Image from "next/image";

const Mission = () => {
  return (
    <div className="bg-light-green mt-[48px] p-[28px]">
      <h5 className="text-h5 text-center text-text-gray">OUR MISSION PILLARS</h5>
      <div>
        <div className="flex mt-[48px] mr-[242px] ml-[246px] items-center">
            <div className="bg-green rounded flex items-center mr-[64px] w-[476px] h-[143px]">
              <p className="text-[61px] text-white font-black ml-[33px]">01</p>
              <p className="ml-[17px] text-white text-bdy-rg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vivamus duis </p>
            </div>
            <div className="">
              <Image src={hero} width={412} height={296} className="rounded"/>
            </div>
        </div>

        <div className="flex mt-[48px] mr-[242px] ml-[246px] items-center">
            <div className="">
              <Image src={hero} width={412} height={296} className="rounded"/>
            </div>
            <div className="bg-green rounded flex items-center ml-[64px] w-[476px] h-[143px]">
              <p className="text-[61px] text-white font-black ml-[33px]">02</p>
              <p className="ml-[17px] text-white text-bdy-rg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vivamus duis </p>
            </div>
        </div>

        <div className="flex mt-[48px] mr-[242px] ml-[246px] items-center">
            <div className="bg-green rounded flex items-center mr-[64px] w-[476px] h-[143px]">
              <p className="text-[61px] text-white font-black ml-[33px]">03</p>
              <p className="ml-[17px] text-white text-bdy-rg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vivamus duis </p>
            </div>
            <div className="">
              <Image src={hero} width={412} height={296} className="rounded"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
