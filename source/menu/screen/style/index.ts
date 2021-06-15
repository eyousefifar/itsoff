import { makeStyles, createStyles } from "@material-ui/core/styles";
import { secondary } from "../../../../color";
import { borderRadius } from "../../../../theme/style";

const useStyles = makeStyles(
  createStyles({
    center: {
      color: secondary,
      textAlign: "center"
    },
    reserveButton: {
      borderRadius: borderRadius
    }
  })
);

export default useStyles;
