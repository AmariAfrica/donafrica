import { useState, useCallback } from "react";
import { ethers } from "ethers";
import { useContracts } from "../context/ContractContext";



export const useDonorAfrica = () => {
  const contracts = useContracts();
  const donorAfricaContract = contracts ? contracts.donorAfricaContract : null;
  const usdcContract = contracts ? contracts.usdcContract : null;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWalletDetails = async () => {
    if (usdcContract) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const balance = await usdcContract.balanceOf(address);
      return ethers.utils.formatUnits(balance, 18);
    }
  };

  const registerDonor = async () => {
    try {
      if (!donorAfricaContract) return;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const isRegistered = donorAfricaContract ? await donorAfricaContract.isDonorRegistered(address) : false;
      if (!isRegistered) {
        alert('You must be registered to donate');
        const tx = await donorAfricaContract.registerDonor();
        await tx.wait();
        alert('Donor registered successfully');
        return;
      }
    } catch (error) {
      console.error("Error during donor registration:", error);
      alert(`Registration failed: ${error.message}`);
    }
  };

  const donate = useCallback(async (amount: string) => {
    if (!donorAfricaContract || !usdcContract) return;
    setLoading(true);
    setError(null);
    try {
      const parsedAmount = ethers.utils.parseUnits(amount, 18);
      const apprvTx = await usdcContract.approve(donorAfricaContract.address, parsedAmount);
      await apprvTx.wait();
      const tx = await donorAfricaContract.donate(parsedAmount);
      await tx.wait();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [donorAfricaContract]);

  const deposit = async (amount: string) => {
    if (!donorAfricaContract) return;
    setLoading(true);
    setError(null);
    try {
      const parsedAmount = ethers.utils.parseUnits(amount, 18);
      const tx = await donorAfricaContract.deposit(parsedAmount);
      await tx.wait();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const withdraw = useCallback(async (amount: string) => {
    if (!donorAfricaContract) return;
    setLoading(true);
    setError(null);
    try {
      const parsedAmount = ethers.utils.parseUnits(amount, 18);
      const tx = await donorAfricaContract.withdraw(parsedAmount);
      await tx.wait();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [donorAfricaContract]);

  const getBalance = useCallback(async () => {
    if (usdcContract) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const balance = await usdcContract.balanceOf(address);
      return ethers.utils.formatUnits(balance, 18);
    }
  }, [donorAfricaContract]);

  const registerSchool = async () => {
    try {
      if(!donorAfricaContract) return;
      setLoading(true);
      setError(null);
      const tx = await donorAfricaContract.registerSchool();
      await tx.wait();
      alert('School registered successfully');
    } catch (error) {
      setError(error.message);
      alert(`Registration failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const registerStudent = async () => {
    try {
      if(!donorAfricaContract) return;
      setLoading(true);
      setError(null);
      const tx = await donorAfricaContract.registerStudent();
      await tx.wait();
      alert('Student registered successfully');
    } catch (error) {
      setError(error.message);
      alert(`Registration failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const verifyStudent = async (studentAddress: string, schoolAddress: string) => {
    try {
      if (!donorAfricaContract) return;
      setLoading(true);
      setError(null);
      const tx = await donorAfricaContract.verifyStudent(studentAddress, schoolAddress);
      await tx.wait();
      alert('Student verified successfully');
    }catch (error) {
      console.error("Error during student verification:", error);
      alert(`Verification failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const isStudentVerified = async (studentAddress: string) => {
    try {
      if (!donorAfricaContract) return;
      const isVerified = await donorAfricaContract.isStudentVerified(studentAddress);
      return isVerified;
    } catch (error) {
      console.error("Error during student verification:", error);
      alert(`Verification failed: ${error.message}`);
      return false;
    }
  };


  const distributeFunds = useCallback(async () => {
    if (!donorAfricaContract) return;
    setLoading(true);
    setError(null);
    try {
      const tx = await donorAfricaContract.distributeFunds();
      await tx.wait();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
    , [donorAfricaContract]);


  return {
    donate,
    registerDonor,
    deposit,
    withdraw,
    getBalance,
    distributeFunds,
    fetchWalletDetails,
    registerSchool,
    registerStudent,
    verifyStudent,
    isStudentVerified,
    loading,
    error,
  };
};