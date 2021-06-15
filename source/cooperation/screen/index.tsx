import { useState } from "react";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";
import useStyles from "../style";
import TextField from "../../../custom/textField";
import Button from "../../../custom/button";
import { Grid } from "@material-ui/core";
import Typography from "../../../custom/typography";

interface IValue {
  phone: string;
  name: string;
  jobname: string;
}

const Cooperation = () => {
  const classes = useStyles();

  const initialValues = {
    phone: "",
    name: "",
    jobname: ""
  };

  const [loading, setLoading] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required("وارد کردن شماره موبایل الزامیست")
      .matches(
        /^(09)(10|11|12|13|14|15|16|17|18|19|90|91|32|30|33|35|36|37|38|39|01|02|03|04|05|41|20|21|22)\d{7}/,
        "شماره موبایل معتبر نیست"
      ),
    jobname: Yup.string().required("وارد کردن نام کسب و کار الزامیست"),
    name: Yup.string().required("وارد کردن نام و نام خانوادگی الزامیست")
  });

  const handleSubmit = async () => {
    try {
      setLoading(true);
      // await login(values);
      // setState({ step: 3, phone: values.phone });
    } catch (error) {
      console.error(error);
      // setState({ step: 2, phone: values.phone });
    }
  };

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      direction="row"
      justify="center"
      alignItems="center"
      container
      className={classes.flexBox}
    >
      <Grid
        item
        xs={10}
        sm={10}
        md={6}
        lg={6}
        xl={6}
        justify="center"
        alignItems="center"
        container
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          render={({ handleSubmit }: FormikProps<IValue>) => (
            <Form onSubmitCapture={handleSubmit}>
              <div className={classes.Box}>
                <Typography variant="body1" style={{ textAlign: "center" }}>
                  فرم درخواست همکاری با ما
                </Typography>
                <Field
                  name="name"
                  render={({
                    field,
                    form: { touched, errors }
                  }: FieldProps<IValue>) => (
                    <TextField
                      autoFocus
                      {...field}
                      margin="normal"
                      fullWidth
                      label="نام و نام خانوادگی"
                      type="text"
                      error={touched.name && errors.name}
                    />
                  )}
                />
                <Field
                  name="jobname"
                  render={({
                    field,
                    form: { touched, errors }
                  }: FieldProps<IValue>) => (
                    <TextField
                      autoFocus
                      {...field}
                      margin="normal"
                      fullWidth
                      label="نام کسب و کار"
                      type="text"
                      error={touched.jobname && errors.jobname}
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
                      // autoFocus
                      {...field}
                      margin="normal"
                      fullWidth
                      label="شماره موبایل"
                      type="tel"
                      error={touched.phone && errors.phone}
                    />
                  )}
                />
              </div>
              <Button
                className={classes.submitButton}
                type="submit"
                color="secondary"
                size="large"
                fullWidth
                loading={loading}
              >
                {"ارسال درخواست"}
              </Button>
            </Form>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default Cooperation;
