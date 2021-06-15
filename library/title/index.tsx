import useStyles from "./style";

interface ITitle {
  label: string;
  color?: string;
}

const Title = (props: ITitle) => {
  const { label, color } = props;
  const classes = useStyles({ color });
  return (
    <div className={classes.root}>
      <span className={classes.line} />
      <span className={classes.container}>{label}</span>
      <span className={classes.line} />
    </div>
  );
};

export default Title;
