import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Primary } from "../../../color";
import { borderRadius } from "../../../theme/style";

const useStyles = makeStyles(
  createStyles({
    paper: {
      borderRadius: borderRadius,
      padding: 8,
      color: Primary,
      margin: 6
    }
  })
);

export default useStyles;
