import { ChatGroq } from "@langchain/groq";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import dotenv from "dotenv";

dotenv.config();

const model = new ChatGroq({
  model: "llama-3.3-70b-versatile",
  apiKey: process.env.GROQ_API_KEY,
});

const prompt = ChatPromptTemplate.fromTemplate("Tell me a fun fact about {topic}");

const parser = new StringOutputParser();

const chain = prompt.pipe(model).pipe(parser);

async function main() {
  const result = await chain.invoke({ topic: "Elephants" });
  console.log(`The result from the chain is: ${result}`);
}

main().catch(console.error);