"use client";

import React from "react";
import { motion } from "framer-motion";
import { QRCodeCanvas } from "qrcode.react"; // Importación corregida

const ContactPage = () => {
  const text = "Connect Wallet";
  const walletConnectURL = "https://your-wallet-connect-url.com"; // Reemplaza con la URL real

  return (
    <motion.div
      style={{ height: "100%" }}
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 justify-center items-center">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
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
            😊
          </div>
        </div>

        {/* QR CODE CONTAINER (Reemplazo del formulario) */}
        <div className="h-1/2 lg:h-80 lg:w-1/2 bg-red-50 rounded-xl flex flex-col items-center justify-center p-24">
          <span className="text-xl font-semibold mb-4">Scan this QR to Connect</span>
          <QRCodeCanvas value={walletConnectURL} size={200} bgColor="#ffffff" fgColor="#000000" />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
