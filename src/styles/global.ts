import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: "$white",
    color: "$black",
    "-webkit-font-smoothing": "antialiased",
    overflowX: "hidden",
  },

  "body, input, textarea, button, span, strong": {
    fontFamily: "Quicksand, sans-serif",
    fontWeight: 400,
  },
});
