import React from "react";
import App from "next/app";
import Router from "next/router";
import { CircularProgress, Grid } from "@material-ui/core";
import Typography from "../custom/typography";
import { secondary, defaultColor } from "../color";

const list = [
  "accept",
  "addProduct",
  "cart",
  "category",
  "checkout",
  "comments",
  "factor",
  "holiday",
  "location",
  "menu",
  "myProductList",
  "ordering",
  "orders",
  "myFavorites",
  "productList",
  "profile",
  "register",
  "reserves",
  "rules",
  "tabel",
  "timing"
];
class MyApp extends App {
  state = {
    loading: true
  };

  async componentDidMount() {
    if (typeof window !== "undefined") {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then(registration => {
            console.log(
              "service worker registration successful",
              registration.scope
            );
          })
          .catch(err => {
            console.warn("service worker registration failed", err.message);
          });
      }
      // if (localStorage !== undefined) {
      //   let Auth = localStorage.getItem("Auth");
      //   if (!Auth) {
      //     Router.replace("/register");
      //   }
      // }
      if (list.indexOf(window.location.pathname.slice(1)) > -1) {
        let link = `${window.location.pathname}${window.location.search}`;
        this.setState({ loading: true });
        await Router.replace("/");
        await Router.replace(link as string);
        this.setState({ loading: false });
      } else {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;
    const { loading } = this.state;
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Grid xs={12} sm={12} md={6} lg={6} xl={6} item>
          <div style={loading ? { height: "100vh", overflow: "hidden" } : {}}>
            {loading ? (
              <div
                style={{
                  position: "fixed",
                  zIndex: 1000,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  color: secondary,
                  right: 0,
                  backgroundColor: defaultColor
                }}
              >
                <CircularProgress color="inherit" size="90px" />
                <Typography variant="h5">{"در حال بارگذاری..."}</Typography>
              </div>
            ) : null}

            <Component {...pageProps} url={router} />
          </div>
        </Grid>
      </div>
    );
  }
}

export default MyApp;
