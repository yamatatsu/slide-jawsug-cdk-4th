import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Notes from "reveal.js/plugin/notes/notes.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";

import "./main.css";

const deck = new Reveal({
  plugins: [Markdown, Highlight, Notes],
  history: true,
});
deck.initialize();
