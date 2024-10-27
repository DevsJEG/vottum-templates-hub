import { useState } from "react";
import axios from "axios";

const NFTDashboard = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [balance, setBalance] = useState(null);
  const [details, setDetails] = useState(null);
  const [transactions, setTransactions] = useState(null);

  const fetchBalance = async () => {
    try {
      const response = await axios.get(`/api/nft/balance?walletAddress=${walletAddress}&contractAddress=${contractAddress}`);
      setBalance(response.data);
    } catch (error) {
      console.error("Error fetching NFT balance:", error);
    }
  };

  const fetchDetails = async () => {
    try {
      const response = await axios.get(`/api/nft/details?contractAddress=${contractAddress}&tokenId=${tokenId}`);
      setDetails(response.data);
    } catch (error) {
      console.error("Error fetching NFT details:", error);
    }
  };

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`/api/nft/transactions?contractAddress=${contractAddress}&tokenId=${tokenId}`);
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching NFT transactions:", error);
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
        placeholder="Contract Address"
        value={contractAddress}
        onChange={(e) => setContractAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Token ID"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
      />
      <button onClick={fetchBalance}>Check Balance</button>
      <button onClick={fetchDetails}>View Token Details</button>
      <button onClick={fetchTransactions}>View Transactions</button>

      {balance && <div>Balance: {JSON.stringify(balance)}</div>}
      {details && <div>Details: {JSON.stringify(details)}</div>}
      {transactions && <div>Transactions: {JSON.stringify(transactions)}</div>}
    </div>
  );
};

export default NFTDashboard;
