import { NextApiRequest, NextApiResponse } from "next";
import { getERC20TokenTransactions } from "../../../services/vottunCryptoClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { walletAddress, tokenContract } = req.query;

  try {
    const transactions = await getERC20TokenTransactions(walletAddress as string, tokenContract as string);
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Error fetching token transactions" });
  }
};
