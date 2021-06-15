import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { reigesterbackgroundGray, defaultColor } from "../../../../../color";
import { border, borderRadius } from "../../../../../theme/style";

const CssTextField = withStyles({
  root: {
    "& .MuiFilledInput-underline:after": {
      border: 0
    },
    "& .MuiFilledInput-underline.Mui-error:after ": {
      border: 0
    },
    "& .MuiFilledInput-underline:before": {
      borderBottom: `${border} ${defaultColor}`,
      borderRadius: borderRadius
    },
    "& .MuiFilledInput-underline.Mui-error:before ": {
      borderBottomColor: defaultColor,
      borderRadius: borderRadius
    },
    "& .MuiFormHelperText-root": {
      fontFamily: "iranSanse",
      textAlign: "right",
      fontSize: "8px"
    },
    "& .MuiFormHelperText-contained": {
      margin: 0
    },
    "& label.Mui-focused": {
      color: defaultColor,

      transform: "translate(6px, -18px) scale(0.70) !important"
    },
    "& label.Mui-focused.Mui-error": {
      color: "#f44336"
    },
    "& label.MuiInputLabel-shrink": {
      transform: "translate(6px, -18px) scale(0.70) !important"
    },
    "& input": {
      fontFamily: "iranSanse",
      borderRadius: borderRadius,
      color: defaultColor,
      background: reigesterbackgroundGray,
      padding: "20px 12px 2px 12px"
    },
    "& textarea": {
      fontFamily: "iranSanse"
    },
    "& label": {
      fontFamily: "iranSanse",
      color: defaultColor,

      transformOrigin: "top right",
      left: "unset",
      right: "12px",
      top: "8px",
      transform: "translate(0, 24px) scale(1)",
      fontSize: "12px"
    },
    "&.MuiFilledInput-root.Mui-focused": {
      borderRadius: "5px !important"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: defaultColor,
        borderWidth: border,
        paddingLeft: 0,

        paddingRight: 8,
        "& legend": {
          textAlign: "right"
        }
      },
      "&:hover fieldset": {
        borderColor: defaultColor
      },
      "&.Mui-focused fieldset": {
        borderColor: defaultColor
      }
    }
  }
})(TextField);

export default CssTextField;
