import { AkinTechAI } from "./akinTechAI";

export async function getAIResponse(message: string) {
  return await AkinTechAI(message);
}
