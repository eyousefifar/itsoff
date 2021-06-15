import Grid from "@material-ui/core/Grid";

import Typography from "../../../../custom/typography";

import useStyles from "./style";

const Error = () => {
  const classes = useStyles();

  return (
    <div className={classes.information}>
      <Grid item>
        <Typography variant="body2">توضیحات: </Typography>
      </Grid>

      <Grid
        direction="row"
        justify="space-between"
        alignItems="center"
        container
        className={classes.Contentinformation}
      >
        <Typography variant="caption">
          مجموعه #کافه #چی همواره برا رسیدن به تنها هدف خود که همانا ایجاد محیطی
          مناسب برای استراحت هرچند کوتاه در بطن شلوغی های شهر قم بوده تلاش کرده
        </Typography>
      </Grid>
    </div>
  );
};

export default Error;
