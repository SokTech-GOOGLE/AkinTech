import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function AkinTechAI(prompt: string) {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are AkinTech AI, a smart, friendly African-built assistant focused on education, technology, health, and innovation.",
        },
        { role: "user", content: prompt },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("AkinTech AI Error:", error);
    throw new Error("AkinTech AI is unavailable");
  }
}
