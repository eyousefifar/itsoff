import { Primary } from "../../../../../color";
import {
  borderRadius,
  border,
  marginAndPadding_sm
} from "../../../../../theme/style";

const Styles = () => ({
  label: {
    fontSize: "10px"
  },
  table: {
    width: "100%"
  },
  Fathertable: {
    border: `${border} ${Primary}`,
    borderRadius: borderRadius,
    padding: marginAndPadding_sm
  },
  textRight: {
    textAlign: "right" as "right",
    display: "flex",
    width: "48%",
    justifyContent: "space-between",
    "& span": {
      display: "flex",
      alignItems: "center",

      "& span": {
        display: "flex",
        padding: "0 3px",
        alignItems: "center"
      }
    }
  },
  textInput: {
    width: "calc(100% - 20px)",
    borderRadius: borderRadius,
    padding: marginAndPadding_sm,
    border: border,
    fontFamily: "iranSanse"
  },
  snak: {
    fontFamily: "iranSanse",
    fontSize: 10,
    color: "#fff"
  },
  flex: {
    display: "flex",
    flexWrap: "wrap" as "wrap",
    justifyContent: "space-between"
  },
  labelValue: {
    fontFamily: "iranSanse",
    fontSize: 12
  }
});

export default Styles;
