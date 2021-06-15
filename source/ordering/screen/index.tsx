// import { useState } from "react";
import Link from "next/link";

import useStyles from "../style";
import Grid from "@material-ui/core/Grid";

import Paper from "../../../custom/paper";
import Button from "../../../custom/button";
// import Typography from "../../../custom/typography";
import Title from "../../../library/title";

import Acc from "../components/accardion";
import Table from "../components/table";
import Navfor from "../components/buttomNavigate/button";
import PlusMinus from "../components/plusMinus";

// import Shop from "../assets/svg/shoppingCart";

const list = [
  {
    id: 1,
    name: "موکا",
    price: 10000,
    description: "قهوه شکر خامه",
    isliked: false,
    likes: 45
  },
  {
    id: 2,
    name: "موکا",
    price: 11000,
    description: "قهوه شکر خامه",
    isliked: false,
    likes: 45
  },
  {
    id: 3,
    name: "موکا",
    price: 12000,
    description: "قهوه شکر خامه",
    isliked: false,
    likes: 43
  },
  {
    id: 4,
    name: "موکا",
    price: 13000,
    description: "قهوه شکر خامه",
    isliked: false,
    likes: 40
  },
  {
    id: 5,
    name: "موکا",
    price: 14000,
    description: "قهوه شکر خامه",
    isliked: false,
    likes: 45
  },
  {
    id: 6,
    name: "موکا",
    price: 15000,
    description: "قهوه شکر خامه",
    isliked: false,
    likes: 54
  },
  {
    id: 7,
    name: "موکا",
    price: 16000,
    description: "قهوه شکر خامه",
    isliked: false,
    likes: 10
  },
  {
    id: 8,
    name: "موکا",
    price: 17000,
    description: "قهوه شکر خامه",
    isliked: false,
    likes: 45
  },
  {
    id: 9,
    name: "موکا",
    price: 18000,
    description: "قهوه شکر خامه",
    isliked: false,
    likes: 3
  },
  {
    id: 10,
    name: "موکا",
    price: 19000,
    description: "قهوه شکر خامه",
    isliked: false,
    likes: 33
  },
  {
    id: 11,
    name: "موکا",
    price: 20000,
    description: "قهوه شکر خامه",
    isliked: false,
    likes: 90
  },
  {
    id: 12,
    name: "موکا",
    price: 21000,
    description: "قهوه شکر خامه",
    isliked: false,
    likes: 87
  }
];

const Ordering = () => {
  const classes = useStyles();

  return (
    <div className={classes.panel}>
      <Table />
      <Paper>
        <Title label="تعیین سفارش" />
        <Acc />
        <Title label="پیشنهاد کافه چی" />
        <Grid spacing={1} container item>
          {list.map(product => (
            <Grid key={product.id} item xs={6} sm={4} md={3} lg={2} xl={1}>
              <Navfor>
                <div className={classes.textbtn}>{product.name}</div>
                <PlusMinus />
              </Navfor>
            </Grid>
          ))}
        </Grid>
        <Title label="صبحانه" />
        <Grid spacing={1} container item>
          {list.map(product => (
            <Grid key={product.id} item xs={6} sm={4} md={3} lg={2} xl={1}>
              <Navfor>
                <div className={classes.textbtn}>{product.name}</div>
                <PlusMinus />
              </Navfor>
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Link href="/factor" prefetch>
          <Button fullWidth className={classes.backet} color="primary">
            {"مشاهده فاکتور"}
          </Button>
        </Link>
      </Grid>
    </div>
  );
};

export default Ordering;
