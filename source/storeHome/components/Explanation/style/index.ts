import { makeStyles, createStyles } from "@material-ui/core/styles";
import { mainTextColor } from "../../../../../color";
import {
  marginAndPadding_lg,
  marginAndPadding_sm
} from "../../../../../theme/style";

const useStyles = makeStyles(
  createStyles({
    information: {
      margin: `${marginAndPadding_sm} 0`,
      minHeight: 80,
      backgroundColor: "rgba(255,255,255)",
      color: mainTextColor,
      padding: marginAndPadding_sm,
      "&>div>div": {
        marginBottom: marginAndPadding_sm
      }
    },
    Contentinformation: {
      paddingRight: marginAndPadding_lg
    }
  })
);

export default useStyles;
