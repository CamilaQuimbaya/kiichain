import React, { useState } from "react";

interface KiiChainCardProps {
  // eslint-disable-next-line no-unused-vars
  updateKiiChain: (newKiiChain: string) => void;
  loading: boolean;
}

const KiiChainCard: React.FC<KiiChainCardProps> = ({ updateKiiChain, loading }) => {
  const [newKiiChain, setNewKiiChain] = useState("");

  return (
    <div className="bg-[#0C0316] border border-cyan-200 rounded-xl p-4 text-sm w-full">
      <h1 className="text-center text-white text-xl font-bold mb-5">Update KiiChain</h1>
      <textarea
        className="bg-[#2A1D3C] text-slate-300 h-20 placeholder:text-slate-300 placeholder:opacity-50 border border-slate-600 w-full resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-300"
        placeholder="Enter new KiiChain..."
        value={newKiiChain}
        onChange={(e) => setNewKiiChain(e.target.value)}
      />
      <button
        onClick={() => updateKiiChain(newKiiChain)}
        className="mt-5 cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
      >
        {loading ? "Updating..." : "Update"}
      </button>
    </div>
  );
};

export default KiiChainCard;
