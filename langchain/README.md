# LangChain.js Basics

### What is LangChain?
LangChain is a powerful framework that helps you build applications using Large Language Models (LLMs) like OpenAI or Anthropic. It provides tools to connect these models to your own data and create complex workflows easily.

---

### Key Concepts

#### 1. Prompt Templates
Templates are like **"fill-in-the-blank"** forms for your AI. Instead of writing the same text again and again, you create a template with variables (like `{topic}`).
* **Why use it?** It makes your prompts reusable and keeps your code clean.

#### 2. The `.pipe()` Method
The `.pipe()` method is used to **chain** (connect) different components together.
* **Why use it?** It works like a pipeline. The output of the template goes into the model, and the model's output goes to the parser. No messy nested code!

#### 3. The `.invoke()` Method
The `.invoke()` method is the **action** command.
* **Why use it?** It tells the chain to actually start working. You pass your real data (like the specific topic) into this method.

---

### Simple Code Example (JavaScript)

```javascript
import { ChatPromptTemplate } from "@langchain/core/prompts";

// 1. Create a Template
const template = ChatPromptTemplate.fromTemplate(
  "Tell me a short joke about {topic}"
);

// 2. Setup the chain using .pipe()
const chain = template.pipe(model).pipe(outputParser);

// 3. Run the chain using .invoke()
// This replaces {topic} with "coding" and runs the whole thing
const result = await chain.invoke({
  topic: "coding"
});

console.log(result);