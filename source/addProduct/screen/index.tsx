import { Component } from "react";
import moment from "moment-jalaali";
import Styles from "./style";
// import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FilledInput
} from "@material-ui/core";
import Camera from "../assets/svg/Camera";
import * as Yup from "yup";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";

import Paper from "../../../custom/paper";
import FormControl from "../../../custom/select";
import Button from "../../../custom/button";
import TextField from "../../../custom/textField";
import Rich from "../assets/svg/picture";

import { product, category } from "../api";

interface IState {
  initialValues: IValue;
  loading: boolean;
  pic: string;
  catList: Array<ICat>;
}

interface IValue {
  name: string;
  desc: string;
  price: number | string;
  image: string;
  category: string;
}
interface IClasses {
  camera: string;
  fatherDivCamera: string;
  backet: string;
  center: string;
  badage: string;
  end: string;
}

interface ICat {
  name: string;
  uuid: string;
}

class Product extends Component<any, IState> {
  classes: IClasses;
  constructor(props: any) {
    super(props);
    this.classes = props.classes;
  }
  state: IState = {
    catList: [],
    pic: "",
    loading: false,
    initialValues: {
      name: "",
      desc: "",
      price: "",
      image: "",
      category: ""
    }
  };

  componentDidMount() {
    if (this.props.url.query.uuid) {
      this.getSProduct(this.props.url.query.uuid);
    }
    this.getAllCategory();
  }

  getAllCategory = async () => {
    try {
      const { data } = await category.getAllCat();
      this.setState({ catList: data });
    } catch (error) {
      console.error(error);
    }
  };

  getSProduct = async (uuid: string) => {
    try {
      const { data } = await product.getProduct(uuid);
      let initialValues = {
        name: data.name,
        desc: data.desc,
        price: String(data.price),
        image: data.image,
        category: data.Categore.uuid
      };
      this.setState({ initialValues });
    } catch (error) {
      console.error(error);
    }
  };

  handleSubmit = async (values: any, actions: any) => {
    this.setState({ loading: true });
    try {
      const { uuid } = this.props.url.query;
      let sendData;
      if (!values.upload) {
        sendData = values;
      } else {
        sendData = new FormData();
        sendData.append("image", values.upload);
        sendData.append("name", values.name);
        sendData.append("desc", values.desc);
        sendData.append("price", values.price);
        sendData.append("category", values.category);
      }
      if (uuid) {
        await product.updateProduct(uuid, sendData);
      } else {
        await product.addProduct(sendData);
        actions.resetForm();
        this.setState({ pic: "" });
      }
      // console.log(values);
    } catch (error) {
      console.error(error);
    }
    this.setState({ loading: false });
  };

  handlePic = async (e: any, onChange: any) => {
    this.setState({ pic: URL.createObjectURL(e.target.files[0]) });
    onChange({ target: { name: "upload", value: e.target.files[0] } });
  };

  validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("???????? ???????? ?????? ????????????????")
      .min(3, "???????? ?????? ?????????? 3 ?????????? ???????? ????????"),
    desc: Yup.string()
      .required("???????? ???????? ?????????????? ????????????????")
      .min(5, "???????? ?????????????? ?????????? ?? ?????????? ???????? ????????"),
    price: Yup.number()
      .integer("???????? ?????? ???????? ????????")
      .min(100, "???????? ?????????? ???? ?????????? ??????")
      .required("???????? ???????? ???????? ????????????????"),
    category: Yup.string().required("???????? ???????? ???????? ???????? ????????????????")
  });

  render() {
    moment.loadPersian();
    const { initialValues, catList, pic, loading } = this.state;
    const { classes } = this;
    return (
      <div>
        <Paper style={{ maxWidth: 600, margin: "auto" }}>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={this.validationSchema}
            onSubmit={this.handleSubmit}
            render={({ handleSubmit }: FormikProps<IValue>) => (
              <Form onSubmitCapture={handleSubmit}>
                <div style={{ textAlign: "center" }}>
                  <Field
                    name="image"
                    render={({
                      field
                    }: // form: { touched, errors }
                    FieldProps<IValue>) => (
                      <label>
                        <span
                          style={{ position: "absolute" }}
                          className={classes.camera}
                        >
                          <div className={classes.fatherDivCamera}>
                            <div>
                              <Camera />
                            </div>
                          </div>
                          <input
                            accept="image/*"
                            style={{ display: "none" }}
                            type="file"
                            onChange={e => this.handlePic(e, field.onChange)}
                          />
                        </span>
                        {field.value || pic ? (
                          <img width="120px" src={pic ? pic : field.value} />
                        ) : (
                          <Rich width={120} />
                        )}
                      </label>
                    )}
                  />
                </div>
                <Field
                  name="name"
                  render={({
                    field,
                    form: { touched, errors }
                  }: FieldProps<IValue>) => (
                    <TextField
                      {...field}
                      margin="normal"
                      fullWidth
                      label="?????? ??????????"
                      type="text"
                      error={touched.name && errors.name}
                    />
                  )}
                />
                <Field
                  name="price"
                  render={({
                    field,
                    form: { touched, errors }
                  }: FieldProps<IValue>) => (
                    <TextField
                      {...field}
                      margin="normal"
                      fullWidth
                      label="????????"
                      type="number"
                      error={touched.price && errors.price}
                    />
                  )}
                />
                <Field
                  name="category"
                  render={({
                    field,
                    form: { touched, errors }
                  }: FieldProps<IValue>) => (
                    <FormControl
                      error={touched.category && errors.category}
                      margin="normal"
                      fullWidth
                    >
                      <InputLabel htmlFor="age-helper">???????? ????????</InputLabel>
                      <Select
                        input={
                          <FilledInput
                            {...field}
                            name="category"
                            id="age-helper"
                          />
                        }
                      >
                        {catList.map(x => (
                          <MenuItem key={x.uuid} value={x.uuid}>
                            {x.name}
                          </MenuItem>
                        ))}
                      </Select>
                      {touched.category && errors.category ? (
                        <FormHelperText>{errors.category}</FormHelperText>
                      ) : null}
                    </FormControl>
                  )}
                />
                <Field
                  name="desc"
                  render={({
                    field,
                    form: { touched, errors }
                  }: FieldProps<IValue>) => (
                    <TextField
                      {...field}
                      multiline
                      margin="normal"
                      fullWidth
                      label="??????????????"
                      type="text"
                      error={touched.desc && errors.desc}
                    />
                  )}
                />
                <Button
                  type="submit"
                  color="secondary"
                  size="large"
                  fullWidth
                  loading={loading}
                >
                  {"??????????"}
                </Button>
              </Form>
            )}
          />
        </Paper>
      </div>
    );
  }
}

export default withStyles(Styles)(Product);
