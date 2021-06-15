import { makeStyles, createStyles } from "@material-ui/core/styles";

import { defaultColor, Primary } from "../../../../../color";

const useStyles = makeStyles(
  createStyles({
    list: {
      margin: "0 10px",
      width: 300,
      padding: 0
    },
    fullHeight: {
      backgroundColor: defaultColor,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    link: {
      fontSize: 12,
      height: 20,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      padding: 8,
      whiteSpace: "nowrap"
    },
    item: {
      padding: 0
    },
    Aitem: {
      textDecoration: "none",
      color: Primary,
      padding: 0
    },
    Alink: {
      fontSize: 12,
      height: 20,
      display: "flex",
      justifyContent: "space-between",
      padding: 8,
      whiteSpace: "nowrap"
    },
    applicationInformation: {
      padding: "10px",
      textAlign: "center",
      fontSize: "12px",
      color: "#999e9b"
    },
    icon: {
      cursor: "pointer"
    }
  })
);

export default useStyles;
