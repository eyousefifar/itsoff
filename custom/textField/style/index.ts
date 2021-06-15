import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Primary, backgroundGray } from "../../../color";
import { border } from "../../../theme/style";

const CssTextField = withStyles({
  root: {
    "& .MuiFilledInput-underline:after": {
      borderBottom: `${border} ${Primary}`
    },
    "& .MuiFilledInput-underline.Mui-error:after ": {
      borderBottomColor: Primary
    },
    "& .MuiFormHelperText-root": {
      fontFamily: "iranSanse",
      textAlign: "right"
    },
    "& label.Mui-focused": {
      color: Primary,
      transform: "translate(0, 4px) scale(0.75)"
    },
    "& label.Mui-focused.Mui-error": {
      color: "#f44336"
    },
    "& label.MuiInputLabel-shrink": {
      transform: "translate(0, 4px) scale(0.75)"
    },
    "& input": {
      fontFamily: "iranSanse",
      background: backgroundGray,
      padding: "16px 12px"
    },
    "& textarea": {
      fontFamily: "iranSanse"
    },
    "& label": {
      fontFamily: "iranSanse",
      color: Primary,
      transformOrigin: "top right",
      left: "unset",
      right: 0,
      top: "-6px",
      transform: "translate(0, 24px) scale(1)"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: Primary,
        borderWidth: border,
        paddingLeft: 0,
        paddingRight: 8,
        "& legend": {
          textAlign: "right"
        }
      },
      "&:hover fieldset": {
        borderColor: Primary
      },
      "&.Mui-focused fieldset": {
        borderColor: Primary
      }
    }
  }
})(TextField);

export default CssTextField;
