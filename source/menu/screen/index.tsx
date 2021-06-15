import { useState, useEffect } from "react";
import { Grid, Divider, CircularProgress } from "@material-ui/core";

import useStyle from "./style";

import Paper from "../../../custom/paper";
import Button from "../../../custom/button";
import Typography from "../../../custom/typography";
import Title from "../../../library/title";

import { product } from "../api";
import Link from "next/link";

interface IByCat {
  name: string;
  uuid: string;
  productList: Array<IByProduct>;
}

interface IByProduct {
  name: string;
  price: number;
  uuid: string;
}

const Menu = () => {
  const classes = useStyle();

  const [cat, setCat] = useState<Array<IByCat>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!cat.length && loading) {
      getAllProduct();
    }
  });

  const getAllProduct = async () => {
    try {
      const { data } = await product.getAllSellerProduct();
      let byCat: Array<IByCat> = [],
        index: number;
      const returnProduct = (product: IByProduct) => {
        return {
          name: product.name,
          price: product.price,
          uuid: product.uuid
        };
      };
      data.data.forEach((element: any) => {
        index = byCat.findIndex(cat => {
          return cat.uuid === element.Categore.uuid;
        });
        if (index < 0) {
          byCat.push({
            name: element.Categore.name,
            uuid: element.Categore.uuid,
            productList: [returnProduct(element)]
          });
        } else {
          byCat[index].productList.push(returnProduct(element));
        }
      });
      setCat(byCat);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Paper>
        {loading ? (
          <div className={classes.center}>
            <CircularProgress color="inherit" size="70px" />
          </div>
        ) : (
          cat.map(category => (
            <div key={category.uuid}>
              <Title label={category.name} />
              {category.productList.map((pro, index) => (
                <span key={Math.random()}>
                  <Grid
                    style={{ padding: "0 8px" }}
                    container
                    justify="space-between"
                    key={pro.uuid}
                  >
                    <Grid item>
                      <Typography variant="caption">{pro.name}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption">{pro.price}</Typography>
                    </Grid>
                  </Grid>
                  {category.productList.length - 1 !== index ? (
                    <Divider />
                  ) : null}
                </span>
              ))}
            </div>
          ))
        )}
      </Paper>

      <Link href="/checkout" prefetch>
        <Button fullWidth color="secondary" className={classes.reserveButton}>
          رزرو
        </Button>
      </Link>
    </>
  );
};

export default Menu;
