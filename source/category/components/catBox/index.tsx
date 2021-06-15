import { Component } from "react";

import { withStyles } from "@material-ui/styles";

import Styles from "./style";
import Paper from "../../../../custom/paper";
import Button from "../../../../custom/button";
import Typography from "../../../../custom/typography";
import { Primary } from "../../../../color";
import { Scrollbars } from "react-custom-scrollbars";

interface IClasses {
  reverse: string;
  mask: string;
}

interface IProps {
  name: string;
  handleButton: Function;
  uuid: string;
  desc: string;
  image: string;
}

class Page extends Component<IProps, {}> {
  classes: IClasses;

  constructor(props: any) {
    super(props);
    this.classes = props.classes;
  }

  render() {
    const { classes } = this;
    const { name, desc, image, handleButton } = this.props;
    return (
      <Paper className={classes.reverse}>
        <div className={classes.mask}>
          <img src={image} />
        </div>
        <table style={{ width: "100%" }}>
          <tr>
            <td>نام</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td style={{ width: "80px" }}> توضیحات</td>
            <td style={{ height: 100 }}>
              <Typography variant="caption">
                <Scrollbars
                  autoHide
                  autoHideDuration={900}
                  style={{
                    textAlign: "right",
                    height: "60px",
                    direction: "ltr",
                    marginTop: 10
                  }}
                >
                  {desc}
                </Scrollbars>
              </Typography>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Button
                onClick={() => handleButton("edit", this.props)}
                color="secondary"
                fullWidth
              >
                ویرایش
              </Button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Button
                onClick={() => handleButton("delete", this.props)}
                color="secondary"
                fontColor={Primary}
                fullWidth
              >
                حذف
              </Button>
            </td>
          </tr>
        </table>
      </Paper>
    );
  }
}

export default withStyles(Styles)(Page);
