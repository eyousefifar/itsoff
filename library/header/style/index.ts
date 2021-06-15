import { makeStyles, createStyles } from "@material-ui/core/styles";
import { orange, defaultColor } from "../../../color";

const useStyles = makeStyles(
  createStyles({
    defaultHeader: {
      display: "flex",
      justifyContent: "space-between",
      // padding: 8,
      width: "100vw",
      position: "fixed",
      zIndex: 100,
      background: defaultColor
    },
    header: {
      display: "flex",
      justifyContent: "space-between",

      paddingRight: "8px",
      position: "fixed",
      zIndex: 100,

    },
    orangeHeader: {
      display: "flex",
      justifyContent: "space-between",

      position: "fixed",
      zIndex: 100,
      background: orange,
      width: "100vw"
    },
    humber: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "unset",
      width: "36px",
      height: "36px",
      // backgroundColor/: 'red',
      marginTop: 10
    },

    discountButton: {
      border: "1px solid",
      borderColor: orange,
      padding: "4px ",
      fontSize: "12px",
      margin: "14px 0 0px 14px",
      color: `${orange}`,
      borderRadius: "5px",
      position: "absolute" as "absolute",
      left: 0,
      cursor: "pointer"
    },
    headerdiv: {
      width: "98%",
      display: "flex",
      justifyContent: "space-between",

      padding: "2px 0",
      ["@media (min-width:780px)"]: {
        width: "92%",
        margin: "auto"
      }
    },
    headermaindiv: {
      width: "100vw",
      display: "flex",
      height: 0,
      justifyContent: "space-between",
      padding: "6px 0"
    },
    subdefaultHeader: {
      display: "flex",
      justifyContent: "space-between",
      // padding: 8,
      height: 42,

      zIndex: -1,
      background: defaultColor
    },
    subheader: {
      display: "flex",
      justifyContent: "space-between",

      paddingRight: "8px",
      height: 70,
      zIndex: -1
    },
    suborangeHeader: {
      display: "flex",
      justifyContent: "space-between",
      height: 70,

      padding: 8,
      position: "relative",
      zIndex: -1,
      background: orange
    }
  })
);

export default useStyles;
