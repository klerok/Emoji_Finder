import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import EmojiGrid from "./components/EmojiList/EmojiGrid";
import "./App.css";
import type { Emoji } from "./types";
import { getEmojis } from "./api/emojiApi";

function App() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchData() {
    setLoading(true);
    setError(null);
    try {
      const data = await getEmojis(searchTerm);
      setEmojis(data);
    } catch (error) {
      setError("не удалось загрузить данные");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="app">
      <Header query={searchTerm} onQueryChange={setSearchTerm} />
      <main className="results">
        {loading ? (
          <p className="loading">Загрузка…</p>
        ) : (
          <EmojiGrid emojis={emojis} query={searchTerm} />
        )}
      </main>
    </div>
  );
}

export default App;
