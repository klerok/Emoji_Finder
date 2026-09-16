export type Emoji = {
  /** The emoji character itself, e.g. "💯" */
  symbol: string
  /** Short name, e.g. "100" */
  title: string
  /** Lowercase search words, without duplicates */
  keywords: string[]
}
