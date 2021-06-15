import Button from "@material-ui/core/Button";
import useStyles from "../../style";

interface IProps {
  children: any;
}

export default (props: IProps) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <Button variant="contained" className={classes.myButton} fullWidth>
      {children}
    </Button>
  );
};
