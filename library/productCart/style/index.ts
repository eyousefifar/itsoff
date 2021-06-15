import { makeStyles, createStyles } from "@material-ui/core/styles";
import { defaultColor, PrimaryBackground, Primary } from "../../../color";

const useStyles = makeStyles(
  createStyles({
    paper: {
      backgroundColor: PrimaryBackground,
      color: defaultColor,
      textAlign: "center",
      flexGrow: 1
    },
    mask: {
      width: 80,
      height: 80,
      margin: "0 auto 5px auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    image: {
      maxWidth: "100%",
      maxHeight: "100%"
    },
    like: {
      width: 20
    },
    likeSection: {
      color: "#E30000",
      fontFamily: "iranSanseL",
      fontSize: 9,
      fontWeight: 100,
      "&>span": {
        marginLeft: 5
      },
      "&>svg": {
        cursor: "pointer"
      }
    },
    texts: {
      fontSize: 10,
      marginBottom: 10
    },
    desc: {
      fontSize: 9,
      marginBottom: 5,
      maxWidth: "100%",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    },
    unit: {
      fontSize: 9,
      marginRight: 5
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
