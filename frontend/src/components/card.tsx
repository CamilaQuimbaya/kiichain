import React from 'react';

const Card = ({ walletAddress }: { walletAddress: string | null }) => {
  return (
    <button className="group relative">
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-50 group-hover:blur-2xl" />
      <div className="relative flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 p-1 pr-4">
        <div className="flex items-center gap-3 rounded-lg bg-[#2A1D3C] px-3 py-2">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-teal-500/20 blur-sm transition-all duration-300 group-hover:bg-teal-500/30 group-hover:blur-md" />
                <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                className="relative h-6 w-6 text-teal-500"
                >
                <path
                    d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 7h18M3 7v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7M16 14h.01"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
                </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-white">{walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'N/A'}</span>
              <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-emerald-500 transform transition-transform duration-300 group-hover:translate-y-[-2px]">
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
            <span className="text-xs font-semibold text-slate-300">Wallet</span>
          </div>
        </div>
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </button>
  );
}

export default Card;
