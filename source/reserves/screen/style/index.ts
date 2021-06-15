import { makeStyles, createStyles } from "@material-ui/core/styles";
import { secondary } from "../../../../color";
import { green, red } from "@material-ui/core/colors";

const useStyles = makeStyles(
  createStyles({
    icon: {
      textAlign: "center",
      margin: 20
    },
    num: {
      color: secondary
    },
    ok: {
      color: green[500]
    },
    nok: {
      color: red[500]
    }
  })
);

export default useStyles;
