import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Primary, orange, defaultColor, mainColor } from "../../../color";
import { borderRadius, border } from "../../../theme/style";

const useStyles = makeStyles(
  createStyles({
    content: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "72px",
      
    },
    homeBackground: {
      width: "100vw",
      minHeight: "100vh",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      // backgroundImage: "url(../../../static/images/caffe.jpeg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto",
      backgroundPosition: "center",
      overflow: "hidden"
    },
    homeBackgroundDiv: {
      display: "flex",
      justifyContent: "center",
      width: "98%",
      margin: "auto",
      
    },
    listStyle: {
      // borderBottom: "1px solid orange",
      padding: "4px",
      color: "#999499",
      fontSize: "12px"
    },
    imgBoxPhone: {
      width: "100%",
      height: "48px",
      backgroundImage: "url(../../../static/images/Phone.jfif)",
      backgroundSize: "cover",
      // background: '#f242f5',
      borderRadius: "5px",
      marginTop: "12px",
      textAlign: "center",
      paddingRight: "10px",
      lineHeight: "4",
      fontSize: "13px",
      color: "white",
      paddingTop: "0px"
    },
    imgBoxBall: {
      width: "100%",
      height: "48px",
      backgroundImage: "url(../../../static/images/Ball.jpg)",
      backgroundSize: "cover",
      // background: '#f242f5',
      borderRadius: "5px",
      marginTop: "12px",
      textAlign: "center",
      paddingRight: "10px",
      lineHeight: "4",
      fontSize: "13px",
      color: "white",
      paddingTop: "0px"
    },
    imgBoxRokh: {
      width: "100%",
      height: "48px",
      backgroundImage: "url(../../../static/images/Rokh.jpg)",
      backgroundSize: "cover",
      // background: '#f242f5',
      borderRadius: "5px",
      marginTop: "12px",
      textAlign: "center",
      paddingRight: "10px",
      lineHeight: "4",
      fontSize: "13px",
      color: "white",
      paddingTop: "0px"
    },
    imgBoxDiv: {
      display: "flex",
      justifyContent: "center"
    },

    myButton: {
      backgroundColor: `${orange} !important`,
      borderBottom: `1px solid ${Primary} !important`,
      color: defaultColor,
      marginTop: "10px"
    },
    filtered: {
      color: "white",
      border: `${border} ${orange}`,
      background: "#FF7700",
      padding: "3px",
      margin: "2px 3px",
      borderRadius: "5px",
      fontSize: "12px"
    },

    input: {
      "& input": {
        width: "100%",
        fontFamily: "iranSanse",
        boxShadow: " rgba(0, 0, 0, 0.5) 0px 0px 3px 0px",
        borderRadius: borderRadius,
        paddingRight: "42px",
        height: 16,
        // zIndex: "-100"
        // border: 'solid 1px #b5b2b1'
      },
      "& .Mui-focused": {
        borderColor: mainColor,
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: mainColor,
          border: border
        }
      },
      "& fieldset": {
        borderRadius: borderRadius
        // borderColor: '#000'
      }
    },
    searchDiv: {
      width: "98%",
      boxShadow: "0 0 0 2px white",
      padding: "8px 0px 0px 0px",
      ["@media (min-width:780px)"]: {
        width: "98%"
      },

      position: "fixed",
      background: defaultColor,
      zIndex: 9999
    },
    giridButton: {
      position: "fixed" as "fixed",
      display: "flex",
      width: "100vw",
      
      zIndex: 100,
      bottom: 0,
      justifyContent: "flex-start",
      ["@media (max-width:767px)"]: {
        marginRight: "-4px"
      }
    },

    girid_button: {
      background: defaultColor,
      display: "flex",
      justifyContent: "center",
      // paddingLeft: "2.5%"
    },
    girid__button: {
      display: "flex",
      justifyContent: "center"
    }
  })
);

export default useStyles;
