import axios from "axios";

const VOTTUN_API_URL = process.env.NEXT_PUBLIC_VOTTUN_API_URL;
const VOTTUN_API_KEY = process.env.NEXT_PUBLIC_VOTTUN_API_KEY;

const vottunClient = axios.create({
  baseURL: VOTTUN_API_URL,
  headers: {
    Authorization: `Bearer ${VOTTUN_API_KEY}`,
  },
});

// Función para obtener el balance de tokens ERC-721 de una wallet
export const getNFTBalance = async (walletAddress: string, contractAddress: string) => {
  try {
    const response = await vottunClient.get(`/nft/balance/${walletAddress}/${contractAddress}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching NFT balance:", error);
    throw error;
  }
};

// Función para obtener los detalles de un token específico ERC-721
export const getNFTDetails = async (contractAddress: string, tokenId: string) => {
  try {
    const response = await vottunClient.get(`/nft/details/${contractAddress}/${tokenId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching NFT details:", error);
    throw error;
  }
};

// Función para obtener las transacciones de un token ERC-721
export const getNFTTransactions = async (contractAddress: string, tokenId: string) => {
  try {
    const response = await vottunClient.get(`/nft/transactions/${contractAddress}/${tokenId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching NFT transactions:", error);
    throw error;
  }
};
