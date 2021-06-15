import { Component } from "react";

import { withStyles } from "@material-ui/styles";

import Styles from "./style";
import Paper from "../../../../custom/paper";
import Button from "../../../../custom/button";
import { Primary } from "../../../../color";

interface IClasses {
  reverse: string;
}

interface IProps {
  name: string;
  handleButton: Function;
  uuid: string;
  floor: number | string;
  capacity: number | string;
  price: number | string;
}

class Page extends Component<IProps, {}> {
  classes: IClasses;

  constructor(props: any) {
    super(props);
    this.classes = props.classes;
  }

  render() {
    const { classes } = this;
    const { name, capacity, floor, price, handleButton } = this.props;
    return (
      <Paper className={classes.reverse}>
        <table style={{ width: "100%" }}>
          <tr>
            <td>نام</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>ظرفیت</td>
            <td>{capacity}</td>
          </tr>
          <tr>
            <td>طبقه</td>
            <td>{floor}</td>
          </tr>
          <tr>
            <td>قیمت</td>
            <td>{price}</td>
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
