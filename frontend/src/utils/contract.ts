import { ethers } from "ethers";

// Dirección de tu contrato en Fuji Testnet
const CONTRACT_ADDRESS = "0x74d020bE53e94C785c45Ed53B66cf317A4b0D595"; // Reemplaza con la dirección real

// ABI de tu contrato (copia esto desde el JSON generado por Hardhat o desde Remix)
const ABI = [
    {
      "inputs": [
        { "internalType": "address", "name": "_owner", "type": "address" },
        { "internalType": "address", "name": "_firstAddress", "type": "address" },
        { "internalType": "string", "name": "_kiichain", "type": "string" }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "getKiiChain",
      "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getWhiteList",
      "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "whoImI",
      "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }],
      "name": "addAddressToWhiteList",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "string", "name": "_kiichain", "type": "string" }],
      "name": "updateKiiChain",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

/**
 * Obtiene una instancia del contrato en la red Fuji.
 */
export const getContract = async (): Promise<ethers.Contract | null> => {
  if (typeof window !== "undefined" && window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await  provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
  }
  return null;
};
