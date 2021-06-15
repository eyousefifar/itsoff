import { Primary } from "../../../../../color";
import { borderRadius } from "../../../../../theme/style";

const useStyles = () => ({
  root: {
    width: "100%",
    "&>div ": {
      border: `1px solid ${Primary}`
    },
    "&>.MuiExpansionPanel-rounded:last-child": {
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10
    },
    "&>.MuiExpansionPanel-rounded:first-child": {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
    },
    "& .MuiExpansionPanelDetails-root": {
      padding: "8px 6px"
    }
  },
  image: {
    maxHeight: 20,
    maxWidth: 20
  },
  botton: {
    borderRadius: borderRadius
  }
});

export default useStyles;
