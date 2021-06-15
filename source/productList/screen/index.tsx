import { Component } from "react";
import Styles from "./style";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/styles";

import { Scrollbars } from "react-custom-scrollbars";

import Link from "next/link";

import Paper from "../../../custom/paper";
import Button from "../../../custom/button";
import Typography from "../../../custom/typography";
import Title from "../../../library/title";
import ProductCart from "../../../library/productCart";

import Acc from "../components/accardion";
import Input from "../components/input";

import Shop from "../assets/svg/shoppingCart";

import { product, basket } from "../api";

interface IClasses {
  backet: string;
  badage: string;
  loader: string;
}

interface IBasket {
  uuid: string;
  count: number;
}

interface IState {
  basket: number;
  height: number;
  loading: boolean;
  showSearch: boolean;
  byCat: Array<IByCat>;
  searched: Array<IByCat>;
  myBasket: Array<IBasket>;
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
    this.getAllProduct();
    this.getMyBasket();
  }

  state: IState = {
    basket: 0,
    byCat: [],
    searched: [],
    myBasket: [],
    loading: true,
    showSearch: false,
    height: 269
  };

  setBasket = (basket: number) => {
    this.setState({ basket });
  };

  getMyBasket = async () => {
    try {
      const { data } = await basket.getBasket();
      let count = 0;
      let myBasket = data.map((basket: any) => {
        count += basket.count;
        return { uuid: basket.Product.uuid, count: basket.count };
      });
      this.setState({ myBasket, basket: count });
    } catch (error) {
      console.error(error);
    }
  };

  getAllProduct = async () => {
    try {
      const { data } = await product.getAllSellerProduct();
      let byCat: Array<any> = [],
        index: number;
      const returnProduct = (product: IByProduct) => {
        return {
          desc: product.desc,
          image: product.image,
          isLiked: Boolean(Number(product.isLiked)),
          like: Number(product.like),
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
      this.setState({ byCat, searched: byCat, loading: false });
    } catch (error) {
      console.error(error);
    }
    product;
  };

  expandSet = (e: boolean) => {
    let el = document.querySelector("#Expansion"),
      { height } = this.state;
    if (!!el) {
      height = e ? 269 + el.clientHeight : 269;
      this.setState({ height });
    }
  };

  scroll = (id: string) => {
    let el = document.getElementById(id);
    if (!!el) {
      el.scrollIntoView();
    }
  };

  search = (e: any) => {
    if (e.target.value.length) {
      let patt = new RegExp(e.target.value),
        data = [...this.state.byCat],
        searched: Array<IByCat> = [];
      data.forEach(cat => {
        cat.productList.forEach(pro => {
          if (patt.test(pro.name)) {
            let index = searched.findIndex(i => i.uuid === cat.uuid);
            if (index < 0) {
              searched.push({
                name: cat.name,
                uuid: cat.uuid,
                productList: [pro]
              });
            } else {
              searched[index].productList.push(pro);
            }
          }
        });
      });
      this.setState({ searched });
    } else {
      this.setState({ searched: this.state.byCat });
    }
  };

  render() {
    const { basket, myBasket, loading, height, searched } = this.state;
    const { classes } = this;

    return (
      <div>
        <Paper>
          <Input search={this.search} />
          <Acc isExpanded={this.expandSet} scroll={this.scroll} />
          <Scrollbars
            autoHide
            autoHideDuration={900}
            style={{
              height: `calc(100vh - ${height}px)`,
              direction: "ltr",
              marginTop: 10
            }}
          >
            {loading ? (
              <div className={classes.loader}>
                <CircularProgress size="70px" color="inherit" />
                <div className="hello"></div>
              </div>
            ) : null}
            {searched.map(l => (
              <div
                id={l.uuid}
                style={{ direction: "rtl", paddingBottom: "15px" }}
                key={l.uuid}
              >
                <Title label={l.name} />
                <Grid container>
                  {l.productList.map(product => (
                    <Grid
                      key={product.uuid}
                      item
                      xs={6}
                      sm={6}
                      md={6}
                      lg={3}
                      xl={3}
                    >
                      <ProductCart
                        uuid={product.uuid}
                        myBasket={myBasket}
                        name={product.name}
                        price={product.price}
                        description={product.desc}
                        isliked={product.isLiked}
                        likes={product.like}
                        image={product.image}
                        getMyBasket={this.getMyBasket}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            ))}
          </Scrollbars>
        </Paper>
        {basket > 0 ? (
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Link href="/cart">
              <Button
                className={classes.backet}
                variant="contained"
                color="secondary"
                fullWidth
              >
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={2}
                  item
                >
                  <Grid item>
                    <Typography style={{ padding: "5px 0px" }}>
                      {"مشاهده سبد خرید"}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Shop width={20} />
                  </Grid>
                  {basket > 0 ? (
                    <Grid item>
                      <div className={classes.badage}>
                        <span>{basket}+</span>
                      </div>
                    </Grid>
                  ) : null}
                </Grid>
              </Button>
            </Link>
          </Grid>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default withStyles(Styles)(Product);
