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

  backgroundColor: "$white",
});
