// components/ERC20Dashboard.tsx

import { useState } from "react";
import axios from "axios";

const ERC20Dashboard = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [tokenContract, setTokenContract] = useState("");
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [tokenInfo, setTokenInfo] = useState(null);

  const fetchBalance = async () => {
    try {
      const response = await axios.get(`/api/crypto/balance?walletAddress=${walletAddress}&tokenContract=${tokenContract}`);
      setBalance(response.data);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`/api/crypto/transactions?walletAddress=${walletAddress}&tokenContract=${tokenContract}`);
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const fetchTokenInfo = async () => {
    try {
      const response = await axios.get(`/api/crypto/token-info?tokenContract=${tokenContract}`);
      setTokenInfo(response.data);
    } catch (error) {
      console.error("Error fetching token info:", error);
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
      <input
        type="text"
        placeholder="Token Contract"
        value={tokenContract}
        onChange={(e) => setTokenContract(e.target.value)}
      />
      <button onClick={fetchBalance}>Check Balance</button>
      <button onClick={fetchTransactions}>View Transactions</button>
      <button onClick={fetchTokenInfo}>Token Info</button>

      {balance && <div>Balance: {JSON.stringify(balance)}</div>}
      {transactions && <div>Transactions: {JSON.stringify(transactions)}</div>}
      {tokenInfo && <div>Token Info: {JSON.stringify(tokenInfo)}</div>}
    </div>
  );
};

export default ERC20Dashboard;
