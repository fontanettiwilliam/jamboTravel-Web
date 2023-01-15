import { styled } from "@/styles";

export const ItemContainer = styled("button", {
  border: 0,

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  gap: 8,

  cursor: "pointer",

  marginBottom: 12,

  img: {
    width: 50,
    height: 50,
    border: 0,
    borderRadius: 25,
  },

  div: {
    display: "flex",
    flexGrow: 2,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 4,

    strong: {
      fontSize: 24,
      fontWeight: "600",
    },

    span: {
      fontSize: 16,
      fontWeight: "400",
      color: "$gray",
    },
  },
});
