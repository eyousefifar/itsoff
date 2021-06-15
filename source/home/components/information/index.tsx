import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "../../../../custom/typography";
import useStyles from "./style";

const image = require("../../../../static/images/caffeChi.jpeg");

import LocationSvg from "../../assets/svg/location";
import { borderRadius, border } from "../../../../theme/style";
import { orange, starColor } from "../../../../color";
import Link from "next/link";

const Error = (props: any) => {
  const classes = useStyles();

  return (
    <Link href={props.link}>
      <div className={classes.information}>
        <Grid
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.flexcursor}
          container
        >
          <div className={classes.img}>
            <img style={{ width: "70px", borderRadius: "5px" }} src={image} />
          </div>

          <Grid
            direction="column"
            style={{
              width: "73%"
            }}
            justify="center"
            alignItems="center"
            container
          >
            <Grid
              direction="row"
              className={classes.flex}
              justify="space-between"
              alignItems="center"
              container
            >
              <Grid item>
                <Typography style={{fontSize: '12px'}}  variant="h6">
                  شهر تخفیف چی
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  style={{
                    color: "white",
                    background: `${orange}`,
                    border: `${border} ${orange}`,
                    borderRadius: borderRadius,
                    padding: "3px 6px 2px 6px",
                    fontSize: "12px",
                    marginTop: "4px",
                    display: "flex",
                    alignItems: "center"
                  }}
                  variant="caption"
                >
                  %8
                </Typography>
              </Grid>
            </Grid>
            <Grid
              direction="row"
              justify="space-between"
              alignItems="center"
              container
            >
              <Grid style={{ marginBottom: "9px" }} item>
                <span
                  style={{
                    position: "absolute",
                    marginTop: "2px",
                    height: "10px"
                  }}
                >
                  <LocationSvg width={12} height={12} />
                </span>
                <Typography
                  style={{
                    fontSize: "10px",
                    color: "#706f70",
                    margin: "0px 16px 5px 0px",
                    position: "abslute"
                  }}
                  variant="caption"
                >
                  قم - ابتدای صفاییه
                </Typography>
              </Grid>
              <Grid style={{ marginBottom: "2px" }} item>
                <Typography variant="caption">
                  4.3
                  <span style={{ fontSize: "12px", color: starColor }}>
                    &#9733;
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider style={{ background: `${orange}`}} />
        {/* <div className={classes.boxAddress}>
        <Typography variant="caption">
          {'آدرس : قم نبش میدان جانبازان (صفاییه) کافه چی'}
        </Typography>
      </div> */}
      </div>
    </Link>
  );
};

export default Error;
