import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Primary, defaultButton, defaultColor } from "../../../color";
import { borderRadius, border } from "../../../theme/style";

const useStyles = makeStyles(
  createStyles({
    root: {
      width: "100%",
      "&>div ": {
        border: `${border} ${Primary}`
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
      border: `${border} ${Primary} !important`
    },
    input: {
      "& input": {
        width: "100%",
        fontFamily: "iranSanse",
        boxShadow: " 0px 0px 2px -1px grey",
        borderRadius: borderRadius,
        padding: "10px 35px 10px 10px",
        height: 30,
        zIndex: "-100"
        // border: 'solid 1px #b5b2b1'
      },
      "& .Mui-focused": {
        // borderColor: '#000'
      },
      "& fieldset": {
        borderRadius: borderRadius
        // borderColor: '#000'
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
    },
    searchDiv: {
      width: "95%",
      paddingLeft: "10px",
      ["@media (min-width:780px)"]: {
        width: "48.1%"
      },
      position: "fixed",
      top: 10,
      zIndex: 9999,
      background: defaultColor
    }
  })
);

export default useStyles;
