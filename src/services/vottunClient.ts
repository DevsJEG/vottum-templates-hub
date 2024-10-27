import axios from "axios";

const VOTTUN_API_URL = process.env.NEXT_PUBLIC_VOTTUN_API_URL;
const VOTTUN_API_KEY = process.env.NEXT_PUBLIC_VOTTUN_API_KEY;

const vottunClient = axios.create({
  baseURL: VOTTUN_API_URL,
  headers: {
    Authorization: `Bearer ${VOTTUN_API_KEY}`,
  },
});

export const getTokenBalance = async (walletAddress: string): Promise<any> => {
  try {
    const response = await vottunClient.get(`/balance/${walletAddress}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching token balance:", error);
    throw error;
  }
};
