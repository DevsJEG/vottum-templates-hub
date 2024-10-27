import { NextApiRequest, NextApiResponse } from "next";
import { getERC20TokenInfo } from "../../../services/vottunCryptoClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { tokenContract } = req.query;

  try {
    const tokenInfo = await getERC20TokenInfo(tokenContract as string);
    res.status(200).json(tokenInfo);
  } catch (error) {
    res.status(500).json({ error: "Error fetching token info" });
  }
};