
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getMassageAdvice = async (symptom: string) => {
  if (!API_KEY) return "Sistem saran saat ini tidak tersedia.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Pengguna mengeluhkan: "${symptom}". Berikan saran singkat (maksimal 3 poin) tentang jenis pijat apa yang cocok (Pijat Tradisional, Refleksi, atau Terapi Otot) dan satu tips perawatan diri di rumah. Berikan jawaban dalam Bahasa Indonesia yang ramah.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || "Mohon maaf, kami tidak dapat memproses permintaan Anda saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kesalahan saat menghubungi konsultan AI kami.";
  }
};
