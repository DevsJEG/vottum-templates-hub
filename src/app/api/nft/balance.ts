import { NextApiRequest, NextApiResponse } from "next";
import { getNFTBalance } from "../../../services/vottunNftClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { walletAddress, contractAddress } = req.query;

  try {
    const balance = await getNFTBalance(walletAddress as string, contractAddress as string);
    res.status(200).json(balance);
  } catch (error) {
    res.status(500).json({ error: "Error fetching NFT balance" });
  }
};
