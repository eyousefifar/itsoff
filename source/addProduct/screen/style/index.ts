import { defaultButton, defaultColor, secondary } from "../../../../color";

const useStyles = () => ({
  backet: {
    color: `${secondary} !important`
  },
  center: {
    textAlign: "center" as "center",
    marginBottom: "10px"
  },
  badage: {
    color: defaultButton,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  end: {
    padding: 10,
    marginTop: 20,
    border: `1px solid ${defaultColor}`
  },
  camera: {
    // position: "absolute",
    top: 138,
    right: 0,
    left: 0,
    bottom: 0,

    "& >svg": {
      cursor: "pointer"
    }
  },
  fatherDivCamera: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& >div": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "3px 40px",
      background: "rgba(211, 206, 206, 0.8)",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px"
    }
  }
});

export default useStyles;
