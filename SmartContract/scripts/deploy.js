const fs = require("fs");

const main = async () => {
    const [deployer] = await ethers.getSigners();

      // Deploy the usdcMock contract with 1 million USDC
    const initialSupply = ethers.utils.parseUnits("1000000000000", 18); // 1 billion USDC with 18 decimals
    const UsdcMock = await ethers.getContractFactory("usdcMock");
    const usdcMock = await UsdcMock.deploy(initialSupply);
    await usdcMock.deployed();
    console.log("usdcMock deployed to:", usdcMock.address);


    // Base Sepolia USDC contract address

    const usdcTokenAddress = usdcMock.address;

    const contractFactoryDonorAfrica = await hre.ethers.getContractFactory("DonorAfrica");
    const contractDonorAfrica = await contractFactoryDonorAfrica.deploy(usdcTokenAddress); // Pass USDC address to constructor
    await contractDonorAfrica.deployed();
    
    console.log("DonorAfrica deployed to:", contractDonorAfrica.address);

    const contractInfoDonorAfrica = {
        address: contractDonorAfrica.address,
        abi: JSON.parse(contractDonorAfrica.interface.format("json"))
    };

    fs.writeFileSync("contractDonorAfricaAddress.json", JSON.stringify(contractInfoDonorAfrica, null, 2));
    fs.writeFileSync("contractDonorAfricaAddress.txt", contractDonorAfrica.address);

    const donorWallet= "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
    const amountToTransfer = ethers.utils.parseUnits("2000000", 18);

    const transferTx = await usdcMock.transfer(donorWallet, amountToTransfer);
    await transferTx.wait();
    console.log(`Funded donor1 wallet ${donorWallet} with 2 million USDC`);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();
