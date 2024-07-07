import { servicesData } from "@/app/assets";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <main className="w-full min-h-[500px] flex flex-col justify-center items-center bg-secondary-content">
      <h3>What We Offer</h3>
      {/* <section className="flex">
        {servicesData.map((item, index) => (
          <div
            key={index}
            className="w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center p-5"
          >
            <div className="w-[150px] h-[150px] relative">
              <Image
                src={item.image}
                alt={item.title}
                width={1000}
                height={1000}
                className=""
              />
              <div>
                <h4>{item.title}</h4>
                <p>{item}</p>
              </div>
            </div>
          </div>
        ))}
      </section> */}
    </main>
  );
};

export default Services;
