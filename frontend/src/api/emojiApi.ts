import axios from "axios";
import type { Emoji } from "../types";

const API_URL = "http://localhost:3000/api/emojis";

export async function getEmojis(query: string): Promise<Emoji[]> {
  try {
    const params = query ? { q: query } : {};
    const response = await axios.get<Emoji[]>(API_URL, { params });
    return response.data;
  } catch (error) {
    console.error("Ошибка при запросе к API:", error);
    throw error;
  }
}
