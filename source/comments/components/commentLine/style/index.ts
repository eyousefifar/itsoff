import { makeStyles, createStyles } from "@material-ui/styles";
import {
  defaultColor,
  Primary,
  backgroundGray,
  starColor
} from "../../../../../color";
import { marginAndPadding_sm } from "../../../../../theme/style";

const size = 60;

const useStyles = makeStyles(
  createStyles({
    mask: {
      width: size,
      height: size,
      borderRadius: size,
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: 7,
      "& >img": {
        width: size
      }
    },
    line: {
      marginBottom: marginAndPadding_sm,
      marginTop: marginAndPadding_sm,
      color: defaultColor,
      padding: marginAndPadding_sm
    },
    comment: {
      textAlign: "right",
      background: backgroundGray,
      color: Primary
    },
    starBox: {
      "& *": {
        color: Primary,
        fill: starColor,
        alignItems: "center",
        display: "flex"
      }
    },
    commentName: {
      "& *": {
        color: Primary
      }
    }
  })
);

export default useStyles;
