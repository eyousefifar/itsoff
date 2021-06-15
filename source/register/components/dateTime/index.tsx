import { Component } from "react";

import moment from "moment-jalaali";
import { withStyles } from "@material-ui/styles";

import Styles from "./style";
import Paper from "../../../../custom/paper";
import Title from "../../../../library/title";
import { defaultColor } from "../../../../color";

const Flickity =
  typeof window !== "undefined"
    ? require("react-flickity-component")
    : () => null;

let flkty1: any;
let flkty2: any;
let flkty3: any;

const monthes = [
  { id: 1, name: "فروردین" },
  { id: 2, name: "اردیبهشت" },
  { id: 3, name: "خرداد" },
  { id: 4, name: "تیر" },
  { id: 5, name: "مرداد" },
  { id: 6, name: "شهریور" },
  { id: 7, name: "مهر" },
  { id: 8, name: "آبان" },
  { id: 9, name: "آذر" },
  { id: 10, name: "دی" },
  { id: 11, name: "بهمن" },
  { id: 12, name: "اسفند" }
];

const flickityOptions = {
  rightToLeft: true,
  cellAlign: "center",
  pageDots: false,
  prevNextButtons: false,
  contain: false,
  draggable: true,
  selectedAttraction: 0.4,
  friction: 0.8
};

interface IClasses {
  reverse: string;
  box: string;
}

class DateTime extends Component {
  classes: IClasses;
  onChange: Function;
  name: string;

  constructor(props: any) {
    super(props);
    this.classes = props.classes;
    this.onChange = props.onChange;
    this.name = props.name;
  }

  state = {
    days: [{ id: 1, name: "1" }],
    years: [{ id: 1, name: "1398" }],
    year: 0,
    day: 1,
    month: 0
  };

  componentDidMount() {
    const m = moment(),
      y = m.jYear(),
      mo = m.jMonth();
    if (this.state.years.length < 2) {
      let ys = [],
        i;
      for (i = 0; i < 70; i++) {
        ys.push({ id: i + 1, name: (y - i).toString() });
      }
      this.setState({ years: ys });
    }

    if (this.state.days.length < 2) {
      let days = [],
        i,
        d = moment.jDaysInMonth(y, mo);
      for (i = 1; i <= d; i++) {
        days.push({ id: i, name: i.toString() });
      }
      this.setState({ days });
    }

    if (flkty3 && flkty3.on) {
      flkty3.on("settle", async () => {
        await this.setState({ year: flkty3.selectedIndex });
        this.generateDayes();
        this.handleChange();
      });
    }
    if (flkty1 && flkty1.on) {
      flkty1.on("settle", async () => {
        await this.setState({ month: flkty1.selectedIndex });
        this.generateDayes();
        this.handleChange();
      });
    }
    if (flkty2 && flkty2.on) {
      flkty2.on("settle", async () => {
        await this.setState({ day: flkty2.selectedIndex + 1 });
        this.handleChange();
      });
    }
  }

  handleChange = () => {
    let date = `${this.state.years[this.state.year].name}/${this.state.month +
      1}/${this.state.day}`;
    let mdate = moment(date, "jYYYY/jMM/jDD").format("MM-DD-YYYY");
    if (this.onChange) {
      this.onChange({ target: { value: mdate, name: this.name } });
    }
  };

  generateDayes = () => {
    let days = [],
      i,
      day = this.state.day,
      d = moment.jDaysInMonth(
        Number(this.state.years[this.state.year].name),
        this.state.month
      );
    for (i = 1; i <= d; i++) {
      days.push({ id: i, name: i.toString() });
    }
    if (day > d) {
      day = 1;
      flkty2.select(0);
    }
    this.setState({ days, day });
  };

  render() {
    const { classes } = this;
    const { days, day, month, years, year } = this.state;
    return (
      <Paper className={classes.reverse}>
        <Title color={defaultColor} label="تاریخ تولد خود را تعیین کنید" />
        <Flickity
          flickityRef={(e: any) => (flkty3 = e)}
          className={"carousel-333"}
          elementType={"div"}
          options={flickityOptions}
        >
          {years.map(da => (
            <span
              onClick={() => flkty3.select(da.id - 1)}
              className={classes.box}
              style={{
                color: year === da.id - 1 ? "#fff" : "#717171"
              }}
              key={da.id}
            >
              {da.name}
            </span>
          ))}
        </Flickity>

        <Flickity
          flickityRef={(e: any) => (flkty1 = e)}
          className={"carousel"}
          elementType={"div"}
          options={flickityOptions}
        >
          {monthes.map(mo => (
            <span
              onClick={() => flkty1.select(mo.id - 1)}
              className={classes.box}
              style={{
                color: month === mo.id - 1 ? "#fff" : "#717171"
              }}
              key={mo.id}
            >
              {mo.name}
            </span>
          ))}
        </Flickity>
        <Flickity
          flickityRef={(e: any) => (flkty2 = e)}
          className="carousel-222"
          elementType={"div"}
          options={flickityOptions}
        >
          {days.map(da => (
            <span
              onClick={() => flkty2.select(da.id - 1)}
              className={classes.box}
              style={{
                color: day === da.id ? "#fff" : "#717171"
              }}
              key={da.id}
            >
              {da.name}
            </span>
          ))}
        </Flickity>
      </Paper>
    );
  }
}

export default withStyles(Styles)(DateTime);
