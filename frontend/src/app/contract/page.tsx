"use client";
import { motion } from "framer-motion";
import PrivateInfo from "@/components/PrivateInfo";





const ContractPage = () => {


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex min-h-screen items-start pt-12 justify-center bg-dark-neon">
      <PrivateInfo />
      </div>
    </motion.div>
  );
};

export default ContractPage;
