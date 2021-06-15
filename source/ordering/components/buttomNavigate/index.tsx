import Button from "@material-ui/core/Button";
import useStyles from "../../style";

interface IProps {
  children: any;
  onClick: any;
}

export default (props: IProps) => {
  const classes = useStyles();
  const { children, onClick } = props;

  return (
    <Button
      onClick={onClick}
      variant="contained"
      className={classes.myButton}
      fullWidth
    >
      {children}
    </Button>
  );
};
