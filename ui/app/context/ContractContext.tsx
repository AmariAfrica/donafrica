import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { usdcContractAbi, donorAfricaContractAbi } from "../lib/constant";

interface ContractContextType {
  usdcContract: ethers.Contract | null;
  donorAfricaContract: ethers.Contract | null;
}
const ContractContext = createContext<ContractContextType | null>(null);

interface DonorAfricaContract extends ethers.Contract {
  distributeFunds: () => Promise<ethers.ContractTransaction>;
  getBalance(): ()=> Promise<ethers.BigNumber>;
  donate(amount: ethers.BigNumber): Promise<ethers.ContractTransaction>;
  withdraw(amount: ethers.BigNumber): Promise<ethers.ContractTransaction>;
}

export const ContractProvider = ({ children }: { children: React.ReactNode }) => {
  const [usdcContract, setUsdcContract] = useState<ethers.Contract | null>(null);
  const [donorAfricaContract, setDonorAfricaContract] = useState<ethers.Contract | null>(null);
  // const donorAfricaContract = new ethers.Contract(donorAfricaAddress, DonorAfricaABI.abi, signer) as DonorAfricaContract;
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const usdcContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const donorAfricaContractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

    const usdcContractInstance = new ethers.Contract(usdcContractAddress, usdcContractAbi, signer);
    const donorAfricaContractInstance = new ethers.Contract(donorAfricaContractAddress, donorAfricaContractAbi, signer);

    setUsdcContract(usdcContractInstance);
    setDonorAfricaContract(donorAfricaContractInstance);
  }, []);

  return (
    <ContractContext.Provider value={{ usdcContract, donorAfricaContract }}>
      {children}
    </ContractContext.Provider>
  );
};

export const useContracts = () => {
  const context = useContext(ContractContext);
  if (!context) {
    throw new Error("useContracts must be used within a ContractProvider");
  }
  return context;
};