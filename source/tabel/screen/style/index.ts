import { Primary, defaultColor } from "../../../../color";

const useStyles = () => ({
  loader: {
    color: Primary,
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  center: {
    color: Primary,
    textAlign: "center" as "center"
  },
  ButtonPosition: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    zIndex: 30,
    bottom: 0,
    right: 0,
    left: 0,
    background: defaultColor,
    padding: "20px 0"
  }
});

export default useStyles;
