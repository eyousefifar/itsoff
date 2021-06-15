import CatBox from "../components/catBox";
import { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Styles from "./style";

import Close from "../assets/svg/close";
import Rich from "../assets/svg/picture";
import * as Yup from "yup";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";

import { category } from "../api";
import Camera from "../assets/svg/Camera";

import Paper from "../../../custom/paper";
import Button from "../../../custom/button";
import Typography from "../../../custom/typography";
import TextField from "../../../custom/textField";
import {
  Grid,
  Dialog,
  DialogActions,
  DialogTitle,
  CircularProgress
} from "@material-ui/core";
import { defaultColor } from "../../../color";

interface IState {
  tabels: Array<ICat>;
  loading: boolean;
  pic: any;
  open: boolean;
  openDelete: boolean;
  loadingBtn: boolean;
  select: any;
  initialValues: ICat;
}

interface IClasses {
  loader: string;
  center: string;
  fatherDivCamera: string;
  camera: string;
}

interface ICat {
  name: string;
  desc: string;
  image: string;
  uuid: string;
}

class Reserve extends Component {
  classes: IClasses;

  initialValues = {
    name: "",
    uuid: "",
    image: "",
    desc: ""
  };

  constructor(props: any) {
    super(props);
    this.classes = props.classes;
  }

  state: IState = {
    tabels: [],
    pic: "",
    open: false,
    openDelete: false,
    select: {},
    loading: true,
    loadingBtn: false,
    initialValues: this.initialValues
  };

  validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("وارد کردن نام الزامیست")
      .min(3, "برای نام حداقل 3 نویسه وارد کنید"),
    desc: Yup.string()
      .required("وارد کردن توضیحات الزامیست")
      .min(3, "برای توضیحات حداقل 3 نویسه وارد کنید")
  });

  componentDidMount() {
    this.getAllCat();
  }

  handleSubmit = async (values: any, actions: any) => {
    this.setState({ loadingBtn: true });
    try {
      const { uuid } = values;
      let sendData;
      if (!values.upload) {
        sendData = values;
      } else {
        sendData = new FormData();
        sendData.append("image", values.upload);
        sendData.append("name", values.name);
        sendData.append("desc", values.desc);
      }
      if (uuid) {
        await category.updateCategory(uuid, sendData);
      } else {
        await category.addCategory(sendData);
      }
      actions.resetForm();
      this.getAllCat();
      this.setState({ open: false });
    } catch (error) {
      console.error(error);
    }
    this.setState({ loadingBtn: false });
  };

  getAllCat = async () => {
    try {
      const { data } = await category.getAllCategores();
      this.setState({ tabels: data });
    } catch (error) {
      console.error(error);
    }
    this.setState({ loading: false });
  };

  removeCat = async () => {
    this.setState({ loadingBtn: true });
    try {
      await category.deleteCategory(this.state.select.uuid);
      this.getAllCat();
      this.setState({ openDelete: false });
    } catch (error) {
      console.error(error);
    }
    this.setState({ loadingBtn: false });
  };

  handleButton = (kind: string, data: ICat) => {
    this.setState({ select: data });
    if (kind === "delete") {
      this.setState({ openDelete: true });
    } else if (kind === "edit") {
      this.setState({ open: true, initialValues: data });
    }
  };

  handlePic = async (e: any, onChange: any) => {
    this.setState({ pic: "" });
    this.setState({ pic: URL.createObjectURL(e.target.files[0]) });
    onChange({ target: { name: "upload", value: e.target.files[0] } });
  };

  close = () => {
    this.setState({ open: false, pic: "" });
  };

  render() {
    const { classes } = this;
    const {
      select,
      loading,
      tabels,
      initialValues,
      open,
      openDelete,
      loadingBtn,
      pic
    } = this.state;

    return (
      <>
        <Dialog fullWidth onClose={this.close} open={open}>
          <div style={{ margin: "15px 20px" }}>
            <Close onClick={this.close} size="20" />
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={this.validationSchema}
              onSubmit={this.handleSubmit}
              render={({ handleSubmit }: FormikProps<ICat>) => (
                <Form onSubmitCapture={handleSubmit}>
                  <div style={{ textAlign: "center" }}>
                    <Field
                      name="image"
                      render={({
                        field
                      }: // form: { touched, errors }
                      FieldProps<ICat>) => (
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
                    }: FieldProps<ICat>) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="نام دسته"
                        type="text"
                        error={touched.name && errors.name}
                      />
                    )}
                  />
                  <Field
                    name="desc"
                    render={({
                      field,
                      form: { touched, errors }
                    }: FieldProps<ICat>) => (
                      <TextField
                        {...field}
                        multiline
                        margin="normal"
                        fullWidth
                        label="توضیحات"
                        type="number"
                        error={touched.desc && errors.desc}
                      />
                    )}
                  />
                  <Grid container spacing={1} item>
                    <Grid item xs={6}>
                      <Button
                        type="submit"
                        color="secondary"
                        size="large"
                        fullWidth
                        loading={loadingBtn}
                      >
                        {"تایید"}
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        type="button"
                        color="primary"
                        size="large"
                        fullWidth
                        onClick={this.close}
                      >
                        {"انصراف"}
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            />
          </div>
        </Dialog>

        <Dialog
          open={openDelete}
          fullWidth
          onClose={() => this.setState({ openDelete: false })}
        >
          <DialogTitle>
            <Typography>{`آیا از حذف ${select.name} اطمینان دارید`}</Typography>
          </DialogTitle>
          <DialogActions>
            <Grid container spacing={1} item>
              <Grid xs={6} item>
                <Button
                  loading={loadingBtn}
                  onClick={this.removeCat}
                  size="large"
                  color="secondary"
                  fullWidth
                >
                  بله
                </Button>
              </Grid>
              <Grid xs={6} item>
                <Button
                  onClick={() => this.setState({ openDelete: false })}
                  size="large"
                  color="primary"
                  fullWidth
                >
                  خیر
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </Dialog>

        <Paper>
          {loading ? (
            <div className={classes.loader}>
              <CircularProgress size="70px" color="inherit" />
            </div>
          ) : tabels.length ? null : (
            <div className={classes.center}>
              <Typography variant="caption">{"دسته بندی ثبت نشده"}</Typography>
            </div>
          )}
          <Grid container spacing={1} item>
            {tabels.map(x => (
              <Grid
                key={x.uuid}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                style={{ paddingBottom: "90px" }}
              >
                <CatBox handleButton={this.handleButton} {...x} />
              </Grid>
            ))}
            <div
              style={{
                position: "fixed",
                // height: "95vh",
                display: "flex",
                width: "97vw",
                zIndex: 100,
                bottom: 0
                // alignItems: "flex-end"
              }}
            >
              <div
                style={{
                  width: "95vw",
                  background: defaultColor,
                  padding: "20px 0 20px 0"
                }}
              >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Button
                    type="button"
                    color="secondary"
                    size="large"
                    fullWidth
                    onClick={() =>
                      this.setState({
                        open: true,
                        initialValues: this.initialValues
                      })
                    }
                  >
                    {"افزودن دسته بندی"}
                  </Button>
                </Grid>
              </div>
            </div>
          </Grid>
        </Paper>
      </>
    );
  }
}

export default withStyles(Styles)(Reserve);
