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
  text: string;
  User: IUser;
  handleButton: Function;
  handleDelete: Function;

  uuid: string;
}

interface IUser {
  name: string;
}

class Page extends Component<IProps, {}> {
  classes: IClasses;

  constructor(props: any) {
    super(props);
    this.classes = props.classes;
  }

  render() {
    const { classes } = this;
    const { text, handleButton, User, handleDelete } = this.props;
    return (
      <Paper className={classes.reverse}>
        <table style={{ width: "100%" }}>
          <tr>
            <td>کاربر</td>
            <td>{User.name}</td>
          </tr>
          <tr>
            <td>نظر</td>
            <td>{text}</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Button
                onClick={() => handleButton(this.props)}
                color="secondary"
                fullWidth
              >
                {"تایید"}
              </Button>
            </td>
            <td colSpan={1}>
              <Button
                onClick={() => handleDelete()}
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
