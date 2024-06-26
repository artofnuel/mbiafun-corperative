"use client";
import { images } from "@/app/assets";
import Image from "next/image";
import React from "react";

const Hello = () => {
  return (
    <main className="w-full h-[500px]">
      <Image
        src={images.image1} // Replace with your actual image path
        alt="Mbiafun Corperative"
        layout="fill" // Fills the container
        objectFit="cover" // Scales to cover the area
      />
    </main>
  );
};

export default Hello;
