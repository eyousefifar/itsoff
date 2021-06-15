import { useEffect, useState } from "react";
import Link from "next/link";
import CircularProgress from "@material-ui/core/CircularProgress";

import Paper from "../../../custom/paper";
import Typography from "../../../custom/typography";
import Button from "../../../custom/button";

import useStyles from "./style";

import Chi from "../assets/svg/chi";

import { reserves } from "../api";

const Rules = (props: any) => {
  const classes = useStyles();

  const [user, setUser] = useState<any>({});
  const [price, setPrice] = useState<string>("");
  const [text, setText] = useState<string | undefined>(undefined);
  const [ok, setOk] = useState<boolean>(false);

  const verify = async (reqQuery: any) => {
    try {
      await reserves.payVerify(reqQuery);
      setText("با موفقیت انجام شد");
      setOk(true);
    } catch (error) {
      console.error(error);
      setText("با خطا مواجه شد");
      setOk(false);
    }
  };
  useEffect(() => {
    if (props.url.query && text === undefined) verify(props.url.query);
    let user3 = JSON.parse(
      decodeURIComponent(escape(atob(sessionStorage.getItem("user") as string)))
    );
    if (!user.uuid) setUser(user3);
    let price3 = atob(sessionStorage.getItem("price") as string);
    if (!price) setPrice(price3);
  });

  return (
    <Paper>
      <div className={classes.icon}>
        <Chi height="120" width="120" />
      </div>
      {!text ? (
        <div className={classes.icon}>
          <span className={classes.num}>
            <CircularProgress size="60px" color="inherit" />
          </span>
          <Typography>{"در حال دریافت اطلاعات..."}</Typography>
        </div>
      ) : (
        <>
          <div className={classes.icon}>
            <Typography variant="h6" align="center">
              {user.name}&nbsp;
              {"عزیز"}
            </Typography>
          </div>

          <div className={classes.icon}>
            <Typography variant="h6" align="center">
              {"پرداخت شما به مبلغ : "}
              <span className={classes.num}>{price}</span>
              {" تومان"}
            </Typography>
          </div>
          <div className={classes.icon}>
            <Typography variant="h6" align="center">
              <span className={ok ? classes.ok : classes.nok}>{text}</span>
            </Typography>
          </div>
          <Link href="/" prefetch>
            <Button
              size="large"
              variant="contained"
              fullWidth
              color="secondary"
            >
              {"بازگشت به خانه"}
            </Button>
          </Link>
        </>
      )}
    </Paper>
  );
};

export default Rules;
