import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import User from "./assets/svg/user";
import useStyles from "./style";

import Edit from "../../assets/svg/edit";

import Typography from "../../../../custom/typography";

interface IProps {
  user: IUser;
  image?: any;
}

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

const DrawerHeader = (props: IProps) => {
  const classes = useStyles();
  const { user, image } = props;
  return (
    <div className={classes.header}>
      <Grid
        direction="row"
        justify="space-between"
        alignItems="center"
        container
      >
        <Grid item xs={3}>
          <div className={classes.mask}>
            {image ? <img src={`data:image/*;base64,${image}`} /> : <User />}
          </div>
        </Grid>
        <Grid item xs>
          <Grid
            direction="column"
            justify="center"
            alignItems="flex-start"
            container
          >
            <Grid item xs>
              <Typography noWrap variant="caption">
                {user.name || "نام شما"}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="caption" noWrap>
                {user.phone || "تلفن همراه شما"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Link href={user.uuid ? "/profile" : "/register"} prefetch>
            <div className={classes.Fatherbutton}>
              <Button variant="contained" className={classes.button}>
                {user.uuid ? <Edit /> : "ثبت نام / ورود"}
              </Button>
            </div>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default DrawerHeader;
