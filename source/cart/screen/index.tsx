import { Component, createRef, RefObject } from "react";
import moment from "moment-jalaali";
import Styles from "./style";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/styles";
import TextField from "../../../custom/textField";

import Paper from "../../../custom/paper";
import Button from "../../../custom/button";
import Typography from "../../../custom/typography";
import Title from "../../../library/title";
import ProductCart from "../../../library/productCart";
import Rich from "../assets/svg/rich";

import { basket, discount } from "../api";
import { secondary } from "../../../color";

interface IClasses {
  backet: string;
  badage: string;
  end: string;
  center: string;
  discount: string;
}

interface IBasket {
  uuid: string;
  count: number;
}

interface ITabel {
  uuid: string;
  name: string;
  floor: number;
  capacity: number;
  price: number;
}

interface IState {
  loading: boolean;
  href: string;
  AllPrice: number;
  products: Array<IByProduct>;
  myBasket: Array<IBasket>;
  discounted: number;
  discountedPrice: number;
  loadingDiscount: boolean;
  discountCode: string;
}

interface IByProduct {
  desc: string;
  image: string;
  isLiked: boolean | undefined;
  like: number | undefined;
  name: string;
  price: number;
  uuid: string;
}

interface IDateTime {
  at: number;
  date: string;
  time: string;
}

class Product extends Component<any, IState> {
  private classes: IClasses;
  private tabel: ITabel;
  private dateTime: IDateTime;

  constructor(props: any) {
    super(props);
    this.classes = props.classes;
    if (typeof window !== "undefined") {
      this.tabel = JSON.parse(
        decodeURIComponent(
          escape(window.atob(sessionStorage.getItem("table") as string))
        )
      );
      this.dateTime = JSON.parse(
        atob(sessionStorage.getItem("dateTime") as string)
      );
    } else {
      this.tabel = {
        uuid: "",
        name: "",
        floor: 0,
        capacity: 0,
        price: 0
      };
      this.dateTime = {
        at: 0,
        date: "",
        time: ""
      };
    }
  }

  componentDidMount() {
    this.getMyBasket();
  }

  private link: RefObject<HTMLAnchorElement> = createRef();

  state: IState = {
    loading: false,
    href: "",
    products: [],
    myBasket: [],
    AllPrice: 0,
    discounted: 0,
    discountedPrice: 0,
    loadingDiscount: false,
    discountCode: ""
  };

  private getMyBasket = async () => {
    try {
      const { data } = await basket.getBasket();
      let AllPrice = this.tabel.price;
      let products: Array<IByProduct> = [];
      let myBasket = data.map((bas: any) => {
        AllPrice += bas.price;
        products.push({
          desc: bas.Product.desc,
          image: bas.Product.image,
          isLiked: undefined,
          like: undefined,
          name: bas.Product.name,
          price: bas.Product.price,
          uuid: bas.Product.uuid
        });
        return { uuid: bas.Product.uuid, count: bas.count };
      });
      await this.setState({ myBasket, products, AllPrice });
    } catch (error) {
      console.error(error);
    }
  };

  handlePay = async () => {
    this.setState({ loading: true });
    let sendData = {
      seller: process.env.SELLER_ID,
      tabel: this.tabel.uuid,
      at: this.dateTime.at,
      day: this.dateTime.date,
      discountCode: this.state.discountCode
    };
    try {
      const { data } = await basket.pay(sendData);
      sessionStorage.setItem("price", btoa(String(data.data.data.totalPrice)));
      await this.setState({ href: data.data.link });
      if (this.link.current) this.link.current.click();
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  };

  validateDiscount = async (e: any) => {
    this.setState({ loadingDiscount: true });

    try {
      let { value } = e.target;
      let discounted = 0,
        discountedPrice;

      if (value.length === 6) {
        const data = await discount.validate_Discount(value);
        discounted = this.state.AllPrice * (data.data / 100);
        discountedPrice = this.state.AllPrice - discounted;
        this.setState({ discountedPrice, loadingDiscount: false });
        if (data.status === 200) {
          await this.setState({ discountCode: value });
        }
      } else if (e.target.value.length < 6) {
        discounted = 0;
        this.setState({ discountedPrice: this.state.AllPrice });
        this.setState({ loadingDiscount: false });
      } else if (value.length > 6) {
        let elevenVal = value.slice(0, 6);
        e.target.value = elevenVal;
      }
    } catch (error) {
      console.error(error);

      this.setState({ loadingDiscount: false });
    }
  };

  render() {
    moment.loadPersian();
    const {
      products,
      myBasket,
      AllPrice,
      loading,
      loadingDiscount,
      discountedPrice,
      href
    } = this.state;
    const { classes } = this;
    const [to, from] = this.dateTime.time.split("-");
    return (
      <div>
        <a ref={this.link} type="hidden" href={href} />
        <Paper>
          <Title label="اطلاعات رزرو" />
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid
              className={classes.center}
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              xl={1}
            >
              {"تاریخ :"}
              {moment(this.dateTime.date).isValid()
                ? moment(this.dateTime.date).format("LL")
                : ""}
            </Grid>
            <Grid
              className={classes.center}
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              xl={1}
            >
              {"ساعت :"}
              {from}
              {" الی "}
              {to}
            </Grid>

            <Grid
              className={classes.center}
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              xl={1}
            >
              {"مکان :"}
              {this.tabel.name}
            </Grid>
            <Grid
              className={classes.center}
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              xl={1}
            >
              {"مبلغ :"}
              {this.tabel.price}
              {"تومان "}
            </Grid>
          </Grid>
          {!products.length ? null : <Title label="سبد خرید" />}
          <Grid container>
            {products.map(product => (
              <Grid key={product.uuid} item xs={6} sm={4} md={3} lg={2} xl={1}>
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
        </Paper>
        <Grid
          className={classes.discount}
          container
          direction="row"
          alignItems="center"
        >
          <Grid xs={6} item>
            <div className={classes.badage}>
              {discountedPrice > 0 ? (
                <>
                  {loadingDiscount && (
                    <CircularProgress size={20} color={"secondary"} />
                  )}
                  <span>{discountedPrice}</span>&nbsp;
                  <Typography variant="caption">تومان</Typography>
                </>
              ) : (
                <>
                  <span>{AllPrice}</span>&nbsp;
                  <Typography variant="caption">تومان</Typography>
                </>
              )}
            </div>
          </Grid>
          <Grid style={{ padding: "0px " }} xs={6} item>
            <TextField
              name="discount"
              margin="normal"
              fullWidth
              label="کد تخفیف"
              type="text"
              onChange={this.validateDiscount}
            />
          </Grid>
        </Grid>
        <Grid
          className={classes.end}
          container
          direction="row"
          alignItems="center"
        >
          <Grid xs={12} item>
            <Button
              loading={loading}
              fullWidth
              className={loading ? classes.backet : ""}
              onClick={this.handlePay}
              variant="contained"
              color="secondary"
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
                  <Rich fill={loading ? secondary : ""} width={20} />
                </Grid>
                <Grid item>
                  <Typography> پرداخت </Typography>
                </Grid>
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(Styles)(Product);
