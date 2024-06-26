"use client";
import { images } from "@/app/assets";
import React from "react";
import BKG from "../../assets/bkg1.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${BKG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[300px] md:h-[500px] bg-secondary-content text-white rounded-b-xl"
    >
      {/* <Image src={BKG} alt="hi" fill /> */}
      <div className="w-full h-full p-5 max-w-7xl mx-auto flex flex-col justify-start items-center">
        <h1 className="mt-10 font-bold text-2xl md:text-8xl text-center drop-shadow-2xl">
          The
          <br /> Mbiafun
          <br /> Corperative
        </h1>
        <p className="py-5 text-base md:text-xl text-center">
          Building a better community
          <br className="block md:hidden" /> through collective agronomics.
        </p>
      </div>
    </main>
  );
};

export default Hero;
