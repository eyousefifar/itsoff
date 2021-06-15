import { Component } from "react";
import Styles from "./style";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/styles";

import Link from "next/link";

import Paper from "../../../custom/paper";
import Button from "../../../custom/button";
import Typography from "../../../custom/typography";
import Title from "../../../library/title";
import ProductCart from "../../../library/productCart";

import { product } from "../api";
import { defaultColor } from "../../../color";
interface IClasses {
  backet: string;
  badage: string;
  loader: string;
  center: string;
  ButtonPosition: string;
}

interface IState {
  loading: boolean;
  showSearch: boolean;
  byCat: Array<IByCat>;
}

interface IByCat {
  name: string;
  uuid: string;
  productList: Array<IByProduct>;
}

interface IByProduct {
  desc: string;
  image: string;
  isLiked: boolean;
  like: number;
  name: string;
  status: boolean;
  price: number;
  uuid: string;
}

class Product extends Component {
  classes: IClasses;
  constructor(props: any) {
    super(props);
    this.classes = props.classes;
  }

  componentDidMount() {
    this.getMyProduct();
  }

  state: IState = {
    byCat: [],
    loading: true,
    showSearch: false
  };

  getMyProduct = async () => {
    try {
      const { data } = await product.getMyProduct();
      let byCat: Array<any> = [],
        index: number;
      const returnProduct = (product: IByProduct) => {
        return {
          desc: product.desc,
          image: product.image,
          isLiked: Boolean(Number(product.isLiked)),
          like: Number(product.like),
          status: Boolean(product.status),
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
      this.setState({ byCat, loading: false });
    } catch (error) {
      console.error(error);
    }
    product;
  };

  render() {
    const { loading, byCat } = this.state;
    const { classes } = this;

    return (
      <div>
        <Paper style={{ paddingBottom: 80 }}>
          {loading ? (
            <div className={classes.loader}>
              <CircularProgress size="70px" color="inherit" />
            </div>
          ) : byCat.length ? null : (
            <div className={classes.center}>
              <Typography variant="caption">{"محصولی ثبت نشده"}</Typography>
            </div>
          )}
          {byCat.map(l => (
            <div id={l.uuid} style={{ direction: "rtl" }} key={l.uuid}>
              <Title label={l.name} />
              <Grid container>
                {l.productList.map(product => (
                  <Grid
                    key={product.uuid}
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={4}
                    xl={4}
                  >
                    <ProductCart
                      getMyProduct={this.getMyProduct}
                      uuid={product.uuid}
                      name={product.name}
                      price={product.price}
                      description={product.desc}
                      isliked={product.isLiked}
                      likes={product.like}
                      image={product.image}
                      status={product.status}
                      forSeller
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
          ))}
        </Paper>
        <Link href="/addProduct">
          <div style={{ position: "fixed" }} className={classes.ButtonPosition}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              style={{ background: defaultColor, padding: "20px 0 " }}
            >
              <Button fullWidth variant="contained" color="secondary">
                <Typography>{"افزودن محصول"}</Typography>
              </Button>
            </Grid>
          </div>
        </Link>
      </div>
    );
  }
}

export default withStyles(Styles)(Product);
