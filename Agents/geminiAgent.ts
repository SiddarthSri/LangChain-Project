import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage } from "@langchain/core/messages";
import dotenv from "dotenv";

dotenv.config();

const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.0-flash",
    temperature: 0.7,
    apiKey: process.env.GOOGLE_API_KEY
});

const response = await model.invoke([
    new HumanMessage("What is the Difference between alligators and Monitors?")
]);

console.log("The received response is : ", response.content);