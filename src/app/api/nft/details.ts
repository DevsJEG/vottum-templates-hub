import { NextApiRequest, NextApiResponse } from "next";
import { getNFTDetails } from "../../../services/vottunNftClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { contractAddress, tokenId } = req.query;

  try {
    const details = await getNFTDetails(contractAddress as string, tokenId as string);
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ error: "Error fetching NFT details" });
  }
};