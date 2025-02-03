"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react";
import { ethers } from "ethers";

const ContactPage = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const text = walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Wallet";
  const walletConnectURL = "https://metamask.app.link/dapp/your-dapp-url.com"; // Reemplázalo con la URL real de tu DApp

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const accounts = await provider.send("eth_accounts", []);
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          }
        } catch (error) {
          console.error("Error checking wallet connection:", error);
        }
      }
    };
    checkWalletConnection();
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("MetaMask no está instalado. Instálalo para continuar.");
    }
  };

  return (
    <motion.div
      style={{ height: "100%" }}
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 justify-center items-center bg-dark-neon">
        
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl text-white">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            {walletAddress ? " 🚀" : " 😊"}
          </div>
        </div>

        {/* QR CODE + BUTTON */}
        <div className="h-1/2 lg:h-80 lg:w-1/2 bg-[#2A1D3C] rounded-xl flex flex-col items-center justify-center p-8 shadow-lg">
          <span className="text-xl font-semibold mb-4 text-white">
            Scan this QR to Connect
          </span>
          <QRCodeCanvas
            value={walletConnectURL}
            size={200}
            bgColor="#ffffff"
            fgColor="#000000"
          />
          <button  onClick={connectWallet} className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
          {walletAddress ? "Wallet Connected" : "Connect Wallet"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
