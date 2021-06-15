import { useState } from "react";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FilledInput
} from "@material-ui/core";
import Date from "../dateTime";
import { register } from "../../api";
import FormControl from "../../../../custom/select";
import TextField from "../textField";

import Button from "../../../../custom/button";
import { borderRadius } from "../../../../theme/style";

interface IValue {
  name: string;
  bday: string;
  mate: string;
  familiarity: string;
}

interface IProps {
  setState: Function;
  phone: string;
}

const StepOne = (props: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const { setState, phone } = props;

  const initialValues = {
    name: "",
    bday: "",
    mate: "",
    phone,
    familiarity: ""
  };
  const familiarOption = [
    { title: "دوستان و آشنایان" },
    { title: "تبلیغات مجازی" },
    { title: "تبلیغات محیطی" },
    { title: "اینستاگرام کافه‌چی" },
    { title: "موارد دیگر" }
  ];
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("وارد کردن نام و نام خانوادگی الزامیست")
      .min(5, "برای نام و نام خانوادگی حداقل ۵ نویسه وارد کنید"),
    // bday: Yup.date()
    familiarity: Yup.string()
  });

  const handleSubmit = async (values: IValue) => {
    try {
      setLoading(true);
      await register(values);
      setState({ step: 3 });
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <Formik
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
            name="familiarity"
            render={({
              field,
              form: { touched, errors }
            }: FieldProps<IValue>) => (
              <FormControl
                error={touched.familiarity && errors.familiarity}
                margin="normal"
                fullWidth
              >
                <InputLabel htmlFor="age-helper">
                  نحوه آشناییتون با کافه چی
                </InputLabel>
                <Select
                  input={
                    <FilledInput
                      {...field}
                      style={{ background: "unset" }}
                      name="familiarity"
                      id="age-helper"
                    />
                  }
                >
                  {familiarOption.map(x => (
                    <span key={Math.random()}>
                      <MenuItem key={x.title} value={x.title}>
                        {x.title}
                      </MenuItem>
                    </span>
                  ))}
                </Select>
                {touched.familiarity && errors.familiarity ? (
                  <FormHelperText>{errors.familiarity}</FormHelperText>
                ) : null}
              </FormControl>
            )}
          />

          <Field
            name="bday"
            render={({ field }: FieldProps<IValue>) => <Date {...field} />}
          />
          <Button
            type="submit"
            color="primary"
            size="large"
            fullWidth
            loading={loading}
            style={{ borderRadius: borderRadius }}
          >
            {"تایید"}
          </Button>
        </Form>
      )}
    />
  );
};

export default StepOne;
