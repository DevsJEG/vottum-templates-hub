// pages/api/vottun/balance.ts

import { NextApiRequest, NextApiResponse } from "next";
import { getTokenBalance } from "../../../services/vottunClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { walletAddress } = req.query;

  try {
    const balance = await getTokenBalance(walletAddress as string);
    res.status(200).json(balance);
  } catch (error) {
    res.status(500).json({ error: "Error fetching token balance" });
  }
};
