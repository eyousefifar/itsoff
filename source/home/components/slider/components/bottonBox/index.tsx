import { Grid, Typography } from "@material-ui/core";

interface IProps {
  classes: IClass;
  icon: string;
  text: string;
  other?: any;
}
interface IClass {
  grid: string;
  image: string;
  text: string;
}

export default (props: IProps) => {
  const { classes, icon, text, ...other } = props;
  return (
    <Grid
      {...other}
      direction="column"
      justify="center"
      alignItems="center"
      container
      className={classes.grid}
    >
      <Grid item>
        <img className={classes.image} src={icon} />
      </Grid>
      <Grid item>
        <Typography className={classes.text} variant="caption">
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};
