import { useState, useEffect } from "react";
// import Grid from "@material-ui/core/Grid";
// import Dialog from "@material-ui/core/Dialog";

import {
  Grid,
  Dialog,
  DialogActions,
  DialogTitle
  // CircularProgress
} from "@material-ui/core";

import {
  Primary,
  defaultButton,
  secondary,
  secondaryButton
} from "../../color";

import Typography from "../../custom/typography";
import Button from "../../custom/button";
import Paper from "../../custom/paper";

// import Typography from "../../custom/typography";

import useStyles from "./style";
import Like from "./assets/svg/like";
import Delete from "./assets/svg/delete";
import Rich from "./assets/svg/bagPlus";
// import Close from "./assets/svg/close";

// import Bag from "./assets/svg/bag";
import Plus from "./assets/svg/plus";
import Minus from "./assets/svg/minus";
import Edit from "./assets/svg/edit";

import LoadingBox from "../loadingBox";

import { reserve, like as sendLike, bookmark, product } from "./api";
import Link from "next/link";

interface IProduct {
  uuid?: string;
  image: string;
  name: string;
  price: number;
  description: string;
  isliked: boolean | undefined;
  likes: number | undefined;
  getMyBasket?: any;
  myBasket?: any;
  forSeller?: boolean;
  status?: boolean;
  getMyProduct?: any;
}

interface IBasket {
  uuid: string;
  count: number;
}

const debonce = 800;

const Product = (props: IProduct) => {
  const {
    name,
    price,
    description,
    image,
    isliked,
    likes,
    uuid,
    getMyBasket,
    myBasket,
    forSeller,
    status,
    getMyProduct
  } = props;
  const [like, setLike] = useState<number | undefined>(likes);
  const [time, setTime] = useState<any>(null);
  const [isBasket, setIsBasket] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean | undefined>(isliked);
  const [loading, setLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);
  const [state, setState] = useState<boolean | undefined>(status);
  const [count, setCount] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const classes = useStyles();

  useEffect(() => {
    if (myBasket && myBasket.length) {
      let j = myBasket.find((el: IBasket) => {
        return el.uuid === uuid;
      });
      if (j && !isBasket) {
        setIsBasket(true);
        setSelected(true);
        setCount(j.count);
      }
    }
  });

  const settingCount = (abc: number) => {
    clearTimeout(time);
    if (abc === 0) {
      setSelected(false);
      removeFromBasket();
    } else {
      setCount(abc);
      let time1 = setTimeout(() => {
        addToBasket(abc);
      }, debonce);
      setTime(time1);
    }
  };

  const settingBasket = () => {
    let time1 = setTimeout(() => {
      addToBasket(1);
    }, debonce);
    setTime(time1);
    setSelected(true);
  };

  const handleLike = async () => {
    setLiked(!liked);
    if (liked && typeof like === "number") {
      setLike(like - 1);
    } else if (typeof like === "number") {
      setLike(like + 1);
    }
    try {
      await sendLike.toggleLike(uuid as string);
      await bookmark.toggleBookmark({ product: uuid as string });
    } catch (error) {
      console.error(error);
      setLiked(!liked);
      if (liked && typeof like === "number") {
        setLike(like - 1);
      } else if (typeof like === "number") {
        setLike(like + 1);
      }
    }
  };

  const addToBasket = async (count: number) => {
    setLoading(true);
    try {
      await reserve.pushBasket(uuid as string, { count });
      getMyBasket();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const removeFromBasket = async () => {
    setLoading(true);
    try {
      await reserve.popBasket(uuid as string);
      getMyBasket();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const deleteProduct = async () => {
    try {
      await product.deleteProduct(uuid as string);
      getMyProduct();
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const PopUp = () => {
    return (
      <Dialog fullWidth onClose={() => setIsOpen(false)} open={isOpen}>
        <Paper>
          <DialogTitle>
            <Typography> ایا از حذف محصول اطمینان دارید</Typography>
          </DialogTitle>
          <DialogActions>
            <Grid item container spacing={1}>
              <Grid xs={6} item>
                <Button
                  onClick={deleteProduct}
                  size="large"
                  color="secondary"
                  fullWidth
                >
                  {"بله"}
                </Button>
              </Grid>
              <Grid xs={6} item>
                <Button
                  onClick={() => setIsOpen(false)}
                  size="large"
                  color="primary"
                  fullWidth
                >
                  {"خیر"}
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </Paper>
      </Dialog>
    );
  };

  const customerBtn = () => {
    return (
      <>
        {selected ? (
          <div className={classes.buttonAdd}>
            <div onClick={() => settingCount(count + 1)}>
              <Plus width={15} />
            </div>
            <span>{count}</span>
            <div onClick={() => settingCount(count - 1)}>
              <Minus width={15} />
            </div>
          </div>
        ) : (
          <Grid
            item
            onClick={settingBasket}
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
            style={{ padding: "10px 0px" }}
          >
            {/* <Grid style={{ height: 15 }} item>
              
            </Grid> */}
            <Grid style={{ fontSize: 8, padding: "0px" }} item>
              {"افزودن به سبد خرید"}
              <Rich width={10} />
            </Grid>
          </Grid>
        )}
      </>
    );
  };

  const changeState = async () => {
    setLoading(true);
    try {
      await product.statusToggle(uuid as string, { status: !state || false });
      setState(!state);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const sellerBtn = () => {
    return (
      <Grid
        item
        onClick={changeState}
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid
          style={{
            height: 30,
            flexWrap: "nowrap",
            padding: "2px"
          }}
          item
        >
          {state ? "ناموجود کردن" : "موجود کردن"}
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      {isOpen ? (
        <PopUp />
      ) : (
        <LoadingBox loading={loading}>
          <Paper className={classes.paper} key={uuid}>
            <div className={classes.mask}>
              <img className={classes.image} src={image} />
            </div>
            <Grid
              item
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              className={classes.likeSection}
            >
              {typeof forSeller === "boolean" ? (
                <Link href={`/addProduct?uuid=${uuid}`} prefetch>
                  <Edit width="10" />
                </Link>
              ) : (
                <>
                  {typeof like === "number" ? (
                    <div style={{ position: "absolute", left: "15px" }}>
                      <span>{like}</span>
                      <Like
                        onClick={handleLike}
                        className={classes.like}
                        isFiled={liked || false}
                      />
                    </div>
                  ) : null}
                </>
              )}
            </Grid>
            <span style={{ fontSize: "11px" }}>{name}</span>
            <div className={classes.texts}>
              <span>{price}</span>
              <span className={classes.unit}>{"تومان"}</span>
            </div>
            <div className={classes.desc}>{description}</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                style={{ width: "75%" }}
                noLoading
                fullWidth
                background={
                  forSeller
                    ? state
                      ? secondaryButton
                      : defaultButton
                    : selected
                    ? defaultButton
                    : secondaryButton
                }
                fontColor={
                  forSeller
                    ? state
                      ? Primary
                      : secondary
                    : selected
                    ? secondary
                    : Primary
                }
              >
                {forSeller ? sellerBtn() : customerBtn()}
              </Button>
              {forSeller && (
                <Button onClick={() => setIsOpen(true)}>
                  <Delete />
                </Button>
              )}
            </div>
          </Paper>
        </LoadingBox>
      )}
    </>
  );
};

export default Product;
