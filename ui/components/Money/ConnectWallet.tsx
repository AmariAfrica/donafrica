"use client";
import React, { useState } from 'react';
import { ethers } from 'ethers';
import Wallet from './Wallet';
import { useContracts } from '../../app/context/ContractContext';

const ConnectWallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        setIsConnected(true);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this app.');
    }
  };

  return (
    <div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[35%]">
                <div className="flex justify-center items-center space-x-5 h-full">
                    { !isConnected ? (
                    <>
                        <h4>Connect to MetaMask</h4>
                        <button className="border-transparent bg-primary px-7.5 py-3.5 text-base font-medium text-white transition-all duration-300 hover:bg-opacity-90 dark:hover:bg-opacity-90"
                         onClick={connectWallet}>
                          Connect Wallet
                        </button>
                    </>
                    ) : (
                    <>
                        <h4>Wallet Connected</h4>
                        <p>Address: {walletAddress}</p>
                        <Wallet />
                    </>
                    )}
                </div>
            </div>
  );
};

export default ConnectWallet;