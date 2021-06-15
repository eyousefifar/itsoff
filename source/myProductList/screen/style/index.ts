import { Primary, defaultButton } from "../../../../color";
import { borderRadius } from "../../../../theme/style";

const useStyles = () => ({
  backet: {
    margin: "8px 6px 12px 6px",
    width: "calc(100vw - 12px)"
  },
  center: {
    color: Primary,
    textAlign: "center" as "center"
  },
  loader: {
    color: Primary,
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  badage: {
    minHeight: 25,
    minWidth: 25,
    backgroundColor: defaultButton,
    color: Primary,
    borderRadius: borderRadius,
    display: "flex",
    textAlign: "center" as "center",
    justifyContent: "center"
  },
  ButtonPosition: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    zIndex: 30,
    bottom: 0,
    right: 0,
    left: 0
  }
});

export default useStyles;
