import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  secondaryBackground,
  defaultColor,
  Primary
} from "../../../../../color";
import {
  marginAndPadding_lg,
  border,
  marginAndPadding_sm
} from "../../../../../theme/style";

const useStyles = makeStyles(
  createStyles({
    information: {
      margin: `0`,
      minHeight: 80,
      backgroundColor: "rgba(255,255,255)"
    },
    boxAddress: {
      marginTop: marginAndPadding_lg,
      maxWidth: "100%"
    },
    title: {
      backgroundColor: secondaryBackground,
      padding: marginAndPadding_lg,
      borderRadius: "5px 5px 0px 0px",
      display: "flex",
      justifyContent: "space-between",
      color: defaultColor,
      fontWeight: "bolder"
    },
    content: {
      borderRadius: "0px 0px 5px 5px",
      padding: marginAndPadding_lg,
      border: border,
      borderTop: "0px"
    },
    btn: {
      display: "flex",
      paddingTop: marginAndPadding_sm,
      "& > button": {
        background:
          "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
        filter:
          " progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 )",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        "& >span>span": {
          margin: "0 !important",
          "& > a": {
            textDecoration: "none",
            color: defaultColor
          }
        }
      }
    },

    ranking: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around"
    },

    pointStar: {
      color: Primary,
      fontSize: "14px",
      marginRight: marginAndPadding_lg,
      display: "flex",
      alignItems: "center"
    },
    callbtn: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0px 0px 0px 3px !important",

      "& > button": {
        background: defaultColor,
        display: "flex",
        justifyContent: "center",
        border: border,
        "& >span>span": {
          margin: "0 !important",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          "& > a": {
            textDecoration: "none",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            color: Primary
          }
        }
      }
    },
    callbtnMap: {
      display: "flex",
      padding: "0px 3px 0px 0px !important",
      "& > button": {
        background: defaultColor,
        display: "flex",
        justifyContent: "center",
        border: border,
        "& >span>span": {
          margin: "0 !important",
          width: "100%",
          display: "flex",
          justifyContent: "center",

          "& > a": {
            textDecoration: "none",

            justifyContent: "center",
            color: Primary,
            width: "100%"
          }
        }
      }
    },
    fatherbtn: {
      margin: `${marginAndPadding_lg}  0`,
      display: "flex",
      justifyContent: "space-between"
    },
    callLinkMap: {
      display: "flex",
      alignItems: "center"
    }
  })
);

export default useStyles;
