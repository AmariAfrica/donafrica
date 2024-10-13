import { useState } from 'react';
import { checkUsdcBalance } from '../utils/contract';

const WalletBalance = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState(null);

  const getBalance = async () => {
    try {
      const balance = await checkUsdcBalance(walletAddress);
      setBalance(balance);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter wallet address"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
      />
      <button onClick={getBalance}>Check Balance</button>
      {balance && <p>Balance: {balance} USDC</p>}
    </div>
  );
};

export default WalletBalance;
