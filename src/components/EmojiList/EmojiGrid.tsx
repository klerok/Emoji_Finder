import type { Emoji } from '../../types'
import EmojiCard from '../EmojiCard/EmojiCard'
import styles from './index.module.css'

type EmojiGridProps = {
  emojis: Emoji[]
  query: string
}

function EmojiGrid({ emojis, query }: EmojiGridProps) {
  if (emojis.length === 0) {
    return (
      <p className={styles.grid_empty}>
        No emoji found for <b>{query.trim()}</b>
      </p>
    )
  }

  return (
    <ul className={styles.grid}>
      {emojis.map((emoji) => (
        <li key={emoji.title}>
          <EmojiCard emoji={emoji} />
        </li>
      ))}
    </ul>
  )
}

export default EmojiGrid
