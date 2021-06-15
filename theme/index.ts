import { borderRadius } from "./style";

export default {
  direction: "rtl" as "rtl",
  typography: {
    fontFamily: "iranSanse"
  },
  palette: {
    primary: {
      main: "#7AC420",
      dark: "#7AB420",
      light: "#7AD420",
      contrastText: "#fff"
    },
    secondary: {
      main: "#EA0000",
      dark: "#DA0000",
      light: "#FA0000",
      contrastText: "#fff"
    }
  },
  shape: {
    borderRadius: borderRadius
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 330,
      md: 600,
      lg: 960,
      xl: 1280
    }
  }
};
