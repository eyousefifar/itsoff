import { useState, useEffect } from "react";
import Header from "../header";

import Link from "next/link";
// import Router from "next/router";

import { Dialog } from "@material-ui/core";
import { APIClient } from "../../_api";
import Typography from "../../custom/typography";
import Button from "../../custom/button";

import useStyles from "./style";

const withLayout = (Page: any) => {
  // if (typeof window !== "undefined") {
  //   window.onbeforeunload = function () {
  //     sessionStorage.setItem("reload", "true");
  //     sessionStorage.setItem("link", `${window.location.pathname}${window.location.search}`);
  //   };
  // }

  return (props: any) => {
    const [open, setOpen] = useState<boolean>(false);
    useEffect(() => {
      APIClient.interceptors.response.use(
        response => {
          return response;
        },
        error => {
          console.log("Egferg", error.response.status);
          if (error.response.status === 401) setOpen(true);
          return Promise.reject(error);
        }
      );
    });
    const classes = useStyles();
    return (
      <>
        <Header />
        <Page {...props} />
        <Dialog fullWidth onClose={() => setOpen(false)} open={open}>
          <div className={classes.dialog}>
            <Typography variant="h6">{"ابتدا باید وارد شوید"}</Typography>
            <Button
              onClick={() => setOpen(false)}
              className={classes.btn}
              variant="contained"
              color="secondary"
            >
              {"متوجه شدم"}
            </Button>
            <Link href="/register" prefetch>
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
              >
                {"صفحه ورود"}
              </Button>
            </Link>
          </div>
        </Dialog>
      </>
    );
  };
};

export default withLayout;
