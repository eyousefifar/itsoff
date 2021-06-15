import { createMuiTheme } from "@material-ui/core/styles";
import { PrimaryButton, defaultColor, secondaryButton } from "../../../color";
import { borderRadius } from "../../../theme/style";
const theme = createMuiTheme({
  palette: {
    secondary: {
      A100: secondaryButton,
      A200: secondaryButton,
      A400: secondaryButton,
      A700: secondaryButton
    },
    primary: {
      50: PrimaryButton,
      100: PrimaryButton,
      200: PrimaryButton,
      300: PrimaryButton,
      400: PrimaryButton,
      500: PrimaryButton,
      600: PrimaryButton,
      700: PrimaryButton,
      800: PrimaryButton,
      900: PrimaryButton,
      A100: PrimaryButton,
      A200: PrimaryButton,
      A400: PrimaryButton,
      A700: PrimaryButton
    }
  },
  overrides: {
    MuiButton: {
      root: {
        fontFamily: "iranSanse",
        fontSize: 12,
        borderRadius: borderRadius
      },
      containedPrimary: {
        border: 0,
        color: defaultColor
      },
      containedSecondary: {
        border: 0,
        color: defaultColor
      }
    }
  }
});

export default theme;
