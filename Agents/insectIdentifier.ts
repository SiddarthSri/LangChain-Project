import { ChatGroq } from "@langchain/groq";
import { tool } from "@langchain/core/tools";
import { createAgent } from "langchain";
import z from "zod";
import dotenv from "dotenv";

dotenv.config();

const getInsectInformation = tool(
  (input: { insect: string }) => `${input.insect} is an Insect and has six legs`,
  {
    name: "Find_Insect_Information",
    description: "Get information about specific insects",
    schema: z.object({ insect: z.string() }),
  }
);

const getReptileInformation = tool(
  (input: { reptile: string }) => `${input.reptile} is a Reptile and scaly`,
  {
    name: "Find_Reptile_Information",
    description: "Get information about specific reptiles",
    schema: z.object({ reptile: z.string() }),
  }
);

const getMammalInformation = tool(
  (input: { mammal: string }) => `${input.mammal} is a Mammal and warm-blooded`,
  {
    name: "Find_Mammal_Information",
    description: "Get information about specific mammals",
    schema: z.object({ mammal: z.string() }),
  }
);

const getBirdInformation = tool(
  (input: { bird: string }) => `${input.bird} is a Bird and has feathers`,
  {
    name: "Find_Bird_Information",
    description: "Get information about specific birds",
    schema: z.object({ bird: z.string() }),
  }
);

const model = new ChatGroq({
  model: "llama-3.3-70b-versatile",
  apiKey: process.env.GROQ_API_KEY,
});

const agent = createAgent({
  model,
  tools: [getReptileInformation,getMammalInformation,getBirdInformation,getInsectInformation],
  systemPrompt: "You are an assistant that will help classify the type of Creature Provided.",
});

async function creatureClassifier() {
  const result = await agent.invoke({
    messages: [{ role: "user", content: "Tell me about Snakes?" }],
  });

  const messages = result.messages;
  const lastMessage = messages[messages.length - 1];
  console.log(lastMessage);
}

creatureClassifier().catch(console.error);