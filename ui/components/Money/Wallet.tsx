"use client";
import React, { useEffect, useState, createContext } from 'react';
import { ethers } from 'ethers';
import { useContracts } from '../../app/context/ContractContext';

  
const Wallet = () => {
  const { usdcContract, donorAfricaContract } = useContracts();
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [usdcBalance, setUsdcBalance] = useState<string>('0');

  useEffect(() => {
    const fetchWalletDetails = async () => {
      if (usdcContract) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);

        const balance = await usdcContract.balanceOf(address);
        setUsdcBalance(ethers.utils.formatUnits(balance, 18));
      }
    };

    fetchWalletDetails();
  }, [usdcContract]);

  const handleDeposit = async () => {
    if (donorAfricaContract) {
      const amount = ethers.utils.parseUnits('100', 18); // Example amount
      const tx = await donorAfricaContract.deposit(amount);
      await tx.wait();
      alert('Deposit successful');
    }
  };

  const handleWithdraw = async () => {
    if (donorAfricaContract) {
      const amount = ethers.utils.parseUnits('100', 18); // Example amount
      const tx = await donorAfricaContract.withdraw(amount);
      await tx.wait();
      alert('Withdraw successful');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Wallet</h5>
        <p className="card-text">Address: {walletAddress}</p>
        <p className="card-text">USDC Balance: {usdcBalance}</p>
        <button className="btn btn-primary" onClick={handleDeposit}>Deposit USDC</button>
        <button className="btn btn-secondary" onClick={handleWithdraw}>Withdraw USDC</button>
      </div>
    </div>
  );
};

export default Wallet;