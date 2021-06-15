import { makeStyles, createStyles } from "@material-ui/core/styles";

import theme from "../../../../../theme";
import {
  borderRadius,
  border,
  marginAndPadding_lg
} from "../../../../../theme/style";

const useStyles = makeStyles(
  createStyles({
    listStyle: {
      marginTop: marginAndPadding_lg
    },
    carousel: {
      borderRadius: borderRadius
    },
    textBtn: {
      backgroundColor: "#fff",
      color: theme.palette.secondary.main,
      marginBottom: marginAndPadding_lg,
      marginTop: 28
    },
    text: {
      whiteSpace: "nowrap",
      width: "80px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "block"
    },
    firstColumn: {
      width: 108
    },
    flicity: {
      width: "100%",
      borderRadius: borderRadius,
      overflow: "hidden"
    },
    flicityImg: {
      height: '25vh',
      borderRadius: borderRadius,
      width: "98%",
      position: "relative",
      "& img": {
        height: "96%",
        border: border,
        boxShadow: "rgba(0, 0, 0, 0.5) 0px 0px 3px 0px",
        position: "absolute",
        borderRadius: borderRadius,
        top: "50%",
        left: "52%",
        transform: "translate(-50% , -50%)",
        width: "96%"
      },
      "&.is-selected>img": {
        zIndex: 2
      }
    },
    btn: {
      backgroundColor: "#fff",
      padding: 0,
      "&:hover": {
        backgroundColor: "rgba(255,255,255,0.9)"
      }
    },
    image: {
      height: 45,
      width: 45
    },
    logo: {
      height: 70,
      width: 70
    },
    grid: {
      width: 100,
      height: 100,
      padding: marginAndPadding_lg
    }
  })
);

export default useStyles;
