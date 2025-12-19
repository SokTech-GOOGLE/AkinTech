import type { VercelRequest, VercelResponse } from "@vercel/node";
import { AkinTechAI } from "../services/akinTechAI";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;
    const reply = await AkinTechAI(message);
    res.status(200).json({ reply });
  } catch (error) {
    res.status(500).json({ error: "AkinTech AI failed" });
  }
}
