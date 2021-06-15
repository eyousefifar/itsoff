import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  PrimaryBackground,
  secondaryBackground,
  Primary,
  defaultColor
} from "../../../color";

const size = 100;

const useStyles = makeStyles(
  createStyles({
    header: {
      textAlign: "center",
      marginTop: 20,
      marginBottom: 20
    },
    mask: {
      position: "absolute",
      top: -6,
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: size,
      height: size,
      borderRadius: size,
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: 6,
      "& >img": {
        width: size
      }
    },

    box: {
      fontSize: 12,
      padding: "8px 12px",
      whiteSpace: "nowrap"
    },
    flexBox: {
      display: "flex",
      flexDirection: "column",
      height: "calc(100vh - 47px)",
      backgroundColor: secondaryBackground
    },
    profile: {
      position: "relative",
      textAlign: "center",
      marginTop: "75px !important",
      paddingTop: "70px !important",
      marginBottom: "-100px !important",
      zIndex: 100,
      // width: '80vw',
      margin: "auto"
    },
    rotate: {
      position: "absolute",
      height: 100,
      width: "110vw",
      backgroundColor: PrimaryBackground
    },
    main: {
      paddingTop: 100,
      position: "relative",
      flex: 1,
      backgroundColor: defaultColor
    },
    button: {
      marginTop: "16px !important"
    },
    reverse: {
      backgroundColor: PrimaryBackground,
      marginTop: 16,
      marginBottom: 8,
      marginLeft: 0,
      marginRight: 0
    },
    camera: {
      // position: "absolute",
      top: 0,
      right: 0,
      left: 12,

      "& >svg": {
        cursor: "pointer"
      }
    },
    fatherDivCamera: {
      display: "flex",
      justifyContent: "center",
      "& >div": {
        padding: "4px 32px",
        background: "rgba(211, 206, 206, 0.8)",
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px"
      }
    },
    center: {
      color: Primary,
      textAlign: "center" as "center"
    }
  })
);

export default useStyles;
