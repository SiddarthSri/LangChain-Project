# LangChain Project

A learning project exploring LangChain capabilities for various use cases including document parsing (Word/PDF), browser automation, and AI integrations.

## 📋 Overview

This project is currently in **early stages** and serves as a foundation for experimenting with LangChain integrations. It demonstrates basic interactions with different AI models and will be expanded with more advanced features.

## 🚀 Current Features

- Basic chat interactions with **Gemini** (Google AI)
- Basic chat interactions with **Llama** (via Groq)
- Environment variable configuration for API keys
- TypeScript support

## 📝 Planned Features

- [ ] Word/PDF document parsing
- [ ] Basic browser automation
- [ ] Advanced prompt chaining
- [ ] Memory management
- [ ] Tool/function calling
- [ ] More LLM integrations

## 🛠️ Tech Stack

- **LangChain** - LLM framework
- **TypeScript** - Type-safe development
- **Groq** - Fast LLM inference (free tier)
- **Google Generative AI** - Gemini API
- **Node.js** - Runtime

## ⚙️ Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd LangChainProject
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API keys**
   Create a `.env` file in the project root:
   ```
   GOOGLE_API_KEY=your-gemini-key
   GROQ_API_KEY=your-groq-key
   ```

4. **Run agents**
   ```bash
   # Gemini agent
   npx tsx Agents/geminiAgent.ts

   # Groq/Llama agent
   npx tsx Agents/gorqAgent.ts
   ```

## 📂 Project Structure

```
LangChainProject/
├── Agents/
│   ├── geminiAgent.ts      # Gemini integration example
│   └── gorqAgent.ts        # Groq/Llama integration example
├── package.json
├── tsconfig.json
├── .env                    # API keys (not committed)
├── .gitignore
└── README.md
```

## 🎯 Next Steps

- Expand agent capabilities
- Add document parsing utilities
- Implement browser automation examples
- Create reusable agent patterns

## 📌 Notes

- This is a learning project and code may change frequently
- Free tier API limits apply
- Groq has more generous free tier limits than Gemini

## 📧 License

Personal learning project
