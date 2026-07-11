import { GoogleGenerativeAI } from "@google/generative-ai";
import { VITE_GEMINI_KEY } from "./constants";
// Access your API key from environment variable
const genAI = new GoogleGenerativeAI(VITE_GEMINI_KEY);

export default genAI;
