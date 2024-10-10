import { ethers } from "ethers";
import DonorAfricaABI from '../../../SmartContract/artifacts/contracts/DonorAfrica.sol/DonorAfrica.json'; 
import MockUSDCABI from '../../../SmartContract/artifacts/contracts/usdcMock.sol/usdcMock.json';


const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
// const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const donorAfricaAddress = "0xYourDonorAfricaContractAddress"; // Replace with your contract address
const usdcAddress = "0xYourMockUSDCAddress"; // Replace with your mock USDC contract address
const donorAfricaContract = new ethers.Contract(donorAfricaAddress, DonorAfricaABI.abi, signer);
const usdcContract = new ethers.Contract(usdcAddress, MockUSDCABI.abi, signer);

export const registerDonor = async (): Promise<void> => {
  try {
    const tx = await donorAfricaContract.registerDonor();
    await tx.wait();
    console.log('Donor registered successfully');
  } catch (error) {
    console.error('Error registering donor:', error);
  }
};

export const donate = async (amount: string): Promise<void> => {
  try {
    const tx = await usdcContract.transferFrom(await signer.getAddress(), donorAfricaAddress, ethers.utils.parseUnits(amount, 18));
    await tx.wait();
    console.log('Donation successful');
  } catch (error) {
    console.error('Error making donation:', error);
  }
};