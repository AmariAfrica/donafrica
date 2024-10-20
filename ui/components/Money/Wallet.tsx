// "use client";
// import React, { useEffect, useState, createContext } from 'react';
// import { ethers } from 'ethers';
// import { useContracts } from '../../app/context/ContractContext';
// import { useDonorAfrica } from '@/app/hooks/useDonorAfrica';
  
// const Wallet = () => {
//   const { usdcContract, donorAfricaContract } = useContracts();
//   const [walletAddress, setWalletAddress] = useState<string>('');
//   const [usdcBalance, setUsdcBalance] = useState<string>('0');

//   useEffect(() => {
//     const fetchWalletDetails = async () => {
//       if (usdcContract) {
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         const address = await signer.getAddress();
//         const isRegistered = donorAfricaContract ? await donorAfricaContract.isRegistered(address) : false;

//         setWalletAddress(address);

//         const balance = await usdcContract.balanceOf(address);
//         setUsdcBalance(ethers.utils.formatUnits(balance, 18));
//       }
//     };

//   }, [usdcContract]);

//   const handleDeposit = async () => {
//     if (donorAfricaContract) {
//       const amount = ethers.utils.parseUnits('100', 18); // Example amount
//       const tx = await donorAfricaContract.deposit(amount);
//       await tx.wait();
//       alert('Deposit successful');
//     }
//   };

//   const handleWithdraw = async () => {
//     if (donorAfricaContract) {
//       const amount = ethers.utils.parseUnits('100', 18); 
//       const tx = await donorAfricaContract.withdraw(amount);
//       await tx.wait();
//       alert('Withdraw successful');
//     }
//   };

//   const registerDonor = async () => {
//     const reg = await donorAfricaContract.isRegistered(walletAddress);
//     if (!isRegistered) {
//         alert('You must be registered to donate');
//         return;
//       }
//     if (donorAfricaContract) {
//       const tx = await donorAfricaContract.registerDonor();
//       await tx.wait();
//       alert('Donor registered successfully');
//     }
//   };


//   const handleDonate = async () => {
//     if (donorAfricaContract) {
//         const amount = ethers.utils.parseUnits('100', 18);
//         // const txApprove = await usdcContract.approve(donorAfricaContract.address, amount); // Approve the contract to spend USDC
//         // await txApprove.wait(); 
//         const tx = await donorAfricaContract.donate(amount);
//         await tx.wait();
//         alert('Donation successful');
//     }
//   };

//   return (
//     <div className="card">
//       <div className="card-body">
//         <h5 className="card-title">Wallet</h5>
//         {/* <p className="card-text">Address: {walletAddress}</p> */}
//         <p className="card-text">USDC Balance: {usdcBalance}</p>
//         <button className="btn btn-primary" onClick={handleDeposit}>Deposit USDC</button>
//         <button className="btn btn-secondary" onClick={handleWithdraw}>Withdraw USDC</button>
//         <button className="btn btn-success" onClick={registerDonor}>Register As A donor</button>
//         <button className="btn btn-success" onClick={handleDonate}>Donate USDC</button>
//       </div>
//     </div>
//   );
// };

// export default Wallet;











// "use client";
// import React, { useEffect, useState } from 'react';
// import { ethers } from 'ethers';
// import { useContracts } from '../../app/context/ContractContext';
// import { useDonorAfrica } from '@/app/hooks/useDonorAfrica';


// const Wallet = () => {
//   const { usdcContract } = useContracts();
//   const { getBalance, deposit, withdraw, donate } = useDonorAfrica();
//   const [isConnected, setIsConnected] = useState(false);
//   const [walletAddress, setWalletAddress] = useState('');
//   const [balance, setBalance] = useState(ethers.BigNumber.from(0));

//   useEffect(() => {

//     const connectWallet = async () => {
//       if (window.ethereum) {
//         try {
//           const provider = new ethers.providers.Web3Provider(window.ethereum);
//           await provider.send('eth_requestAccounts', []);
//           const signer = provider.getSigner();
//           const address = await signer.getAddress();
//           setIsConnected(true);
//           setWalletAddress(address);
//           const walletBalance = await getBalance();
//           setBalance(walletBalance);

//         } catch (error) {
//           console.error('Error connecting to MetaMask:', error);
//         }
//       } else {
//         alert('MetaMask is not installed. Please install it to use this app.');
//       }
//     };

//     // if(!isConnected) {
//     //     connectWallet();}
//   }, [isConnected ,getBalance, usdcContract]);

//   return (
//     <div className="card">
//       <div className="card-body">
//       <h5 className="card-title">Wallet</h5>
//         {/* {loading && <p>Loading...</p>}
//         {error && <p className="text-danger">{error}</p>} */}
//         {isConnected ? (
//           <>
//             <p className="card-text">Address: { walletAddress}</p>
//             <p className="card-text">USDC Balance: { ethers.utils.formatUnits(balance, 18) } </p>
//             <button className="btn btn-primary" onClick={() => deposit('100')}>Deposit USDC</button>
//             <button className="btn btn-secondary" onClick={() => withdraw('100')}>Withdraw USDC</button>
//             <button className="btn btn-success" onClick={()=> donate}>Donate USDC</button>
//           </>
//         ) : (
//           <p className="card-text">Please connect your wallet to see details.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Wallet;




import React, { useState, useEffect } from "react";
import { useDonorAfrica } from "@/app/hooks/useDonorAfrica";
import { ethers } from "ethers";

const Wallet: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const { donate, deposit, getBalance, fetchWalletDetails, registerDonor, error, loading } = useDonorAfrica();
  const [donationAmount, setDonationAmount] = useState<string>("");
  const [depositAmount, setDepositAmount] = useState<string>("");
  const [balance, setBalance] = useState<string>("0");
  const [registered, setRegistered] = useState<boolean | null>(null);

  // Fetch wallet details on load
  useEffect(() => {
    const fetchDetails = async () => {
      const details = await fetchWalletDetails();
      if (details) {
        setWalletAddress(details);
      }
    };
    fetchDetails();
  }, [fetchWalletDetails]);

  // Register Donor Function
  const handleRegister = async () => {
    try {
      // Implement the call to `registerDonor` in useDonorAfrica hook
      // Assuming useDonorAfrica has a registerDonor function
      await registerDonor();
      console.log("Register as a donor triggered");
      const isRegistered = true;
      setRegistered(isRegistered)
    } catch (error) {
      console.error(error);
    }
  };

  // Handle Donation
  const handleDonate = async () => {
    if (donationAmount) {
      await donate(donationAmount);
    }
  };

  // Handle Deposit
  const handleDeposit = async () => {
    if (depositAmount) {
      await deposit(depositAmount);
    }
  };

  // Handle Checking Balance
  const handleCheckBalance = async () => {
    const balance = await getBalance();
    console.log("Balance: ", balance); // USDC has 6 decimal places
    if (balance) {
      const balanceFormatted = ethers.utils.formatUnits(balance, 18);
      setBalance(balanceFormatted);
    }
    return balance;
  };

  return (
    
    // <div className="card p-4 max-w-md mx-auto">
    //   <h2 className="text-xl font-bold mb-4">Wallet Information</h2>
    //   {walletAddress ? (
    //     <>
    //       <p className="mb-2">Balance: {walletAddress} USDC</p>
    //     </>
    //   ) : (
    //     <p>Loading wallet details...</p>
    //   )}

    //   <div className="flex flex-col space-y-3">
    //     {/* Register Donor Button */}
    //     <button
    //       className="btn btn-primary"
    //       onClick={handleRegister}
    //       disabled={loading}
    //     >
    //       Register as Donor
    //     </button>

    //     {/* Donation Button */}
    //     <div>
    //       <input
    //         type="text"
    //         className="input"
    //         placeholder="Donation Amount"
    //         value={donationAmount}
    //         onChange={(e) => setDonationAmount(e.target.value)}
    //       />
    //       <button
    //         className="btn btn-secondary mt-2"
    //         onClick={handleDonate}
    //         disabled={loading || !donationAmount}
    //       >
    //         Donate
    //       </button>
    //     </div>

    //     {/* Deposit Button */}
    //     <div>
    //       <input
    //         type="text"
    //         className="input"
    //         placeholder="Deposit USDC Amount"
    //         value={depositAmount}
    //         onChange={(e) => setDepositAmount(e.target.value)}
    //       />
    //       <button
    //         className="btn btn-secondary mt-2"
    //         onClick={handleDeposit}
    //         disabled={loading || !depositAmount}
    //       >
    //         Deposit USDC
    //       </button>
    //     </div>

        
    //   </div>

    //   {error && <p className="text-red-500 mt-4">{error}</p>}
    // </div>


    <div className="lg:flex gap-4 items-stretch">
            <div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[35%]">
                <div className="flex justify-center items-center space-x-5 h-full">
                    <div>
                        <p>Account Balance</p>
                        <h2 className="text-4xl font-bold text-gray-600">{ walletAddress }</h2>
                        <p>{  registered ? 'Registered donor' : 'Not Registered' }</p>
                    </div>
                    <img src="https://www.emprenderconactitud.com/img/Wallet.png" alt="wallet"
                        className="h-24 md:h-20 w-38" />
                </div>
            </div>


            <div className="bg-white p-4 rounded-lg xs:mb-4 max-w-full shadow-md lg:w-[65%]">

                <div className="flex flex-wrap justify-between h-full">

                    <div onClick={registerDonor}
                        className="flex-1 border-transparent bg-primary px-7.5 py-3.5 text-base font-medium text-black transition-all duration-300 hover:bg-opacity-90 dark:hover:bg-opacity-90 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                        <i className="fas fa-exchange-alt text-white text-4xl"></i>
                        <p className="text-white">Register As Donor</p>
                    </div>


                    <div
                      className="flex-1 border-transparent bg-primary px-7.5 py-3.5 text-base font-medium text-black transition-all duration-300 hover:bg-opacity-90 dark:hover:bg-opacity-90 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2"
                    >
                        
                      <input
                          type="text"
                          className="input"
                          placeholder="Deposit USDC"
                          value={depositAmount}
                          onChange={(e) => setDepositAmount(e.target.value)}
                      />
                      <button
                          className="btn btn-secondary mt-2 mr-2"
                          onClick={handleDeposit}
                          disabled={loading || !depositAmount}
                        >
                          Deposit USDC
                      </button>
                        
                    </div>



                    <div
                      className="flex-1 border-transparent bg-primary px-7.5 py-3.5 text-base font-medium text-black transition-all duration-300 hover:bg-opacity-90 dark:hover:bg-opacity-90 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2"
                    >
                        
                      <input
                          type="text"
                          className="input"
                          placeholder="Donate USDC"
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(e.target.value)}
                      />
                      <button
                          className="btn btn-secondary mt-2 mr-2"
                          onClick={ handleDonate}
                          disabled={loading || !depositAmount}
                        >
                          Donate
                      </button>
                        
                    </div>
                </div>
            </div>
        </div>
    
  );
};

export default Wallet;
