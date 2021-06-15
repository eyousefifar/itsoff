import { makeStyles, createStyles } from "@material-ui/core/styles";

import { Primary } from "../../../color";

const useStyles = makeStyles(
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    line: {
      display: "inline-block",
      height: 1,
      width: "100%",
      opacity: 0.7,
      backgroundColor: (props: any) => props.color || Primary,
      margin: "0 6px"
    },
    container: {
      fontFamily: "iranSanse",
      opacity: 1,
      fontSize: 11,
      display: "inline-block",
      color: (props: any) => props.color || Primary,
      whiteSpace: "nowrap",
      padding: 8
    }
  })
);

export default useStyles;
