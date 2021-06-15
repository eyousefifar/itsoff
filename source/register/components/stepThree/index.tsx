import { useState, useEffect } from "react";
import Router from "next/router";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";
// import Grid from "@material-ui/core/Grid";
// import Typography from "../../../../custom/typography";
import TextField from "../textField";

import Button from "../../../../custom/button";

import { getDiscount } from "../../api";
import { borderRadius } from "../../../../theme/style";
// import { setAuthToken } from "../../../../_api";

interface IValue {
  verifyCode: string;
}

interface IProps {
  phone: string;
}

const StepOne = (props: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  // const [discount, setDiscount] = useState<string>("");

  const { phone } = props;

  const initialValues = {
    verifyCode: "",
    phone
  };

  const validationSchema = Yup.object().shape({
    verifyCode: Yup.string().required("وارد کردن کد تایید الزامیست")
  });

  const handleSubmit = async () => {
    try {
      setLoading(true);
      // const { data } = await verifyUser(values);
      // localStorage.setItem("Auth", data.token);
      localStorage.setItem("Auth", "55555");
      // setAuthToken(data.token);
      Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };
  const getDiscountCode = async () => {
    try {
      const { data } = await getDiscount();
      // setDiscount(data);
      console.log("data", data);
    } catch (error) {}
  };
  useEffect(() => {
    getDiscountCode();
  });
  // getDiscountCode();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      render={({ handleSubmit }: FormikProps<IValue>) => (
        <Form onSubmitCapture={handleSubmit}>
          <Field
            name="verifyCode"
            render={({
              field,
              form: { touched, errors }
            }: FieldProps<IValue>) => (
              <TextField
                {...field}
                autoFocus
                margin="normal"
                fullWidth
                label="کد تایید"
                type="tel"
                error={touched.verifyCode && errors.verifyCode}
              />
            )}
          />

          <Button
            type="submit"
            color="secondary"
            size="large"
            fullWidth
            loading={loading}
            style={{ borderRadius: borderRadius }}
          >
            {"تایید"}
          </Button>
          {/* {discount ? (
            <>
              <div style={{ display: "flex ", justifyContent: "center" }}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  xl={6}
                  style={{
                    padding: "20px",
                    // border: "1px solid black",
                    textAlign: "center",
                    fontSize: "15px"
                  }}
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  container
                >
                  <Typography variant="caption">
                    به مناسبت سه سالگی کافه چی 20% تخفیف برای خرید اول به شما
                    تعلق گرفت
                  </Typography>
                </Grid>
              </div>
              <div style={{ display: "flex ", justifyContent: "center" }}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  xl={6}
                  style={{
                    padding: "20px",
                    // border: "1px solid black",
                    textAlign: "center",
                    fontSize: "15px"
                  }}
                  direction="row"
                  justify="center"
                  alignItems="center"
                  container
                >
                  <Typography
                    style={{
                      padding: "20px",
                      border: "1px solid black",
                      textAlign: "center",
                      fontSize: "15px"
                    }}
                    variant="caption"
                  >
                    کد تخفیف شما :
                    <Button
                      type="button"
                      color="primary"
                      size="large"
                      fullWidth
                      // loading={loading}
                      style={{ borderRadius: "5px" }}
                    >
                      {discount}
                    </Button>
                  </Typography>
                </Grid>
              </div>{" "}
            </>
          ) : (
            ""
          )} */}
        </Form>
      )}
    />
  );
};

export default StepOne;
