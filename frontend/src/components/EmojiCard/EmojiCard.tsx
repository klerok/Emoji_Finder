import type { Emoji } from "../../types";
import styles from "./index.module.css";

type EmojiCardProps = {
  emoji: Emoji;
};

function EmojiCard({ emoji }: EmojiCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.card_symbol} role="img" aria-label={emoji.title}>
        {emoji.emoji}
      </span>
      <span className={styles.card_title}>{emoji.title}</span>
      <span className={styles.card_keywords}>{emoji.keywords}</span>
    </div>
  );
}

export default EmojiCard;
