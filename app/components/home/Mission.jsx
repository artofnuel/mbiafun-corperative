"use client";
import React from "react";
import Image from "next/image";
import { images } from "@/app/assets";

const Mission = () => {
  return (
    <main className="w-full min-h-[500px] flex flex-col justify-center items-center bg-background">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center p-5">
        <div className="w-full h-full flex flex-col justify-center items-start gap-3">
          <h2 className="text-2xl md:text-5xl font-bold text-primary">
            <span>The Goal</span>
            <br />
            The Mission
          </h2>
          <p className="w-full md:w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus in
            maxime architecto illo illum! Nemo delectus facere accusamus rem.
            Incidunt quo dolores asperiores quasi, cum voluptate vel veniam hic
            culpa quam autem facilis atque ducimus nobis. Vitae sint nostrum
            labore.
          </p>
          <ul className="grid grid-cols-2 gap-2 py-5">
            <li>Mission 1</li>
            <li>Mission 2</li>
            <li>Mission 3</li>
            <li>Mission 4</li>
          </ul>
        </div>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center py-10">
          <div className="col-span-full w-full h-[300px]">
            <Image
              src={images.bkg3}
              width={1000}
              height={1000}
              alt="mission images"
              className="w-full h-full object-cover rounded-lg "
            />
          </div>
          <div className="w-full h-[250px]">
            <Image
              src={images.bkg2}
              width={1000}
              height={1000}
              alt="mission images"
              className="w-full h-full object-cover rounded-lg "
            />
          </div>
          <div className="w-full h-[250px]">
            <Image
              src={images.worker2}
              width={1000}
              height={1000}
              alt="mission images"
              className="w-full h-full object-cover rounded-lg "
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Mission;
