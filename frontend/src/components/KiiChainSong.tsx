import React from "react";
import Image from "next/image";

interface KiiChainSongProps {
  kiiChain: string | null;
}

const KiiChainSong: React.FC<KiiChainSongProps> = ({ kiiChain }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-6 select-none">
      {/* Animación Giratoria */}
      <div className="relative h-32 w-32 md:h-40 md:w-40 mb-4">
        <svg
          width={160}
          height={160}
          viewBox="0 0 128 128"
          className="duration-500 border-4 rounded-full shadow-md border-purple-500 border-spacing-5 animate-[spin_6s_linear_infinite] transition-all"
        >
          <rect width={128} height={128} fill="black" />
          <circle cx={20} cy={20} r={3} fill="white" />
          <circle cx={40} cy={30} r={3} fill="white" />
          <circle cx={60} cy={10} r={3} fill="white" />
          <circle cx={80} cy={40} r={3} fill="white" />
          <circle cx={100} cy={20} r={3} fill="white" />
          <circle cx={120} cy={50} r={3} fill="white" />
          <circle cx={90} cy={30} r={12} fill="white" fillOpacity="0.5" />
          <circle cx={90} cy={30} r={10} fill="white" />
          <path d="M0 128 Q32 64 64 128 T128 128" fill="purple" stroke="black" strokeWidth={2} />
          <path d="M0 128 Q32 48 64 128 T128 128" fill="mediumpurple" stroke="black" strokeWidth={2} />
          <path d="M0 128 Q32 32 64 128 T128 128" fill="rebeccapurple" stroke="black" strokeWidth={2} />
        </svg>
        <div className="absolute z-10 w-12 h-12  border-4 rounded-full shadow-sm border-purple-500 top-12 left-12 right-20 bottom-20 animate-pulse"> 
            <Image src="/logo2.png" alt="Kiichain" width={55} height={55} />
        </div>
      </div>

      {/* Card de Información */}
      <div className="bg-white shadow-lg rounded-xl p-4 w-64 md:w-80 text-center">
        <h2 className="text-lg md:text-xl font-bold text-gray-700">🎵 The Kiichain Song of the Moment is:</h2>
        <p className="text-2xl md:text-3xl font-extrabold text-purple-600 mt-2 animate-pulse">
          {kiiChain || "Loading..."}
        </p>
      </div>
    </div>
  );
};

export default KiiChainSong;
