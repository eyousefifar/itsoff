import { Primary } from "../../../../color";

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
  }
});

export default useStyles;
