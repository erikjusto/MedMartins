import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeCaseAndSuggestQuesitos = async (caseDescription: string) => {
  const systemInstruction = `
    Você é um Assistente Técnico Médico perito e experiente (Médico Perito).
    Seu objetivo é ajudar advogados ou clientes a entenderem a viabilidade técnica de um processo médico-judicial.
    
    Analise o breve relato do caso fornecido pelo usuário.
    1. Forneça uma breve análise técnica preliminar (viabilidade, pontos fortes/fracos).
    2. Sugira 3 "Quesitos" (perguntas técnicas) estratégicos que seriam importantes fazer ao perito oficial do juízo para defender o ponto de vista do cliente.
    
    Use linguagem profissional, jurídica e médica adequada, mas acessível.
    Mantenha a resposta concisa.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: caseDescription,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: {
              type: Type.STRING,
              description: "Uma análise concisa da viabilidade técnica do caso.",
            },
            suggestedQuestions: {
              type: Type.ARRAY,
              description: "Lista de 3 quesitos sugeridos.",
              items: {
                type: Type.OBJECT,
                properties: {
                  question: { type: Type.STRING, description: "O quesito técnico." },
                  reasoning: { type: Type.STRING, description: "Por que este quesito é estratégico." }
                }
              }
            }
          }
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Error calling Gemini:", error);
    throw error;
  }
};