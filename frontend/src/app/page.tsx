"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FC } from "react";

const Homepage: FC = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center bg-dark-neon">
      <motion.div
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
        className="w-full h-full max-w-screen-2xl px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 flex items-center justify-center"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          {/* IMAGE CONTAINER */}
          <div className="relative flex-1 flex items-center justify-center max-h-[80vh] lg:max-h-full animate-pulse">
            <Image 
              src="/landing2.svg" 
              alt="Hero" 
              width={700} 
              height={700} 
              className="max-w-full max-h-full object-contain"
              priority 
            />
          </div>

          {/* TEXT CONTAINER */}
          <div className="flex-1 flex flex-col gap-6 items-center lg:items-start">
            {/* TITLE */}
            <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold leading-tight text-center lg:text-left text-white">
              Discover the KiiChain Song of the Moment!
            </h1>
            {/* DESC */}
            <p className="text-lg md:text-xl text-center lg:text-left text-gray-300">
             Connect your wallet to access the latest KiiChain song. If you&apos;re whitelisted, you can view and manage private song data stored on the blockchain. 
            </p>
           
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Homepage;
