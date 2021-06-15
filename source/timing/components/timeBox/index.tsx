import { Component } from "react";

import { withStyles } from "@material-ui/styles";

import Styles from "./style";
import Paper from "../../../../custom/paper";
import Button from "../../../../custom/button";
import {
  defaultButton,
  secondaryButton,
  secondary,
  Primary
} from "../../../../color";

import LoadingBox from "../../../../library/loadingBox";

import { timing } from "../../api";

interface IClasses {
  reverse: string;
}

interface IProps {
  at: number | string;
  handleButton: Function;
  uuid: string;
  status: boolean;
}

class Page extends Component<IProps, {}> {
  classes: IClasses;

  constructor(props: any) {
    super(props);
    this.classes = props.classes;
  }

  state = {
    loading: false,
    status: this.props.status
  };

  statusToggle = async () => {
    this.setState({ loading: true });
    try {
      await timing.statusToggleTime(this.props.uuid, {
        status: !this.state.status
      });
      this.setState({ status: !this.state.status });
    } catch (error) {
      console.error(error);
    }
    this.setState({ loading: false });
  };

  render() {
    const { classes } = this;
    const { status, loading } = this.state;
    const { at, handleButton } = this.props;
    return (
      <LoadingBox loading={loading} color={Primary}>
        <Paper className={classes.reverse}>
          <table style={{ width: "100%" }}>
            <tr>
              <td>ساعت</td>
              <td>
                {at} - {Number(at) + 1}
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <Button
                  noLoading
                  fullWidth
                  onClick={this.statusToggle}
                  background={status ? secondaryButton : defaultButton}
                  fontColor={status ? Primary : secondary}
                >
                  {status ? "غیرفعال کردن" : "فعال کردن"}
                </Button>
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
      </LoadingBox>
    );
  }
}

export default withStyles(Styles)(Page);
