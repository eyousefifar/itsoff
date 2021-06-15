import React, { useState, useContext } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";

import DrawerList from "./components/drawerList";
import DrawerHeader from "./components/drawerHeader";
import ReturnButton from "./components/returnButton";
import PopUp from "../../source/home/components/popup";

import { defaultColor, Primary } from "../../color";

import { setAuthToken } from "../../_api";
import { getProfile } from "./api";

import Menu from "./assets/svg/menu";

import useStyles from "./style";
import Axios from "axios";
import { Grid } from "@material-ui/core";

interface IUser {
  address?: string;
  bday?: Date;
  image?: string;
  name?: string;
  phone?: string;
  story?: string;
  updatedAt?: Date;
  username?: string;
  uuid?: string;
}
export const AppContext = React.createContext<any>({ get: "" });

const Header = () => {
  const [state, setState] = useState({
    right: false
  });

  const [user, setUser] = useState<IUser>({});
  const [image, setImage] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const getMe = async () => {
    try {
      const { data } = await getProfile();
      setUser(data);
      let user = btoa(unescape(encodeURIComponent(JSON.stringify(data))));
      if (data.image) getImage(data);
      sessionStorage.setItem("user", user);
    } catch (error) {
      console.error(error);
      localStorage.removeItem("Auth");
      setAuthToken("");
    }
  };

  const context = useContext(AppContext);
  context.get = getMe;

  const getImage = async (user: IUser) => {
    try {
      const { data } = await Axios.get(user.image as string, {
        responseType: "arraybuffer"
      });
      let img = new Buffer(data, "binary").toString("base64");
      sessionStorage.setItem("img", img);
      setImage(img);
    } catch (error) {
      console.error(error);
    }
  };

  if (typeof localStorage !== "undefined") {
    let Auth = localStorage.getItem("Auth");
    let users = sessionStorage.getItem("user");
    let img3 = sessionStorage.getItem("img");
    if (img3 && !image) {
      setImage(img3);
    }
    if (!Auth) {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("img");
    } else {
      setAuthToken(Auth);
    }
    if (Auth && !user.uuid && !users) {
      getMe();
    } else if (users && !user.uuid) {
      let user3 = JSON.parse(decodeURIComponent(escape(atob(users))));
      setUser(user3);
    }
  }

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setState({ ...state, right: open });
  };

  const classes = useStyles();
  let path = "/";
  if (typeof window !== "undefined") {
    path = window.location.pathname;
  }

  const openPop = () => {
    setOpen(true);
  };
  ///////////////
  return (
    <>
      <Grid
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        className={
          path === "/profile"
            ? classes.orangeHeader
            : path === "/register" || path === "/"
            ? classes.header
            : classes.defaultHeader
        }
        item
      >
        <div
          className={path === "/" ? classes.headermaindiv : classes.headerdiv}
        >
          <PopUp setOpen={setOpen} open={open} />
          <Button  className={classes.humber} onClick={toggleDrawer(true)}>
            <Menu
              fill={
                path === "/register" || path === "/profile" ? defaultColor : ""
              }
            />
          </Button>
          <img
            src={user.image}
            style={{ overflow: "hidden", height: 0, width: 0 }}
          />

          <SwipeableDrawer
            anchor="right"
            open={state.right}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <DrawerHeader user={user} image={image || null} />
            <DrawerList user={user} />
          </SwipeableDrawer>
          {path !== "/" && path !== "/reserves/verify" ? (
            <ReturnButton
              inverse={path === "/location"}
              color={
                path === "/register" || path === "/profile"
                  ? defaultColor
                  : Primary
              }
            />
          ) : (
            <div className={classes.discountButton}>
              <span onClick={() => openPop()}>کد خرید</span>
            </div>
          )}
        </div>
      </Grid>
      {path !== "/register" && (
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          className={
            path === "/profile"
              ? classes.suborangeHeader
              : path === "/"
              ? classes.subheader
              : classes.subdefaultHeader
          }
        ></Grid>
      )}
    </>
  );
};

export default Header;
