import { Primary, defaultColor, secondary } from "../../../../color";

const useStyles = () => ({
  backet: {
    color: `${secondary} !important`
  },
  center: {
    textAlign: "center" as "center",
    marginBottom: "10px"
  },
  badage: {
    color: Primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  end: {
    padding: 10,
    marginTop: 20,
    border: `1px solid ${defaultColor}`,
    background: "#f0f5f5"
  },
  discount: {
    background: "#f0f5f5",
    padding: "0px"
  }
});

export default useStyles;
