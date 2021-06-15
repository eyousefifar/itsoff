import Grid from "@material-ui/core/Grid";
import useStyles from "../style/index";
import InfoBox from "../components/information";
import ListBox from "../components/slider";
import Comments from "../components/comments";

import Explanation from "../components/Explanation";

// import Router from 'next/router';
// function CheckoutRouter() {
//   Router.push('/checkout');
// }

const Error = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.Main}>
        <Grid xs={11} sm={11} md={10} lg={10} xl={10} item>
          <div className={classes.marginbutton}>
            <ListBox />
          </div>
          <div>
            <InfoBox />
          </div>
          {/* <Button
            fullWidth
            background={secondaryBackground}
            fontColor={defaultColor}
            // onClick={() => CheckoutRouter()}
          >
            سفارش آنلاین
          </Button> */}
          <Explanation />
          <Comments />
        </Grid>
      </div>
    </div>
  );
};

export default Error;
