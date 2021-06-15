import { secondary } from "../../../../../color";

const useStyles = () => ({
  btnContainer: {
    margin: 0
  },
  center: {
    textAlign: "center" as "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: secondary,
    height: 69
  },
  box: {
    fontSize: 12,
    padding: "8px 12px",
    whiteSpace: "nowrap" as "nowrap"
  }
});

export default useStyles;
