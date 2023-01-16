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

export const CityContainer = styled("div", {
  marginTop: 180,
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  gap: 20,

  width: "100%",
  maxWidth: 1100,

  ".cityInfo": {
    flex: 1,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: 8,

    ".title": {
      fontWeight: 700,
      fontSize: 36,
      color: "$black",
    },

    ".subtitle": {
      fontWeight: 500,
      fontSize: 24,
      color: "$gray",
    },

    ".information": {
      fontWeight: 400,
      fontSize: 16,
      color: "$gray",
      maxWidth: "90%",
    },
  },

  ".imageBox": {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 400,

    position: "relative",
  },

  ".overlay": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "$overlay",
    borderRadius: 16,
  },

  img: {
    width: "100%",
    height: "100%",
    border: 0,
    borderRadius: 16,
  },
});

export const CurrentWeather = styled("div", {
  width: "100%",

  position: "absolute",
  bottom: 0,
  left: 0,
  zIndex: 1,

  padding: 20,

  strong: {
    fontWeight: 500,
    fontSize: 32,
    color: "$white",
  },
});

export const DegreesDisplay = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 8,

  span: {
    fontWeight: 500,
    fontSize: 28,
    color: "$white",
  },
});

export const DailyWeatherContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 8,
});

export const DailyWeatherActions = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: 8,

  button: {
    border: 0,
    fontWeight: 500,
    fontSize: 20,
    color: "$primary",
    cursor: "pointer",

    transition: `color 0.5s`,

    "&:hover": {
      color: "$secondary",
    },

    "&.clear": {
      color: "$alert",
    },

    "&.clear:hover": {
      color: "$warning",
    },
  },
});

export const DailyWeatherDisplay = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 4,
  padding: 4,

  border: "1px solid $black",
  borderRadius: 8,

  backgroundColor: "transparent",

  ".dailyWeather": {
    fontWeight: 500,
    fontSize: 20,
    color: "$black",
  },
});

export const FormSelectDate = styled("form", {
  padding: 20,
  height: "35vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  input: {
    height: 40,
    width: "100%",

    border: "1px solid $black",
    borderRadius: 6,

    fontSize: 20,
    color: "$black",

    padding: "16px 8px",
  },

  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 8,
  },

  button: {
    padding: "8px 24px",
    color: "$white",
    fontWeight: "bold",
    fontSize: 32,

    cursor: "pointer",

    backgroundColor: "$primary",

    border: 0,
    borderRadius: 50,

    transition: `filter 0.5s`,

    "&:not(:disabled):hover": {
      filter: "brightness(0.8)",
    },

    "&:disabled": {
      opacity: 0.7,
      cursor: "not-allowed",
    },

    "&.cancel": {
      backgroundColor: "transparent",
      border: "1px solid $alert",
      color: "$alert",
    },
  },
});
