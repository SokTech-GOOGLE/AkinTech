
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getLiveTechPulse = async (): Promise<string[]> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "List 5 current trending tech news headlines from today. Focus on AI, mobile security, and global tech breakthroughs.",
      config: {
        tools: [{ googleSearch: {} }]
      }
    });
    const text = response.text || "";
    return text.split('\n').filter(line => line.trim().length > 0).slice(0, 5);
  } catch (error) {
    return [
      "AI Models reaching new benchmarks in reasoning",
      "Global security patch released for Android 15",
      "New scholarship opportunities announced for West African students",
      "Quantum computing breakthrough in data encryption",
      "Mobile FRP bypass techniques shift toward server-side verification"
    ];
  }
};

export const summarizePost = async (content: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Summarize this engineering update in one professional sentence: "${content}"`,
    });
    return response.text || content;
  } catch (error) {
    return content;
  }
};

export const generatePostImage = async (prompt: string): Promise<string | null> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: `High-fidelity 4K technology render of: ${prompt}` }]
      },
      config: {
        imageConfig: { aspectRatio: "1:1" }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    return null;
  }
};
