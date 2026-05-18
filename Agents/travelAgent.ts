import { ChatGroq } from "@langchain/groq";
import { tool } from "@langchain/core/tools";
import { createAgent } from "langchain";
import z from "zod";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

// 1. Define a tool — a function the AI can call
const getPersonalInformation = tool(
  (_input: { query: string }) => {
    try {
      const skillsPath = path.join(process.cwd(), "skills", "personal_info.md");
      const personalInfo = fs.readFileSync(skillsPath, "utf-8");
      return `Personal information retrieved from skills file:\n\n${personalInfo}`;
    } catch (error) {
      return `Unable to retrieve personal information. Error: ${error}`;
    }
  },
  {
    name: "Get_Ooty_Information",
    description:
      "Retrieves detailed information about Ooty (Udhagamandalam), a hill station in Tamil Nadu, India. Use this whenever asked about Ooty's history, geography, attractions, food, climate, culture, transport, or any related topic.",
    schema: z.object({
      query: z.string().describe("The user's question about Ooty"),
    }),
  }
);

// 2. Set up the LLM (the brain)
const model = new ChatGroq({
  model: "llama-3.3-70b-versatile",
  apiKey: process.env.GROQ_API_KEY,
});

// 3. Create the agent — give it the model, tools, and a system prompt
const deepAgent = createAgent({
  model,
  tools: [getPersonalInformation],
  systemPrompt: `You are a knowledgeable travel guide assistant specialising in Ooty, Tamil Nadu, India.
Always use the "Get_Ooty_Information" tool to answer questions, then extract and return only the relevant answer. Be concise and friendly.`,
});

// 4. Run the agent
async function main() {
  const userMessage = process.argv[2];

  if (!userMessage) {
    console.log("Usage: npx tsx DeepAgent.ts \"your question here\"");
    process.exit(1);
  }

  const result = await deepAgent.invoke({
    messages: [{ role: "user", content: userMessage }],
  });

  const lastMessage = result.messages[result.messages.length - 1];
  console.log(`\n${lastMessage.content}`);
}

main().catch(console.error);


