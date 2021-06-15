import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { Primary } from "../../../color";

const CssTextField = withStyles({
  root: {
    "& .MuiInputBase-root": {
      fontFamily: "iranSanse !important"
    },
    "& .MuiButtonBase-root": {
      fontFamily: "iranSanse !important"
    },
    "& .MuiFilledInput-underline:after": {
      borderBottom: `2px solid ${Primary}`
    },
    "& .MuiFilledInput-underline.Mui-error:after ": {
      borderBottomColor: "#f44336"
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
      fontFamily: "iranSanse"
    },
    "& label": {
      fontFamily: "iranSanse",
      color: Primary,
      transformOrigin: "top right",
      left: "unset",
      right: 0,
      transform: "translate(0, 24px) scale(1)"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: Primary,
        borderWidth: 2,
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
      },
      "& .MuiSvgIcon-root": {
        right: "unset !important",
        left: 0
      }
    }
  }
})(FormControl);

export default CssTextField;
