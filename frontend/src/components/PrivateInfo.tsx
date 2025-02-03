"use client";

import { useEffect, useState } from "react";
import { getContract } from "@/utils/contract";
import UserCard from "@/components/UserCard";
import KiiChainCard from "@/components/Kiichaincard"; // Importa el nuevo componente
import KiiChainSong from "@/components/KiiChainSong";

// eslint-disable-next-line no-undef
const PrivateInfo: React.FC = () => {
  const [kiiChain, setKiiChain] = useState<string | null>(null);
  const [whiteList, setWhiteList] = useState<string[]>([]);
  const [identity, setIdentity] = useState<string | null>(null);
  const [newAddress, setNewAddress] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchContractData();
  }, []);

  const fetchContractData = async () => {
    const contract = await getContract();
    if (!contract) {
      alert("MetaMask no está conectado");
      return;
    }
    try {
      const role = await contract.whoImI();
      const kii = await contract.getKiiChain();
      const whiteListAddresses: string[] =
        role === "owner" ? await contract.getWhiteList() : [];

      setKiiChain(kii);
      setWhiteList(whiteListAddresses);
      setIdentity(role);
    } catch (error) {
      console.error("Error obteniendo datos del contrato:", error);
    }
  };

  const updateKiiChain = async (newKiiChain: string) => {
    const contract = await getContract();
    if (!contract) return alert("MetaMask no está conectado");
    try {
      setLoading(true);
      const tx = await contract.updateKiiChain(newKiiChain);
      await tx.wait();
      setLoading(false);
      fetchContractData();
    } catch (error) {
      console.error("Error actualizando KiiChain:", error);
      setLoading(false);
    }
  };

  const addToWhiteList = async () => {
    const contract = await getContract();
    if (!contract) return alert("MetaMask no está conectado");
    try {
      setLoading(true);
      const tx = await contract.addAddressToWhiteList(newAddress);
      await tx.wait();
      setLoading(false);
      setNewAddress("");
      fetchContractData();
    } catch (error) {
      console.error("Error agregando dirección:", error);
      setLoading(false);
    }
  };

  const removeFromWhiteList = async (address: string) => {
    const contract = await getContract();
    if (!contract) return alert("MetaMask no está conectado");
    try {
      setLoading(true);
      const tx = await contract.removeAddressFromWhiteList(address);
      await tx.wait();
      setLoading(false);
      fetchContractData();
    } catch (error) {
      console.error("Error eliminando dirección:", error);
      setLoading(false);
    }
  };

  return (
    <div className="p-6 text-white rounded-lg w-full">
      <h1 className="text-2xl font-bold mb-6 text-start ml-40 mb-10">
       {identity === "owner" ? "Owner" : "User"} Panel
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Primera Columna */}
        <div className="flex flex-col gap-6 items-center">
          {/* User Card */}
          <UserCard userRole={identity || "Cargando..."} />

          {/* Kiichain (solo visualización) */}
         
           <div className="p-4 rounded-lg w-full">
            <KiiChainSong kiiChain={kiiChain} />

            </div>
          
        </div>

        {/* Segunda Columna */}
        {identity === "owner" ? (
          <div className="flex flex-col gap-6 px-24">
            {/* Actualizar Kiichain con el nuevo KiiChainCard */}
            <KiiChainCard updateKiiChain={updateKiiChain} loading={loading} />

            {/* Agregar a Whitelist */}
            <div className="p-4 rounded-3xl w-full">
              <h2 className="text-lg font-semibold">Add to Whitelist</h2>
              <div className="flex flex-row gap-2">
                <input
                  type="text"
                  placeholder="Address"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  className="p-2 rounded-3xl mr-2 mt-2 text-black w-full"
                />
                <button
                  onClick={addToWhiteList}
                  className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                >
                  {loading ? "Añadiendo..." : "Añadir"}
                </button>
              </div>
            </div>

            {/* WhiteList */}
<div className="p-6 bg-[#0C0316] rounded-xl w-full shadow-lg">
  <h2 className="text-lg font-semibold text-white mb-4">Whitelist</h2>

  {whiteList.length > 0 ? (
    <ul className="space-y-3">
      {whiteList.map((addr, index) => (
        <li
          key={index}
          className="flex justify-between items-center px-4 py-2 bg-[#2A1D3C]  rounded-lg border border-gray-600 transition duration-300 hover:bg-gray-600"
        >
          <span className="text-white font-mono text-sm truncate">{addr}</span>
          <button
            onClick={() => removeFromWhiteList(addr)}
            className="text-red-500 hover:text-red-700 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 3a1 1 0 00-1 1v1H4a1 1 0 000 2h1v8a2 2 0 002 2h6a2 2 0 002-2v-8h1a1 1 0 100-2h-4V4a1 1 0 00-1-1H9zM7 6v8a1 1 0 102 0V6H7zm4 0v8a1 1 0 102 0V6h-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-400 text-sm">No addresses in the whitelist.</p>
  )}
</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PrivateInfo;
