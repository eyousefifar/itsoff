import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Link from "next/link";

import useStyles from "./style";

import Back from "./assets/svg/back";
import Phone from "./assets/svg/phone";
import Chrome from "./assets/svg/chrome";
import Email from "./assets/svg/email";
import Router from "next/router";

interface IUser {
  address?: string;
  isSeller?: boolean;
  bday?: Date;
  image?: string;
  name?: string;
  phone?: string;
  story?: string;
  updatedAt?: Date;
  username?: string;
  uuid?: string;
}

interface IProps {
  user: IUser;
}

const DrawerList = (props: IProps) => {
  const { user } = props;
  let menu = [];
  if (!user.isSeller) {
    menu = [
      { id: 1, title: "شهر تخفیف", href: "/" },

      { id: 3, title: "تماس با پشتیبانی", href: "tel:+982537840019" },
      { id: 13, title: " درخواست همکاری", href: "/cooperation" },
      { id: 12, title: " آموزش نحوه‌ی خرید", href: "/profile" },
      { id: 4, title: "درباره ما", href: "/rules" }
    ];
  } else {
    menu = [
      { id: 1, title: "شهر تخفیف", href: "/" },

      { id: 100, title: "کد خرید من", href: "/" },
      { id: 3, title: "تماس با پشتیبانی", href: "tel:+982537840019" },
      { id: 13, title: " درخواست همکاری", href: "/cooperation" },
      { id: 12, title: " آموزش نحوه‌ی خرید", href: "/profile" },
      { id: 4, title: "درباره ما", href: "/rules" }
    ];
  }
  const logOut = async () => {
    localStorage.removeItem("Auth");
    if (typeof window !== "undefined") {
      Router.replace("/register");
    }
    window.location.reload();
  };
  const classes = useStyles();
  return (
    <div className={classes.fullHeight}>
      <List className={classes.list}>
        {menu.map(menuItem => (
          <span key={menuItem.id}>
            {menuItem.id === 2 || menuItem.id === 3 ? (
              <a className={classes.Aitem} href={menuItem.href} target="_blank">
                <span className={classes.Alink}>
                  {menuItem.title}
                  <Back />
                </span>
              </a>
            ) : (
              <ListItem button className={classes.item}>
                <Link href={menuItem.href} prefetch>
                  <span className={classes.link}>
                    {menuItem.title}
                    <Back />
                  </span>
                </Link>
              </ListItem>
            )}

            <Divider />
          </span>
        ))}

        {user.isSeller ? (
          <span>
            <ListItem button className={classes.item}>
              <span
                className={classes.link}
                onClick={() => {
                  logOut();
                }}
              >
                {"خروج"}
                <Back />
              </span>
            </ListItem>

            <Divider />
          </span>
        ) : (
          ""
        )}
      </List>
      <span className={classes.applicationInformation}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "6px"
          }}
        >
          <span className={classes.icon}>
            <Phone />
          </span>
          <span className={classes.icon}>
            <Chrome />
          </span>{" "}
          <span className={classes.icon}>
            <Email />
          </span>
        </div>
        <div>version: 1.0.0</div>
      </span>
    </div>
  );
};

export default DrawerList;
