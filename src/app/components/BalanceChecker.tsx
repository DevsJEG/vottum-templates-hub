// components/BalanceChecker.tsx

import { useState } from "react";
import axios from "axios";

const BalanceChecker = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState(null);

  const fetchBalance = async () => {
    try {
      const response = await axios.get(`/api/vottun/balance?walletAddress=${walletAddress}`);
      setBalance(response.data);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Wallet Address"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
      />
      <button onClick={fetchBalance}>Check Balance</button>
      {balance && <div>Balance: {JSON.stringify(balance)}</div>}
    </div>
  );
};

export default BalanceChecker;
