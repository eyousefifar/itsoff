import Button from "@material-ui/core/Button";
import Back from "./assets/svg/back";
import useStyles from "./style";

interface IProps {
  inverse?: boolean;
  color?: string;
}

export default (props: IProps) => {
  const classes = useStyles();
  const { inverse, color } = props;
  return (
    <Button
      style={inverse ? { backgroundColor: "", borderColor: "" } : undefined}
      onClick={() => window.history.back()}
      className={classes.button}
      // variant="outlined"
    >
      <div></div>
      <Back fill={color} />
    </Button>
  );
};
