import Dialog from "@material-ui/core/Dialog";

import useStyles from "./style";
const image = require("../../assets/img/qCode.png");

const Error = (props: any) => {
  const classes = useStyles();

  return (
    <Dialog fullWidth onClose={() => props.setOpen(false)} open={props.open}>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0px 24px"
          }}
        >
          <img className={classes.img} src={image} />
        </div>
        <div className={classes.discountCode}>
          <div style={{ fontSize: "13px" }}>کد تخفیف شما:</div>
          <span> 64521935</span>
        </div>
      </div>
    </Dialog>
  );
};

export default Error;
