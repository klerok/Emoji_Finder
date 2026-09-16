import { useEffect, useState } from "react";
import type { Emoji } from "../../types";
import styles from './index.module.css'

type EmojiCardProps = {
  emoji: Emoji;
};

function EmojiCard({ emoji }: EmojiCardProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1200);
    return () => clearTimeout(timer);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(emoji.symbol);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      className={styles.card}
      onClick={handleCopy}
      title={`Copy ${emoji.symbol} to clipboard`}
    >
      <span className={styles.card_symbol} role="img" aria-label={emoji.title}>
        {emoji.symbol}
      </span>
      <span className={styles.card_title}>{emoji.title}</span>
      <span className={styles.card_keywords}>{emoji.keywords.join(", ")}</span>
      <span className={styles.card_copied} aria-live="polite">
        {copied ? "Copied!" : ""}
      </span>
    </button>
  );
}

export default EmojiCard;
