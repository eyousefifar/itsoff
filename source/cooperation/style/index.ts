import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  borderRadius,
  border,
  marginAndPadding_lg
} from "../../../theme/style";
const useStyles = makeStyles(
  createStyles({
    flexBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "75vh"
    },
    Box: {
      border: border,
      borderRadius: borderRadius,
      marginBottom: marginAndPadding_lg,
      padding: marginAndPadding_lg
    },
    submitButton: {
      borderRadius: borderRadius
    }
  })
);

export default useStyles;
