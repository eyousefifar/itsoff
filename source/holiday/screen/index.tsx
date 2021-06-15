import TimeBox from "../components/timeBox";
import DateTime from "../components/dateTime";
import { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Styles from "./style";

import moment from "moment-jalaali";

import Close from "../assets/svg/close";
import * as Yup from "yup";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";

import { holiday } from "../api";

import Paper from "../../../custom/paper";
import Button from "../../../custom/button";
import Typography from "../../../custom/typography";
// import TextField from "../../../custom/textField";
import {
  Grid,
  Dialog,
  DialogActions,
  DialogTitle,
  CircularProgress
} from "@material-ui/core";

interface IState {
  holidays: Array<IHoliday>;
  loading: boolean;
  open: boolean;
  openDelete: boolean;
  loadingBtn: boolean;
  select: any;
  initialValues: IHoliday;
}

interface IClasses {
  loader: string;
  center: string;
}

interface IHoliday {
  day: string;
  uuid: string;
}

class Reserve extends Component {
  classes: IClasses;

  initialValues = {
    day: "",
    uuid: ""
  };

  constructor(props: any) {
    super(props);
    this.classes = props.classes;
  }

  state: IState = {
    holidays: [],
    open: false,
    openDelete: false,
    select: {},
    loading: true,
    loadingBtn: false,
    initialValues: this.initialValues
  };

  validationSchema = Yup.object().shape({
    day: Yup.string()
  });

  componentDidMount() {
    this.getAllHoliday();
  }

  handleSubmit = async (values: any, actions: any) => {
    this.setState({ loadingBtn: true });
    try {
      await holiday.addHoliday(values);
      actions.resetForm();
      this.getAllHoliday();
      this.setState({ open: false });
    } catch (error) {
      console.error(error);
    }
    this.setState({ loadingBtn: false });
  };

  getAllHoliday = async () => {
    try {
      const { data } = await holiday.getAllMyHoliday();
      this.setState({ holidays: data });
    } catch (error) {
      console.error(error);
    }
    this.setState({ loading: false });
  };

  removeHoliday = async () => {
    this.setState({ loadingBtn: true });
    try {
      await holiday.deleteHoliday(this.state.select.uuid);
      this.getAllHoliday();
      this.setState({ openDelete: false });
    } catch (error) {
      console.error(error);
    }
    this.setState({ loadingBtn: false });
  };

  handleButton = (data: IHoliday) => {
    this.setState({ select: data, openDelete: true });
  };

  render() {
    const { classes } = this;
    const {
      select,
      loading,
      holidays,
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
              render={({ handleSubmit }: FormikProps<IHoliday>) => (
                <Form onSubmitCapture={handleSubmit}>
                  {/* <Field
                    name="day"
                    render={({
                      field,
                      form: { touched, errors }
                    }: FieldProps<IHoliday>) => (
                        <TextField
                          {...field}
                          margin="normal"
                          fullWidth
                          label="ساعت ورود"
                          type="number"
                          error={touched.day && errors.day}
                        />
                      )}
                  /> */}
                  <Field
                    name="day"
                    render={({ field }: FieldProps<IHoliday>) => (
                      <DateTime {...field} />
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
            <Typography>{`آیا از حذف تعطیلی ${moment(select.day).format(
              "jDD jMMMM  jYYYY"
            )} اطمینان دارید`}</Typography>
          </DialogTitle>
          <DialogActions>
            <Grid container spacing={1} item>
              <Grid xs={6} item>
                <Button
                  loading={loadingBtn}
                  onClick={this.removeHoliday}
                  size="large"
                  color="secondary"
                  fullWidth
                >
                  {"بله"}
                </Button>
              </Grid>
              <Grid xs={6} item>
                <Button
                  onClick={() => this.setState({ openDelete: false })}
                  size="large"
                  color="primary"
                  fullWidth
                >
                  {"خیر"}
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
          ) : holidays.length ? null : (
            <div className={classes.center}>
              <Typography variant="caption">{"تعطیلی ثبت نشده"}</Typography>
            </div>
          )}
          <Grid container spacing={1} item>
            {holidays.map(x => (
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
          {"افزودن تعطیلی"}
        </Button>
      </>
    );
  }
}

export default withStyles(Styles)(Reserve);
