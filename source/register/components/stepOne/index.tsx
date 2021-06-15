import { useState } from "react";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";

import TextField from "../textField";
import Button from "../../../../custom/button";
import { borderRadius } from "../../../../theme/style";

// import { login } from "../../api";

interface IValue {
  phone: string;
  name: string;
}

interface IProps {
  setState: Function;
}

const StepOne = (props: IProps) => {
  const { setState } = props;

  const initialValues = {
    phone: "",
    name: ""
  };

  const [loading, setLoading] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required("وارد کردن شماره موبایل الزامیست")
      .matches(
        /^(09)(10|11|12|13|14|15|16|17|18|19|90|91|32|30|33|35|36|37|38|39|01|02|03|04|05|41|20|21|22)\d{7}/,
        "شماره موبایل معتبر نیست"
      )
  });

  const handleSubmit = async (values: IValue) => {
    try {
      setLoading(true);
      // await login(values);
      setState({ step: 3, phone: values.phone });
    } catch (error) {
      console.error(error);
      setState({ step: 2, phone: values.phone });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      render={({ handleSubmit }: FormikProps<IValue>) => (
        <Form onSubmitCapture={handleSubmit}>
          <Field
            name="phone"
            render={({
              field,
              form: { touched, errors }
            }: FieldProps<IValue>) => (
              <TextField
                {...field}
                margin="dense"
                fullWidth
                label="شماره موبایل"
                type="tel"
                error={touched.phone && errors.phone}
              />
            )}
          />
          <Field
            name="name"
            render={({
              field,
              form: { touched, errors }
            }: FieldProps<IValue>) => (
              <TextField
                {...field}
                fullWidth
                margin="dense"
                label="نام و نام خانوادگی"
                type="text"
                error={touched.name && errors.name}
              />
            )}
          />
          <Button
            type="submit"
            color="secondary"
            size="large"
            fullWidth
            loading={loading}
            style={{ borderRadius: borderRadius, marginTop: "40px" }}
          >
            {"تایید"}
          </Button>
        </Form>
      )}
    />
  );
};

export default StepOne;
