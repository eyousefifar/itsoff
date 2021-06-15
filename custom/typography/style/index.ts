import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Primary } from "../../../color";

const CssTypography = withStyles({
  root: {
    fontFamily: "iranSanse",
    color: Primary
  }
})(Typography);

export default CssTypography;
