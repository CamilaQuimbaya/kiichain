"use client";

import { useEffect, useState } from "react";
import { getContract } from "@/utils/contract";

const PrivateInfo: React.FC = () => {
  const [kiiChain, setKiiChain] = useState<string | null>(null);
  const [whiteList, setWhiteList] = useState<string[]>([]);
  const [identity, setIdentity] = useState<string | null>(null);
  const [newAddress, setNewAddress] = useState<string>("");
  const [newKiiChain, setNewKiiChain] = useState<string>("");
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
      const whiteListAddresses: string[] = role === "owner" ?  await contract.getWhiteList() : [];

      setKiiChain(kii);
      setWhiteList(whiteListAddresses);
      setIdentity(role);
    } catch (error) {
      console.error("Error obteniendo datos del contrato:", error);
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

  const updateKiiChain = async () => {
    const contract = await getContract();
    if (!contract) return alert("MetaMask no está conectado");
    try {
      setLoading(true);
      const tx = await contract.updateKiiChain(newKiiChain);
      await tx.wait();
      setLoading(false);
      setNewKiiChain("");
      fetchContractData();
    } catch (error) {
      console.error("Error actualizando kiichain:", error);
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Dapp - Private Info Storage</h1>
      <p><strong>Rol:</strong> {identity || "Cargando..."}</p>
      <p><strong>Kiichain:</strong> {kiiChain || "Cargando..."}</p>
      {identity === "owner" && (
        <><p><strong>Whitelist:</strong></p>
        <ul>
          {whiteList.length > 0 ? whiteList.map((addr, index) => (
            <li key={index}>{addr}</li>
          )) : <li>Ninguna dirección en whitelist</li>}
        </ul></>
        )}

      {identity === "owner" && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Añadir Dirección a Whitelist</h2>
          <input
            type="text"
            placeholder="Dirección"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            className="p-2 rounded text-black"
          />
          <button onClick={addToWhiteList} className="p-2 bg-blue-500 rounded ml-2">
            {loading ? "Añadiendo..." : "Añadir"}
          </button>
        </div>
      )}

      {identity === "owner" && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Actualizar Kiichain</h2>
          <input
            type="text"
            placeholder="Nuevo kiichain"
            value={newKiiChain}
            onChange={(e) => setNewKiiChain(e.target.value)}
            className="p-2 rounded text-black"
          />
          <button onClick={updateKiiChain} className="p-2 bg-green-500 rounded ml-2">
            {loading ? "Actualizando..." : "Actualizar"}
          </button>
        </div>
      )}
    </div>
  );
};

export default PrivateInfo;
