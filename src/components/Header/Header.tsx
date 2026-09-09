import SearchBar from "../SearchBar/SearchBar";
import styles from "./index.module.css";

type HeaderProps = {
  query: string;
  onQueryChange: (query: string) => void;
};

function Header({ query, onQueryChange }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>Emoji Finder</h1>
      <p className={styles.header_subtitle}>Find emoji by keywords</p>
      <SearchBar value={query} onChange={onQueryChange} />
    </header>
  );
}

export default Header;  
