/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// VITE API Access
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
console.log(import.meta.env.VITE_GEMINI_API_KEY);


// React api
//   console.log(process.env.REACT_APP_GEMINI_API_KEY);
//   const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
//   console.log("apiKey"+apiKey);
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    
    return result.response.text();
  }
  
 export default run;