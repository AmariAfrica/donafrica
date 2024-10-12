import { ethers } from "ethers";
import DonorAfricaABI from '../../../SmartContract/artifacts/contracts/DonorAfrica.sol/DonorAfrica.json'; 
import MockUSDCABI from '../../../SmartContract/artifacts/contracts/usdcMock.sol/usdcMock.json';

const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
// const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const donorAfricaAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // Replace with your contract address
const usdcAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with your mock USDC contract address
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

export const isDonorRegistered = async (donorAddress: string): Promise<boolean> => {
  try {
    return await donorAfricaContract.isDonorRegistered(donorAddress);
  } catch (error) {
    console.error('Error checking donor registration:', error);
    return false;
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

export const distributeFunds = async (): Promise<void> => {
  try {
    const tx = await donorAfricaContract.distributeFunds();
    await tx.wait();
    console.log('Funds distributed successfully');
  } catch (error) {
    console.error('Error distributing funds:', error);
  }
};

export const claimFunds = async (): Promise<void> => {
  try {
    const tx = await donorAfricaContract.claimFunds();
    await tx.wait();
    console.log('Funds claimed successfully');
  } catch (error) {
    console.error('Error claiming funds:', error);
  }
};

export const registerSchool = async (): Promise<void> => {
  try {
    const tx = await donorAfricaContract.registerSchool();
    await tx.wait();
    console.log('School registered successfully');
  } catch (error) {
    console.error('Error registering school:', error);
  }
};

export const verifySchool = async (schoolAddress: string): Promise<void> => {
  try {
    const tx = await donorAfricaContract.verifySchool(schoolAddress);
    await tx.wait();
    console.log('School verified successfully');
  } catch (error) {
    console.error('Error verifying school:', error);
  }
};

export const isSchoolVerified = async (schoolAddress: string): Promise<boolean> => {
  try {
    return await donorAfricaContract.isSchoolVerified(schoolAddress);
  } catch (error) {
    console.error('Error checking school verification:', error);
    return false;
  }
};

export const registerStudent = async (schoolAddress: string): Promise<void> => {
  try {
    const tx = await donorAfricaContract.registerStudent(schoolAddress);
    await tx.wait();
    console.log('Student registered successfully');
  } catch (error) {
    console.error('Error registering student:', error);
  }
};

export const verifyStudent = async (studentAddress: string, schoolAddress: string): Promise<void> => {
  try {
    const tx = await donorAfricaContract.verifyStudent(studentAddress, schoolAddress);
    await tx.wait();
    console.log('Student verified successfully');
  } catch (error) {
    console.error('Error verifying student:', error);
  }
};

export const isStudentVerified = async (studentAddress: string): Promise<boolean> => {
  try {
    return await donorAfricaContract.isStudentVerified(studentAddress);
  } catch (error) {
    console.error('Error checking student verification:', error);
    return false;
  }
};