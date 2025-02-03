require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    fuji: {
      url: process.env.AVALANCHE_FUJI_RPC, // URL del nodo
      accounts: [process.env.PRIVATE_KEY], // Clave privada de MetaMask
    },
  },
};
