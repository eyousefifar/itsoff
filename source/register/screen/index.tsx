import { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

import Styles from "../style";
import Offcenter from "../assets/svg/Offcenter";

import StepOne from "../components/stepOne";
import StepTwo from "../components/stepTwo";
import StepThree from "../components/stepThree";

const size = "100";

interface IClasses {
  main: string;
  flexBox: string;
  header: string;
  button: string;
  Primaryheader: string;
}

class Register extends Component {
  classes: IClasses;
  constructor(props: any) {
    super(props);
    this.classes = props.classes;
  }

  state = {
    step: 1,
    phone: ""
  };

  setData = (data: any) => {
    this.setState({ ...data });
  };

  render() {
    let path = "/";
    if (typeof window !== "undefined") {
      path = window.location.pathname;
    }
    const { classes } = this;
    const { step } = this.state;
    return (
      <div className={classes.flexBox}>
        <div
          className={
            path === "/register" ? classes.Primaryheader : classes.header
          }
        >
          <Offcenter width={size} height={size} />
        </div>
        <Grid xs={9} sm={9} md={6} lg={6} xl={6} className={classes.main} item>
          {step === 1 ? (
            <StepOne setState={this.setData} />
          ) : step === 2 ? (
            <StepTwo setState={this.setData} phone={this.state.phone} />
          ) : (
            <StepThree phone={this.state.phone} />
          )}
        </Grid>
      </div>
    );
  }
}

export default withStyles(Styles)(Register);
