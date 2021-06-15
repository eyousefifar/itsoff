import { makeStyles, createStyles } from "@material-ui/core/styles";

import { defaultColor } from "../../../../../color";
import { borderRadius } from "../../../../../theme/style";

const size = 60;

const useStyles = makeStyles(
  createStyles({
    header: {
      padding: 8,
      color: defaultColor,
      backgroundImage: "url(../../../static/images/warmgradient.jpg)",
      backgroundSize: "cover"
      // transform: 'rotate(45deg)'

      // backgroundColor: orange
    },
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
    button: {
      fontSize: 10,
      marginTop: 50,
      color: "#ffffff",
      fontFamily: "iranSanse",
      backgroundColor: "rgba(255,255,255,0.3)",
      borderRadius: borderRadius,
      padding: "1px 8px"
    },
    Fatherbutton: {
      display: "flex",
      justifyContent: "flex-end"
    }
  })
);

export default useStyles;
