import { makeStyles, createStyles } from "@material-ui/styles";
import { secondary, defaultColor, Primary } from "../../../../../color";

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
      margin: 6,
      "& >img": {
        width: size
      }
    },
    line: {
      marginBottom: 6,
      marginTop: 8,
      color: defaultColor
    },
    comment: {
      textAlign: "right"
    },
    starBox: {
      "& *": {
        color: secondary,
        fill: secondary,
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
