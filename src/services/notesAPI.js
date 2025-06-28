import axios from "axios";

const API_URL = "https://qkqczxlsfugmjudovrdt.supabase.co/rest/v1/notes";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrcWN6eGxzZnVnbWp1ZG92cmR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwODM1OTAsImV4cCI6MjA2NjY1OTU5MH0.2x0m9ifabtqZhjbh2UiNyMAocnVEZ6AltoXhb9BNmtw";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const notesAPI = {
  async fetchNotes() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  async createNote(data) {
    const response = await axios.post(API_URL, data, { headers });
    return response.data;
  },

  async deleteNote(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },

  async updateNote(id, data) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, {
      headers,
    });
    return response.data;
  },
};
