import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Primary, defaultButton } from "../../../color";
import { borderRadius } from "../../../theme/style";

const useStyles = makeStyles(
  createStyles({
    root: {
      width: "100%",
      "&>div ": {
        border: `1px solid ${Primary}`
      },
      "&>.MuiExpansionPanel-rounded:last-child": {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
      },
      "&>.MuiExpansionPanel-rounded:first-child": {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
      },
      "& .MuiExpansionPanelDetails-root": {
        padding: "8px 6px"
      }
    },
    button: {
      backgroundColor: `${defaultButton} !important`,
      border: `1px solid ${Primary} !important`
    },
    input: {
      "& input": {
        fontFamily: "iranSanse",
        padding: "10px 35px 10px 10px",
        height: 20
      },
      "& .Mui-focused": {
        borderColor: "#000"
      },
      "& fieldset": {
        borderRadius: 30,
        borderColor: "#000"
      }
    },
    icon: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      right: 10
    },
    backet: {
      margin: "8px 6px 12px 6px",
      width: "calc(100vw - 28px)"
    },
    badage: {
      minHeight: 25,
      minWidth: 25,
      backgroundColor: defaultButton,
      color: Primary,
      borderRadius: borderRadius,
      display: "flex",
      textAlign: "center",
      justifyContent: "center"
    }
  })
);

export default useStyles;
