import { useState, useContext } from "react";
import Axios from "axios";

import * as Yup from "yup";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";

import useStyles from "../style";

import Paper from "../../../custom/paper";
import Typography from "../../../custom/typography";
import TextField from "../../../custom/textField";
import Button from "../../../custom/button";
// import Title from '../../../library/title';
// import ProductCart from '../../../library/productCart';

import Date from "../components/dateTime";
import User from "../assets/svg/user";
import Camera from "../assets/svg/Camera";

import { setAuthToken } from "../../../_api";
import { users } from "../api";

import { AppContext } from "../../../library/header";

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

interface IValue {
  name: string;
  username: string;
  bday: string;
  phone: string;
}

// interface IProduct {
//   desc: string;
//   image: string;
//   isLiked: boolean | undefined;
//   like: number | undefined;
//   name: string;
//   price: number;
//   uuid: string;
// }

const Product = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({});
  const [pic, setPic] = useState<any>(null);
  // const [fav, setFav] = useState<Array<IProduct>>([]);

  const context = useContext(AppContext);

  const [initialValues, setInitialValues] = useState<IValue>({
    name: "",
    username: "",
    bday: "",
    phone: ""
  });

  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("وارد کردن نام و نام خانوادگی الزامیست")
      .min(5, "برای نام و نام خانوادگی حداقل ۵ نویسه وارد کنید"),
    username: Yup.string()
      .nullable()
      .notRequired()
      .min(5, "برای نام کاربری حداقل ۵ نویسه وارد کنید")
      .matches(
        /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/,
        "نام کابری را به انگلیسی وارد کنید"
      ),
    bday: Yup.date(),
    phone: Yup.string()
      .matches(
        /^(09)(10|11|12|13|14|15|16|17|18|19|90|91|32|30|33|35|36|37|38|39|01|02|03|04|05|41|20|21|22)\d{7}/,
        "شماره موبایل معتبر نیست"
      )
      .required("وارد کردن شماره موبایل الزامیست")
      .max(11, "حداکثر یازده عدد وارد کنید")
  });

  const handleSubmit = async (values: IValue) => {
    try {
      setLoading(true);
      let myform = new FormData();
      myform.append("name", values.name);
      if (values.bday) myform.append("bday", values.bday);
      if (values.username) myform.append("username", values.username);
      if (pic) myform.append("avatar", pic);
      if (values.phone !== initialValues.phone)
        myform.append("phone", values.phone);
      await users.editProfile(myform);
      await getMe();
      console.log(context);
      context.get();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
    setOpen(false);
  };

  const getImage = async (user: IUser) => {
    try {
      const { data } = await Axios.get(user.image as string, {
        responseType: "arraybuffer"
      });
      let img = new Buffer(data, "binary").toString("base64");
      sessionStorage.setItem("img", img);
    } catch (error) {
      console.error(error);
    }
  };

  const getMe = async () => {
    try {
      const { data } = await users.getProfile();
      setUser(data);
      let user = btoa(unescape(encodeURIComponent(JSON.stringify(data))));
      sessionStorage.setItem("user", user);
      if (data.image) getImage(data);
      if (!data.username) {
        data.username = "";
      }
      setInitialValues(data);
    } catch (error) {
      console.error(error);
    }
  };

  // const getMyFavorits = async () => {
  //   try {
  //     const { data } = await users.getMyBookMark();
  //     let myFav = data.map((bas: any) => {
  //       return {
  //         desc: bas.Product.desc,
  //         image: bas.Product.image,
  //         isLiked: undefined,
  //         like: undefined,
  //         name: bas.Product.name,
  //         price: bas.Product.price,
  //         uuid: bas.Product.uuid
  //       };
  //     });
  //     setFav(myFav);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  if (typeof localStorage !== "undefined") {
    let Auth = localStorage.getItem("Auth");
    if (Auth && !user.uuid) {
      setAuthToken(Auth);
      getMe();
      // getMyFavorits();
    }
  }

  const handlePic = (e: any) => {
    setPic(e.target.files[0]);
  };

  return (
    <div className={classes.flexBox}>
      <Paper className={classes.profile}>
        <label>
          <div className={classes.mask}>
            {user.image ? (
              <img src={pic ? URL.createObjectURL(pic) : user.image} />
            ) : (
              <User />
            )}
          </div>

          {open && (
            <span style={{ position: "absolute" }} className={classes.camera}>
              <div className={classes.fatherDivCamera}>
                <div>
                  <Camera />
                </div>
              </div>
              <input
                accept="image/*"
                style={{ display: "none" }}
                type="file"
                onChange={handlePic}
              />
            </span>
          )}
        </label>

        {open ? (
          <>
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              render={({ handleSubmit }: FormikProps<IValue>) => (
                <Form onSubmitCapture={handleSubmit}>
                  <Field
                    name="name"
                    render={({
                      field,
                      form: { touched, errors }
                    }: FieldProps<IValue>) => (
                      <TextField
                        {...field}
                        autoFocus
                        margin="normal"
                        fullWidth
                        label="نام و نام خانوادگی"
                        type="text"
                        error={touched.name && errors.name}
                      />
                    )}
                  />
                  <Field
                    name="username"
                    render={({
                      field,
                      form: { touched, errors }
                    }: FieldProps<IValue>) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="نام کاربری (اختیاری)"
                        type="text"
                        error={touched.username && errors.username}
                      />
                    )}
                  />
                  <Field
                    name="phone"
                    render={({
                      field,
                      form: { touched, errors }
                    }: FieldProps<IValue>) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="شماره موبایل"
                        type="tel"
                        error={touched.phone && errors.phone}
                      />
                    )}
                  />
                  <Field
                    name="bday"
                    render={({ field }: FieldProps<IValue>) => (
                      <Date {...field} />
                    )}
                  />
                  <Button
                    type="submit"
                    color="secondary"
                    size="large"
                    fullWidth
                    loading={loading}
                  >
                    {"تایید"}
                  </Button>
                </Form>
              )}
            />
          </>
        ) : (
          <>
            <Typography>محمد کمال زاده</Typography>
            <div>
              <Typography variant="caption">{user.username}</Typography>
            </div>
            <Typography variant="caption">09198698369</Typography>
            {/* {user.uuid ? ( */}
            <Button
              className={classes.button}
              color="secondary"
              size="large"
              fullWidth
              onClick={() => setOpen(true)}
            >
              {"ویرایش اطلاعات"}
            </Button>
            {/* ) : null} */}
          </>
        )}
      </Paper>
      {/* {fav.length > 0 ? (
        <div className={classes.main}>
          <Paper>
            <Title label="علاقه مندی ها" />
            <Grid container>
              {fav.map(product => (
                <Grid
                  key={product.uuid}
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  lg={4}
                  xl={4}
                >
                  <ProductCart
                    uuid={String(product.uuid)}
                    name={product.name}
                    price={product.price}
                    description={product.desc}
                    isliked={product.isLiked}
                    likes={product.like}
                    image={product.image}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </div>
      ) : (*/}
      <div className={classes.main}></div>
    </div>
  );
};

export default Product;
