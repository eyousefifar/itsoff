import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Primary,
  defaultButton,
  secondaryBackground,
  PrimaryBackground,
  defaultColor
} from "../../../color";
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
    myButton: {
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
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: PrimaryBackground,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 12,
      color: defaultColor
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
    box: {
      fontSize: 12,
      padding: "8px 12px",
      whiteSpace: "nowrap"
    },
    panel: {
      backgroundColor: secondaryBackground,
      marginTop: -50,
      paddingTop: 50,
      paddingBottom: 60,
      minHeight: "calc(100vh - 107px)"
    },
    textbtn: {
      minWidth: 200,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    },
    buttonAdd: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& div": {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        "&:last-child": {
          justifyContent: "flex-end"
        }
      },
      "& span": {
        color: Primary,
        width: 30
      }
    }
  })
);

export default useStyles;
