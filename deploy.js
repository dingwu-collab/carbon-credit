// We require the Hardhat Runtime Environment explicitly
const hre = require("hardhat");

async function main() {
  // 1. Get the wallet that is deploying (The "Bank" or "Admin")
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // 2. Get the specific contract factory (The Blueprint)
  const Token = await hre.ethers.getContractFactory("CarbonCreditToken");

  // 3. Trigger the deployment transaction
  // This is where gas fees are paid and the token is created on-chain
  const token = await Token.deploy();

  // 4. Wait for the network to confirm
  await token.waitForDeployment();

  console.log("Carbon Credit Token deployed to address:", await token.getAddress());
  console.log("Copy this address! It is your token's permanent ID.");
}

// 5. Execute the function and handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });