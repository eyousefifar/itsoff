import TabelBox from "../components/tabelBox";
import { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Styles from "./style";

import Close from "../assets/svg/close";
import * as Yup from "yup";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";

import { tabels } from "../api";

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

interface IState {
  tabels: Array<ITabel>;
  loading: boolean;
  open: boolean;
  openDelete: boolean;
  loadingBtn: boolean;
  select: any;
  initialValues: ITabel;
}

interface IClasses {
  loader: string;
  center: string;
  ButtonPosition: string;
}

interface ITabel {
  name: string;
  uuid: string;
  floor: number | string;
  capacity: number | string;
  price: number | string;
}

class Reserve extends Component {
  classes: IClasses;

  initialValues = {
    name: "",
    uuid: "",
    floor: "",
    capacity: "",
    price: ""
  };

  constructor(props: any) {
    super(props);
    this.classes = props.classes;
  }

  state: IState = {
    tabels: [],
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
    capacity: Yup.number()
      .integer("باید عدد وارد کنید")
      .required("وارد کردن ظرفیت الزامیست")
      .min(1, "ظرفیت حداقل یک نفر است"),
    price: Yup.number()
      .integer("باید عدد وارد کنید")
      .min(100, "قیمت حداقل صد تومان است")
      .required("وارد کردن قیمت الزامیست"),
    floor: Yup.number().required("وارد کردن طبقه الزامیست")
  });

  componentDidMount() {
    this.getAllTabel();
  }

  handleSubmit = async (values: any, actions: any) => {
    this.setState({ loadingBtn: true });
    try {
      const { uuid } = values;
      if (uuid) {
        await tabels.updateTabel(uuid, values);
      } else {
        await tabels.addTabel(values);
      }
      actions.resetForm();
      this.getAllTabel();
      this.setState({ open: false });
    } catch (error) {
      console.error(error);
    }
    this.setState({ loadingBtn: false });
  };

  getAllTabel = async () => {
    try {
      const { data } = await tabels.getAllMyTabel();
      this.setState({ tabels: data });
    } catch (error) {
      console.error(error);
    }
    this.setState({ loading: false });
  };

  removeTabel = async () => {
    this.setState({ loadingBtn: true });
    try {
      await tabels.deleteTabel(this.state.select.uuid);
      this.getAllTabel();
      this.setState({ openDelete: false });
    } catch (error) {
      console.error(error);
    }
    this.setState({ loadingBtn: false });
  };

  handleButton = (kind: string, data: ITabel) => {
    this.setState({ select: data });
    if (kind === "delete") {
      this.setState({ openDelete: true });
    } else if (kind === "edit") {
      this.setState({ open: true, initialValues: data });
    }
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
      loadingBtn
    } = this.state;

    return (
      <>
        <Dialog
          fullWidth
          onClose={() => this.setState({ open: false })}
          open={open}
        >
          <div style={{ margin: "15px 20px" }}>
            <Close onClick={() => this.setState({ open: false })} size="20" />
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={this.validationSchema}
              onSubmit={this.handleSubmit}
              render={({ handleSubmit }: FormikProps<ITabel>) => (
                <Form onSubmitCapture={handleSubmit}>
                  <Field
                    name="name"
                    render={({
                      field,
                      form: { touched, errors }
                    }: FieldProps<ITabel>) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="نام میز"
                        type="text"
                        error={touched.name && errors.name}
                      />
                    )}
                  />
                  <Field
                    name="capacity"
                    render={({
                      field,
                      form: { touched, errors }
                    }: FieldProps<ITabel>) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="ظرفیت"
                        type="number"
                        error={touched.capacity && errors.capacity}
                      />
                    )}
                  />
                  <Field
                    name="floor"
                    render={({
                      field,
                      form: { touched, errors }
                    }: FieldProps<ITabel>) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="طبقه"
                        type="number"
                        error={touched.floor && errors.floor}
                      />
                    )}
                  />
                  <Field
                    name="price"
                    render={({
                      field,
                      form: { touched, errors }
                    }: FieldProps<ITabel>) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="قیمت"
                        type="number"
                        error={touched.price && errors.price}
                      />
                    )}
                  />
                  <Grid container spacing={1}>
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
                        onClick={() => this.setState({ open: false })}
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
            <Grid container spacing={1}>
              <Grid xs={6} item>
                <Button
                  loading={loadingBtn}
                  onClick={this.removeTabel}
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
        <div
          className={classes.ButtonPosition}
          style={{
            position: "fixed"
          }}
        >
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
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
              {"افزودن میز"}
            </Button>
          </Grid>
        </div>
        <Paper>
          {loading ? (
            <div className={classes.loader}>
              <CircularProgress size="70px" color="inherit" />
            </div>
          ) : tabels.length ? null : (
            <div className={classes.center}>
              <Typography variant="caption">{"میزی ثبت نشده"}</Typography>
            </div>
          )}
          <Grid container spacing={1} style={{ paddingBottom: 70 }}>
            {tabels.map(x => (
              <Grid key={x.uuid} item xs={12} sm={6} md={4} lg={3} xl={3}>
                <TabelBox handleButton={this.handleButton} {...x} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </>
    );
  }
}

export default withStyles(Styles)(Reserve);
