import { ChangeEvent } from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "../../style";
import { Grid } from "@material-ui/core";
// import Icon from "../../assets/svg/search";

interface IProps {
  search: Function;
}

export default (props: IProps) => {
  const classes = useStyles();
  const { search } = props;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    search(event);
  };
  return (
    <Grid
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={6}
      className={classes.searchDiv}
      item
    >
      {/* <Icon className={classes.icon} /> */}
      <TextField
        className={classes.input}
        fullWidth
        placeholder="جستجو ... "
        variant="outlined"
        onChange={handleChange}
      />
    </Grid>
  );
};
