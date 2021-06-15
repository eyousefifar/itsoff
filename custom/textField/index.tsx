import CssTextField from "./style";

type margin = "normal" | "none" | "dense" | undefined;

interface ITextField {
  label?: string;
  placeholder?: string;
  name: string;
  fullWidth?: boolean;
  margin?: margin;
  type?: string;
  value?: string;
  error?: any;
  onChange?: any;
  onBlur?: any;
  required?: boolean;
  multiline?: boolean;
  autoFocus?: boolean;
}

export default (props: ITextField) => {
  const {
    label,
    placeholder,
    name,
    fullWidth,
    margin,
    type,
    value,
    error,
    onBlur,
    onChange,
    required,
    autoFocus,
    multiline
  } = props;
  return (
    <CssTextField
      fullWidth={fullWidth}
      autoFocus={autoFocus}
      multiline={multiline}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      margin={margin}
      variant="filled"
      type={type}
      helperText={error}
      error={error}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  );
};
