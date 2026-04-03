import { ChatGroq } from "@langchain/groq";
import { HumanMessage } from "@langchain/core/messages";
import dotenv from "dotenv";

dotenv.config();

const model = new ChatGroq({
    model: "llama-3.3-70b-versatile",
    temperature: 0.7,
    apiKey: process.env.GROQ_API_KEY
});

const response = await model.invoke([
    new HumanMessage("What is the difference between alligators and monitors?")
]);

console.log("The received response is: ", response.content);