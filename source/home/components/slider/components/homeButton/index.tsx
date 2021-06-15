import Button from "@material-ui/core/Button";
import useStyles from "../../style";

interface IProps {
  onClick?: any;
  children: any;
}

const HomeBtn = (props: IProps) => {
  const classes = useStyles({});
  const { children, onClick } = props;
  return (
    <Button variant="text" onClick={onClick} className={classes.btn}>
      {children}
    </Button>
  );
};

export default HomeBtn;
