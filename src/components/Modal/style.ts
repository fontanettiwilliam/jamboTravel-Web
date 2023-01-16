import { styled } from "@/styles";

export const Overlay = styled("div", {
  position: "fixed",
  bottom: 0,
  left: 0,
  zIndex: 1,

  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",

  backgroundColor: "$overlay",
});

export const ModalBody = styled("div", {
  height: "50vh",
  width: "60vw",

  backgroundColor: "$white",
  border: 0,
  borderRadius: 16,

  padding: 20,

  overflowY: "scroll",
});

export const ModalHeader = styled("header", {
  width: "100%",
  height: 40,

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  marginBottom: 12,

  h1: {
    fontSize: 32,
    fontWeight: 500,
  },

  button: {
    border: 0,
    cursor: "pointer",
    margin: 0,
    padding: 0,

    transition: "color 0.5s",

    "&:hover": {
      color: "$alert",
    },
  },
});
