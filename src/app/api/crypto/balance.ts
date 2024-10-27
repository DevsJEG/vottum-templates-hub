import { NextApiRequest, NextApiResponse } from "next";
import { getERC20TokenBalance } from "../../../services/vottunCryptoClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { walletAddress, tokenContract } = req.query;

  try {
    const balance = await getERC20TokenBalance(walletAddress as string, tokenContract as string);
    res.status(200).json(balance);
  } catch (error) {
    res.status(500).json({ error: "Error fetching token balance" });
  }
};