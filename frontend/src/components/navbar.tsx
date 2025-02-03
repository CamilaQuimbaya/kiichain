"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import { ethers } from "ethers";
import Card from "./card";
import { useRouter } from "next/navigation";
import { getContract } from "@/utils/contract";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const router = useRouter();   

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const accounts = await provider.send("eth_accounts", []);
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
            await fetchUserRole(accounts[0]);
          }
        } catch (error) {
          console.error("Error checking wallet connection:", error);
        }
      }
    };
    checkWalletConnection();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const fetchUserRole = async (_address: string) => {
    try {
      const contract = await getContract();
      if (contract) {
        const role = await contract.whoImI();
        setUserRole(role);
      }
    } catch (error) {
      console.error("Error fetching user role:", error);
    }
  };

  

  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    ...(walletAddress && userRole !== "unknown" ? [{ url: "/contract", title: "Contract" }] : []),
  ];

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };

  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };

  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };

  const listVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-28 lg:px-10 xl:px-48 text-xl bg-dark-neon">
      {/* LINKS */}
      <div className="hidden md:flex gap-6 w-1/3">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            className="relative text-white font-semibold transition-all duration-300 ease-in-out hover:text-cyan-200 hover:translate-y-[-2px] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-teal-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={180} height={180} />
        </Link>
      </div>

      {/* BOTÓN DE CONECTAR WALLET */}
      <div className="w-1/3 flex justify-end">
        {walletAddress ? (
          <Card walletAddress={walletAddress} />
        ) : (
          <button
            onClick={() => router.push("/connect")}
            className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            Conectar Wallet
          </button>
        )}
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          />
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          />
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          />
        </button>

        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="fixed top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-2xl z-40"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
