import Paper from "@material-ui/core/Paper";
import useStyles from "./style";

interface IPaper {
  children: any;
  className?: any;
  ref?: any;
  style?: any;
}

export default (props: IPaper) => {
  const { children, className, ref, style } = props;
  const classes = useStyles();
  return (
    <Paper style={style} ref={ref} className={` ${className} ${classes.paper}`}>
      {children}
    </Paper>
  );
};
