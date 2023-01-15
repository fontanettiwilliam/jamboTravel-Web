import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",

  padding: "2rem 0",
  width: "100%",
  maxWidth: 1100,
  margin: "0 auto",

  img: {
    alignSelf: "flex-start",
  },

  div: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 12,
    flexDirection: "row",

    span: {
      color: "$gray",
      cursor: "pointer",
      fontWeight: "400",
      fontSize: 20,

      transition: `filter 0.5s, opacity 0.5s`,

      "&:hover": {
        filter: "brightness(0.8)",
      },

      "&.active": {
        color: "$black",
        fontWeight: "bold",
      },

      "&.active:hover": {
        opacity: 0.5,
        cursor: "not-allowed",
      },
    },

    button: {
      backgroundColor: "transparent",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: "4px 16px",
      cursor: "pointer",

      border: "1px solid $black",
      borderRadius: 50,

      color: "$black",
      fontWeight: "bold",
      fontSize: 16,

      transition: `border-color 0.5s, color 0.5s`,

      "&:hover": {
        borderColor: "$primary",
        color: "$primary",
      },
    },
  },
});
