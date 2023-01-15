import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      primary: "#14B1C6",
      primaryVariant: "#63C9D5",
      secondary: "#5BBA47",
      secondaryVariant: "#9BCF82",
      warning: "#FDBA33",
      alert: "#EE2C61",
      black: "#000000",
      white: "#FEFEFE",
      gray: "#808080",
      overlay: "rgba(0,0,0,0.4)",
    },
  },
});
