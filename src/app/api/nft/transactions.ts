import { NextApiRequest, NextApiResponse } from "next";
import { getNFTTransactions } from "../../../services/vottunNftClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { contractAddress, tokenId } = req.query;

  try {
    const transactions = await getNFTTransactions(contractAddress as string, tokenId as string);
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Error fetching NFT transactions" });
  }
};
