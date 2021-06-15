import { makeStyles, createStyles } from "@material-ui/core/styles";
import { marginAndPadding_lg } from "../../../theme/style";

const useStyles = makeStyles(
  createStyles({
    Main: {
      display: "flex",
      justifyContent: "center"
    },
    marginbutton: { marginBottom: marginAndPadding_lg }
  })
);

export default useStyles;
