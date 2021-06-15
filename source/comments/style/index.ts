import { borderRadius, border } from "../../../theme/style";
import { defaultColor } from "../../../color";

const Styles = () => ({
  label: {
    fontSize: "10px"
  },
  table: {
    width: "100%"
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
  comment: {
    paddingBottom: 50
  },
  flex: {
    display: "flex",
    flexWrap: "wrap" as "wrap",
    justifyContent: "space-between"
  },
  textInput: {
    width: "calc(100% - 20px)",
    borderRadius: borderRadius,
    padding: 9,
    border: border,
    fontFamily: "iranSanse"
  },
  snak: {
    fontFamily: "iranSanse",
    fontSize: 10,
    color: "#fff"
  },
  labelValue: {
    fontFamily: "iranSanse",
    fontSize: 12
  },
  giridButton: {
    position: "fixed" as "fixed",
    display: "flex",
    width: "100vw",
    zIndex: 100,
    bottom: 0,
    justifyContent: "flex-start",
    background: defaultColor
  },
  girid_button: {
    background: defaultColor,
    margin: "6px 0 6px 0",
    display: "flex",
    justifyContent: "center",
    padding: "0 1% 0 1.5%"
  },
  girid__button: {
    display: "flex",
    justifyContent: "center"
  }
});

export default Styles;
