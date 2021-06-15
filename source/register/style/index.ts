const background = require("../../../static/images/gradient.jpg");
const useStyles = () => ({
  header: {
    textAlign: "center" as "center",
    marginTop: 20,
    marginBottom: 20
  },
  flexBox: {
    display: "flex",
    flexDirection: "column" as "column",
    height: "100vh ",
    background: `url(${background})`,
    alignItems: "center",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "128% 800px",
    paddingTop: "20%",
    backgroundPositionY: "20%",
    backgroundPositionX: "97%"
  },
  main: {
    position: "relative" as "relative",
    flex: 1
  },
  button: {
    marginTop: "16px !important"
  },
  Primaryheader: {
    textAlign: "center" as "center",
    padding: "20px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default useStyles;
