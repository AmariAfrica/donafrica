import { useState, useCallback } from "react";
import { ethers } from "ethers";
import { useContracts } from "../context/ContractContext";

export const useDonorAfrica = () => {
  const contracts = useContracts();
  const donorAfricaContract = contracts ? contracts.donorAfricaContract : null;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const donate = useCallback(async (amount: ethers.BigNumber) => {
    if (!donorAfricaContract) return;
    setLoading(true);
    setError(null);
    try {
        const apprv = await donorAfricaContract.approve(donorAfricaContract.address, amount);
      const tx = await donorAfricaContract.donate(amount);
      await tx.wait();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [donorAfricaContract]);

  const withdraw = useCallback(async (amount: ethers.BigNumber) => {
    if (!donorAfricaContract) return;
    setLoading(true);
    setError(null);
    try {
      const tx = await donorAfricaContract.withdraw(amount);
      await tx.wait();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [donorAfricaContract]);

  const getBalance = useCallback(async () => {
    if (!donorAfricaContract) return ethers.BigNumber.from(0);
    try {
      const balance = await donorAfricaContract.getBalance();
      return balance;
    } catch (err) {
      setError(err.message);
      return ethers.BigNumber.from(0);
    }
  }, [donorAfricaContract]);

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
    withdraw,
    getBalance,
    distributeFunds,
    loading,
    error,
  };
};