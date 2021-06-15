import { makeStyles, createStyles } from "@material-ui/core/styles";
import { border, borderRadius } from "../../../../../theme/style";
import { orange } from "../../../../../color";

const useStyles = makeStyles(
  createStyles({
    listStyle: {
      padding: "4px",
      color: "#999499",
      fontSize: "12px"
    },
    listStyleSvg: {
      position: "relative",
      top: "4px",
      padding: "4px",
      color: "#999499",
      fontSize: "12px"
    },
    rowListArray: {
      display: "flex",
      flexDirection: "row",
      borderBottom: `${border} ${orange}`,
      cursor: "pointer"
    },
    ExpansionPanelSummaryRow: {
      padding: "0px 12px 0px 0px",
      minHeight: "unset !important",
      boxShadow: " rgba(0, 0, 0, 0.5) 0px 0px 3px 0px",
      borderRadius: borderRadius,
      "& div": {
        margin: "0 !important"
      }
    },

    ExpansionSvg: {
      position: "absolute",
      marginTop: "2px"
    },
    ExpansionTitle: { paddingRight: "15px", color: "#626166" }
  })
);

export default useStyles;
