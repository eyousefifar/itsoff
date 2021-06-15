import { makeStyles, createStyles } from "@material-ui/core/styles";
import { secondary } from "../../../color";

const useStyles = makeStyles(
  createStyles({
    root: {
      position: "relative"
    },
    colored: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255,255,255,0.6)",
      zIndex: 10
    },
    loading: {
      zIndex: 11,
      position: "absolute",
      color: (props: any) => props.color || secondary,
      top: "50%",
      left: "50%",
      transform: "translate(-50% , -50%)"
    }
  })
);

export default useStyles;
