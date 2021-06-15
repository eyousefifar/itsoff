import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  createStyles({
    dialog: {
      height: 100,
      textAlign: "center",
      padding: "20px 0"
    },
    btn: {
      margin: "30px 5px 0 5px"
    }
  })
);

export default useStyles;
