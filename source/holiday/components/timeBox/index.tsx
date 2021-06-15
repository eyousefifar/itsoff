import { Component } from "react";

import { withStyles } from "@material-ui/styles";

import Styles from "./style";
import Paper from "../../../../custom/paper";
import Button from "../../../../custom/button";
import moment from "moment-jalaali";

interface IClasses {
  reverse: string;
}

interface IProps {
  day: string;
  handleButton: Function;
  uuid: string;
}

class Page extends Component<IProps, {}> {
  classes: IClasses;

  constructor(props: any) {
    super(props);
    this.classes = props.classes;
  }

  render() {
    moment.loadPersian({ dialect: "persian-modern" });

    moment.updateLocale("fa", {
      relativeTime: {
        future: "%s بعد"
      }
    });
    const { classes } = this;
    const { day, handleButton } = this.props;
    return (
      <Paper className={classes.reverse}>
        <table style={{ width: "100%" }}>
          <tr>
            <td>روز</td>
            <td>{moment(day).format("dddd")}</td>
          </tr>
          <tr>
            <td>تاریخ</td>
            <td>{moment(day).format("jDD jMMMM  jYYYY")}</td>
          </tr>
          <tr>
            <td>فاصله زمانی</td>
            <td>{moment(day).fromNow()}</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Button
                onClick={() => handleButton(this.props)}
                color="secondary"
                fullWidth
              >
                {"حذف"}
              </Button>
            </td>
          </tr>
        </table>
      </Paper>
    );
  }
}

export default withStyles(Styles)(Page);
