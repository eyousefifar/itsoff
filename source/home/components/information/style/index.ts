import { makeStyles, createStyles } from "@material-ui/core/styles";
import { borderRadius, border } from "../../../../../theme/style";

const useStyles = makeStyles(
  createStyles({
    information: {
      width: "98%",
      // margin: "6px 0",
      height: 82,
      marginBottom: 6,
      marginTop: 6,
      backgroundColor: "rgba(255,255,255)",
      borderRadius: borderRadius,
      cursor: "pointer",
      margin: "auto",
      // padding: 10,
      "&>div>div": {
        marginBottom: 6
      }
    },
    flexcursor: {
      display: "flex",
      cursor: "pointer"
    },
    flex: { display: "flex" },
    boxAddress: {
      marginTop: 10,
      maxWidth: "100%",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    },
    img: {
      width: "70px",
      height: "70px",
      borderRadius: borderRadius,
      // padding: '2px',
      border: border,
      borderColor: "#999499"
    },
    myButton: {
      color: "#f7690a"
    }
  })
);

export default useStyles;
