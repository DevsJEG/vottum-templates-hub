import axios from "axios";

const VOTTUN_API_URL = process.env.NEXT_PUBLIC_VOTTUN_API_URL;
const VOTTUN_API_KEY = process.env.NEXT_PUBLIC_VOTTUN_API_KEY;

const vottunClient = axios.create({
  baseURL: VOTTUN_API_URL,
  headers: {
    Authorization: `Bearer ${VOTTUN_API_KEY}`,
  },
});

// Función para obtener el balance de un token ERC-20
export const getERC20TokenBalance = async (walletAddress: string, tokenContract: string) => {
  try {
    const response = await vottunClient.get(`/crypto/balance/${walletAddress}/${tokenContract}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching ERC-20 token balance:", error);
    throw error;
  }
};

// Función para ver transacciones de un token ERC-20
export const getERC20TokenTransactions = async (walletAddress: string, tokenContract: string) => {
  try {
    const response = await vottunClient.get(`/crypto/transactions/${walletAddress}/${tokenContract}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching ERC-20 token transactions:", error);
    throw error;
  }
};

// Función para verificar información del contrato de un token ERC-20
export const getERC20TokenInfo = async (tokenContract: string) => {
  try {
    const response = await vottunClient.get(`/crypto/token-info/${tokenContract}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching ERC-20 token information:", error);
    throw error;
  }
};
