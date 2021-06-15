import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  createStyles({
    img: {
      width: "250px"
      // paddingRight: '13px',
      // paddingTop: '15px'
    },
    discountCode: {
      border: "1px solid orange",
      textAlign: "center",
      color: "#787777",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      margin: "10px 24px 24px 24px",
      // padding: '6px ',
      borderRadius: "5px"
    }
  })
);

export default useStyles;
