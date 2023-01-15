import { styled } from "..";

export const Main = styled("main", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  marginBottom: 50,
});

export const ExploreContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",

  width: "100%",
  maxWidth: 1100,

  img: {
    flex: 1,
  },

  div: {
    flex: 1,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: 20,

    h1: {
      fontWeight: 700,
      fontSize: 72,

      color: "$black",
    },

    p: {
      fontWeight: 400,
      fontSize: 28,

      color: "$black",

      maxWidth: "80%",
    },
  },
});

export const Button = styled("button", {
  backgroundColor: "$primary",
  borderRadius: 36,
  border: 0,
  width: "90%",
  height: 72,
  padding: 14,
  cursor: "pointer",

  span: {
    fontWeight: "bold",
    fontSize: 36,
    color: "$white",
  },

  transition: `filter 0.5s`,

  "&:hover": {
    filter: "brightness(0.8)",
  },
});
