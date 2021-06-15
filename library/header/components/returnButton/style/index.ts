import { makeStyles, createStyles } from "@material-ui/core/styles";

import { defaultColor } from "../../../../../color";

const useStyles = makeStyles(
  createStyles({
    button: {
      fontFamily: "iranSanse",
      color: defaultColor,
      display: "flex",
      justifyContent: "flex-end",
      padding: " 0  0 0  13px"
    }
  })
);

export default useStyles;
