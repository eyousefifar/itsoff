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
  },
  camera: {
    // position: "absolute",
    top: 123,
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
