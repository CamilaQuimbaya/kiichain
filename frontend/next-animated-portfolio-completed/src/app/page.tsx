"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FC } from "react";

const Homepage: FC = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center">
      <motion.div
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
        className="w-full h-full max-w-screen-2xl px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 flex items-center justify-center"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full">
          {/* IMAGE CONTAINER */}
          <div className="relative flex-1 flex items-center justify-center max-h-[80vh]">
            <Image 
              src="/PO.svg" 
              alt="Hero" 
              width={600} 
              height={500} 
              className="max-w-full max-h-full object-contain"
              priority 
            />
          </div>

          {/* TEXT CONTAINER */}
          <div className="flex-1 flex flex-col gap-6 items-center lg:items-start">
            {/* TITLE */}
            <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold leading-tight text-center lg:text-left">
              Connect with Wallet and vote for your favorite
            </h1>
            {/* DESC */}
            <p className="text-lg md:text-xl text-gray-700 text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sequi officia, neque optio sapiente dolorum qui distinctio at maxime incidunt veniam dolor accusamus quis veritatis labore fugit, consequuntur sint vel!
            </p>
            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="px-6 py-3 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
              <button className="px-6 py-3 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Homepage;
