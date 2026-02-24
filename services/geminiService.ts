
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCropAdvice = async (cropType: string, variety: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Proporciona 3 consejos breves y profesionales para el cultivo de ${cropType} (variedad: ${variety || 'estándar'}). Los consejos deben centrarse en riego, suelo y prevención de plagas.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              topic: { type: Type.STRING, description: "Tema del consejo (ej. Riego)" },
              advice: { type: Type.STRING, description: "Descripción del consejo" }
            },
            required: ["topic", "advice"]
          }
        },
      },
    });

    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("Error al obtener consejos de cultivo:", error);
    return [];
  }
};
