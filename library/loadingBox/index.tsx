import useStyles from "./style";

import CircularProgress from "@material-ui/core/CircularProgress";

interface ITitle {
  color?: string;
  children?: any;
  loading: boolean;
}

const Title = (props: ITitle) => {
  const { children, loading, color } = props;
  const classes = useStyles({ color });
  return (
    <div className={classes.root}>
      {loading ? (
        <>
          <div className={classes.loading}>
            <CircularProgress size="80px" color="inherit" />
          </div>
          <span className={classes.colored} />
        </>
      ) : null}
      <div>{children}</div>
    </div>
  );
};

export default Title;
