import styles from './index.module.css'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className={styles.search}>
      <input
        type="search"
        className={styles.search_input}
        placeholder="Search emoji"
        aria-label="Search emoji by keywords"
        autoComplete="off"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar
