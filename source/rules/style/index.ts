import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Primary, defaultColor, secondaryBackground } from "../../../color";
import { borderRadius, marginAndPadding_lg } from "../../../theme/style";

const useStyles = makeStyles(
  createStyles({
    paper: {
      borderRadius: borderRadius,
      color: Primary,
      background: secondaryBackground
    },
    content: {
      padding: marginAndPadding_lg,

      color: defaultColor
    }
  })
);

export default useStyles;
