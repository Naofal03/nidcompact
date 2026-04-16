import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const TOPIC = process.env.TOPIC ?? "AI trends today";

async function generateContent(): Promise<void> {
  if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY environment variable is not set");
  }

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `Write a short blog article about: "${TOPIC}".

Return ONLY valid MDX content (no code fences) in exactly this format:

---
title: "Your Article Title Here"
date: "${new Date().toISOString().split("T")[0]}"
excerpt: "A one-sentence summary of the article."
---

## Introduction

[2-3 paragraphs of content]

## Key Points

- Point one
- Point two
- Point three

## Conclusion

[1-2 paragraphs wrapping up]

Requirements:
- Title should be compelling and specific to the topic
- Excerpt should be one sentence, under 160 characters
- Body should be informative and engaging
- Use proper MDX/Markdown formatting
- Do not include any code fences or backticks around the whole response`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  const today = new Date().toISOString().split("T")[0];
  const outputDir = path.join(process.cwd(), "content", "posts");
  const outputPath = path.join(outputDir, `${today}.mdx`);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  if (fs.existsSync(outputPath)) {
    console.warn(`⚠️  Content for ${today} already exists at ${outputPath}. Skipping.`);
    return;
  }

  fs.writeFileSync(outputPath, text, "utf8");
  console.log(`✅ Content written to ${outputPath}`);
}

generateContent().catch((err: Error) => {
  console.error("❌ Error generating content:", err.message);
  process.exit(1);
});
