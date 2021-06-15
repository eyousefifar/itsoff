// import { useState } from "react";
import useStyles from "../style";
import Grid from "@material-ui/core/Grid";

import Paper from "../../../custom/paper";
import Button from "../../../custom/button";
// import Typography from "../../../custom/typography";
import Title from "../../../library/title";

import Navfor from "../components/buttomNavigate";
import PlusMinus from "../components/plusMinus";
import Typography from "../../../custom/typography";

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

const Product = () => {
  const classes = useStyles();

  return (
    <div className={classes.panel}>
      <Paper>
        <Title label="فاکتور" />
        <Grid spacing={1} container item>
          {list.map(product => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Navfor>
                <div className={classes.textbtn}>
                  <span>{product.name}</span>
                  <span>{product.price}</span>
                </div>
                <PlusMinus />
              </Navfor>
            </Grid>
          ))}
        </Grid>
      </Paper>
      <div className={classes.backet}>
        <span>
          <Typography variant="h6">{" 55000 تومان"}</Typography>
        </span>
        <Button color="secondary">{"تایید سفارش"}</Button>
      </div>
    </div>
  );
};

export default Product;
