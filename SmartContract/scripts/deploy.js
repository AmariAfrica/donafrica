const fs = require("fs");

const main = async () => {
    const [deployer] = await ethers.getSigners();

      // Deploy the usdcMock contract with 1 million USDC
    const initialSupply = ethers.utils.parseUnits("1000000", 18); // 1 million USDC with 18 decimals
    const UsdcMock = await ethers.getContractFactory("usdcMock");
    const usdcMock = await UsdcMock.deploy(initialSupply);
    await usdcMock.deployed();
    console.log("usdcMock deployed to:", usdcMock.address);


    // Base Sepolia USDC contract address
    // const usdcTokenAddress = "0x2b04d9a7ed8ad4cf676c1e87af948a2d57d453d4";
    // const usdcTokenAddress ="0x0bC81D270d7a3d70C144efbe510C9bf2Fce1638f";
    const usdcTokenAddress = usdcMock.address;
    // Deploy DonorAfrica contract with USDC token address
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
