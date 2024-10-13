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
    <div className="card">
      <div className="card-body">
        {!isConnected ? (
          <>
            <h5 className="card-title">Connect to MetaMask</h5>
            <button className="btn btn-primary" onClick={connectWallet}>
              Connect Wallet
            </button>
          </>
        ) : (
          <>
            <h5 className="card-title">Wallet Connected</h5>
            <p className="card-text">Address: {walletAddress}</p>
              <Wallet />
          </>
        )}
      </div>
    </div>
  );
};

export default ConnectWallet;