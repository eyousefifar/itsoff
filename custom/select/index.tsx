import CssTextField from "./style";

type margin = "normal" | "none" | "dense" | undefined;

interface ITextField {
  label?: string;
  placeholder?: string;
  // name: string;
  fullWidth?: boolean;
  margin?: margin;
  type?: string;
  value?: string;
  error?: any;
  onChange?: any;
  onBlur?: any;
  input?: any;
  required?: boolean;
  autoFocus?: boolean;
  children?: any;
}

export default (props: ITextField) => {
  const {
    // label,
    placeholder,
    children,
    // input,
    // name,
    fullWidth,
    margin,
    // type,
    // value,
    error,
    // onBlur,
    onChange
    // required,
    // autoFocus
  } = props;
  return (
    <CssTextField
      fullWidth={fullWidth}
      // autoFocus={autoFocus}
      // required={required}
      // input={input}
      // label={label}
      placeholder={placeholder}
      // name={name}
      margin={margin}
      variant="filled"
      // type={type}
      // helperText={error}
      error={error}
      onChange={onChange}
      // onBlur={onBlur}
      // value={value}
    >
      {children}
    </CssTextField>
  );
};
