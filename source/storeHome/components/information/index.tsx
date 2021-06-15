import Grid from "@material-ui/core/Grid";
// import Divider from '@material-ui/core/Divider';
import Typography from "../../../../custom/typography";
import Button from "../../../../custom/button";
import Location from "./svg/location";
import PhoneCall from "./svg/phoneCall";
import Star from "./svg/star";

import useStyles from "./style";

const Error = () => {
  const classes = useStyles();

  return (
    <div className={classes.information}>
      <Grid item className={classes.title}>
        <Typography variant="body1"> کافه چی </Typography>
        <Typography variant="body1">%5</Typography>
      </Grid>
      <Grid
        direction="column"
        justify="center"
        alignItems="center"
        container
        className={classes.content}
      >
        <Grid
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          container
        >
          <Grid item xs={8}>
            <Typography
              variant="caption"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Location width={"15px"} height={"15px"} />
              قم نبش میدان جانبازان کافه چی
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            className={classes.btn}
            justify="flex-end"
            container
          >
            <Button variant="contained" color="secondary">
              <a href={"https://www.instagram.com/cofechi/"} target="_blank">
                اینستگرام
              </a>
            </Button>
          </Grid>
        </Grid>
        <Grid
          direction="row"
          justify="space-between"
          alignItems="center"
          container
        >
          <Grid item className={classes.ranking}>
            <Typography variant="body1">ساعات فعالیت :</Typography>
          </Grid>
          <Grid item className={classes.ranking}>
            <Typography variant="overline">امتیاز</Typography>

            <Typography
              variant="body1"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span className={classes.pointStar}>4.3</span>
              <span style={{ display: "flex", alignItems: "center" }}>
                <Star height={10} />
              </span>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          direction="row"
          justify="space-between"
          alignItems="center"
          container
        >
          <Grid item>
            <Typography variant="overline">شنبه تا پنج شنبه</Typography>
          </Grid>
          <Grid item>
            <Typography variant="overline">24:00 - 08:00</Typography>
          </Grid>
        </Grid>
        <Grid
          direction="row"
          justify="space-between"
          alignItems="center"
          container
        >
          <Grid item>
            <Typography variant="overline">جمعه و ایام تعطیل</Typography>
          </Grid>
          <Grid item>
            <Typography variant="overline">24:00 - 15:00</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container className={classes.fatherbtn}>
        <Grid
          item
          xs={6}
          className={classes.callbtn}
          justify="flex-end"
          container
        >
          <Button variant="contained" fullWidth>
            <a href={"tel:+982537840019"} className={classes.callLinkMap}>
              <PhoneCall width={"15px"} height={"15px"} />
              تماس
            </a>
          </Button>
        </Grid>
        <Grid
          item
          xs={6}
          className={classes.callbtnMap}
          justify="flex-end"
          container
        >
          <Button variant="contained" fullWidth>
            <a
              href={"https://goo.gl/maps/L4NwdbSC2ZjLVuVC7"}
              target="_blank"
              className={classes.callLinkMap}
            >
              <Location width={"15px"} height={"15px"} /> نقشه
            </a>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Error;
