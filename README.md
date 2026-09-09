# Emoji Finder

Search through 1820 emoji by name or keyword. Built with React, TypeScript and Vite.

Click any card to copy the emoji to the clipboard.

## Scripts

```bash
npm run dev      # start the dev server
npm run build    # type-check and build to dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Structure

```
src/
  components/    Header, SearchBar, EmojiGrid, EmojiCard (each with its own CSS)
  data/          emojiList.ts — source list of emoji
  types.ts       Emoji type
```
