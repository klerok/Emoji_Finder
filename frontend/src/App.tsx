import {useState } from "react";
import Header from "./components/Header/Header";
import EmojiGrid from "./components/EmojiList/EmojiGrid";
import emojiList from "./data/emojiList";
import "./App.css";


function App() {
  const [query, setQuery] = useState("");
  const search = query.trim().toLowerCase();
  const results = emojiList.filter(
    (e) =>
      e.title.toLowerCase().includes(search) ||
      e.keywords.some((k) => k.includes(search))
  );

  return (
    <div className="app">
      <Header query={query} onQueryChange={setQuery} />
      <main className="results">
        <EmojiGrid emojis={results} query={query} />
      </main>
    </div>
  );
}

export default App;
