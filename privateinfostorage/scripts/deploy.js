const hre = require("hardhat");

async function main() {
  const SimpleStorage = await hre.ethers.getContractFactory("PrivateInfoStorage");
  const simpleStorage = await SimpleStorage.deploy("0x84aF5aF40dBB25580547d8369F6710aE6620FBC9", "0x5Ec605060d810669fd7134494C4AF17ab438CC92", "hoy como pizza");
  // Esperar a que el contrato sea desplegado en ethers v6
  const deployedContract = await simpleStorage.waitForDeployment();

  console.log("Contrato desplegado en:", await deployedContract.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
