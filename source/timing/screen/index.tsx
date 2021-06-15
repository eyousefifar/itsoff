import TimeBox from "../components/timeBox";
import { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Styles from "./style";

import Close from "../assets/svg/close";
import * as Yup from "yup";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";

import { timing } from "../api";

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
  times: Array<ITime>;
  loading: boolean;
  open: boolean;
  openDelete: boolean;
  loadingBtn: boolean;
  select: any;
  initialValues: ITime;
}

interface IClasses {
  loader: string;
  center: string;
}

interface ITime {
  at: number | string;
  uuid: string;
  status: boolean;
}

class Reserve extends Component {
  classes: IClasses;

  initialValues = {
    at: "",
    uuid: "",
    status: false
  };

  constructor(props: any) {
    super(props);
    this.classes = props.classes;
  }

  state: IState = {
    times: [],
    open: false,
    openDelete: false,
    select: {},
    loading: true,
    loadingBtn: false,
    initialValues: this.initialValues
  };

  validationSchema = Yup.object().shape({
    at: Yup.number()
      .integer("باید عدد وارد کنید")
      .required("وارد کردن ظرفیت الزامیست")
      .min(1, " حداقل ساعت یک است")
      .max(23, " حداکثر ساعت بیست و سه است")
  });

  componentDidMount() {
    this.getAllTime();
  }

  handleSubmit = async (values: any, actions: any) => {
    this.setState({ loadingBtn: true });
    try {
      const { uuid } = values;
      if (uuid) {
        await timing.updateTime(uuid, values);
      } else {
        await timing.addTime(values);
      }
      actions.resetForm();
      this.getAllTime();
      this.setState({ open: false });
    } catch (error) {
      console.error(error);
    }
    this.setState({ loadingBtn: false });
  };

  getAllTime = async () => {
    try {
      const allTime = await timing.getAllMyTime();
      const activeTime = await timing.getAllTime();
      let times = allTime.data.map((x: ITime) => {
        let index = activeTime.data.findIndex((u: ITime) => {
          return u.uuid === x.uuid;
        });
        return { at: x.at, uuid: x.uuid, status: index > -1 };
      });
      this.setState({ times });
    } catch (error) {
      console.error(error);
    }
    this.setState({ loading: false });
  };

  removeTabel = async () => {
    this.setState({ loadingBtn: true });
    try {
      await timing.deleteTime(this.state.select.uuid);
      this.getAllTime();
      this.setState({ openDelete: false });
    } catch (error) {
      console.error(error);
    }
    this.setState({ loadingBtn: false });
  };

  handleButton = (kind: string, data: ITime) => {
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
      times,
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
              render={({ handleSubmit }: FormikProps<ITime>) => (
                <Form onSubmitCapture={handleSubmit}>
                  <Field
                    name="at"
                    render={({
                      field,
                      form: { touched, errors }
                    }: FieldProps<ITime>) => (
                      <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="ساعت ورود"
                        type="number"
                        error={touched.at && errors.at}
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
            <Typography>{`آیا از حذف ساعت ${select.at} اطمینان دارید`}</Typography>
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

        <Paper>
          {loading ? (
            <div className={classes.loader}>
              <CircularProgress size="70px" color="inherit" />
            </div>
          ) : times.length ? null : (
            <div className={classes.center}>
              <Typography variant="caption">{"ساعتی ثبت نشده"}</Typography>
            </div>
          )}
          <Grid container spacing={1}>
            {times.map(x => (
              <Grid key={x.uuid} item xs={6} sm={4} md={3} lg={2} xl={1}>
                <TimeBox handleButton={this.handleButton} {...x} />
              </Grid>
            ))}
          </Grid>
        </Paper>
        <Button
          type="button"
          color="secondary"
          size="large"
          fullWidth
          onClick={() =>
            this.setState({ open: true, initialValues: this.initialValues })
          }
        >
          {"افزودن ساعت"}
        </Button>
      </>
    );
  }
}

export default withStyles(Styles)(Reserve);
