import { Component } from "react";

import moment from "moment-jalaali";
import { withStyles } from "@material-ui/styles";

import Styles from "./style";
import Paper from "../../../../custom/paper";
import Title from "../../../../library/title";

import { timing, holiday } from "../../api";

const Flickity =
  typeof window !== "undefined"
    ? require("react-flickity-component")
    : () => null;

let flkty1: any;
let flkty2: any;
let flkty3: any;

const moName = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند"
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
  box: string;
  height: string;
}

interface IProps {
  classes: IClasses;
  onChange: any;
}

class DateTime extends Component<IProps, {}> {
  classes: IClasses;
  onChange: any;

  constructor(props: any) {
    super(props);
    this.classes = props.classes;
    this.onChange = props.onChange;
  }

  state = {
    days: [{ id: 1, name: "", date: "" }],
    monthes: [{ id: 1, name: "", date: "" }],
    time: { id: 0, uuid: "", name: "" },
    day: 1,
    month: 0,
    m: "",
    holidays: [{ day: "", uuid: "" }],
    times: [{ id: 0, uuid: "", name: "" }],
    mdate: ""
  };

  componentDidMount() {
    // this.getToday();
    // this.getTiming();
  }

  getTiming = async () => {
    try {
      const { data } = await timing.getForSeller();

      let times = data.map((a: any, index: number) => {
        return { id: index + 1, ...a, name: `${a.at + 1}-${a.at}` };
      });
      await this.setState({ times });
      flkty3.select(0);
      // setTimeout(() => {
      //   if (!this.state.time.uuid)
      //     flkty3.select(0);
      // }, 500);
    } catch (error) {
      console.error(error);
    }
  };

  getToday = async () => {
    try {
      const m = moment(),
        y = m.jYear(),
        mo = m.jMonth();
      this.setState({ m: new Date() });

      let monthes = [],
        i;
      for (i = 0; i < 3; i++) {
        if (mo + i < 12)
          monthes.push({
            id: i + 1,
            name: moName[mo + i],
            date: `${y}/${mo + i + 1}`
          });
        else
          monthes.push({
            id: i + 1,
            name: moName[mo + i - 12],
            date: `${y + 1}/${mo + i - 11}`
          });
      }
      this.setState({ monthes });
      flkty1.select(0);
      await this.getHoliday();
      this.generateDayes();

      if (flkty3 && flkty3.on) {
        flkty3.on("settle", async () => {
          await this.setState({
            time: this.state.times[flkty3.selectedIndex] || {
              id: 0,
              uuid: "",
              name: ""
            }
          });
          // this.generateDayes();
          this.handleChange();
        });
      }
      if (flkty1 && flkty1.on) {
        flkty1.on("settle", async () => {
          await this.setState({ month: flkty1.selectedIndex });
          // this.generateDayes();
          // this.handleChange();
        });
      }
      if (flkty2 && flkty2.on) {
        flkty2.on("settle", async () => {
          await this.setState({ day: flkty2.selectedIndex + 1 });
          this.handleChange();
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = () => {
    let mdate = this.state.days[this.state.day - 1].date;
    if (this.onChange) {
      this.onChange(mdate, this.state.time);
    }
    this.setState({ mdate });
    let datTime = btoa(
      JSON.stringify({
        date: mdate,
        time: this.state.time.name,
        at: this.state.time.uuid
      })
    );
    sessionStorage.setItem("dateTime", datTime);
  };

  getHoliday = async () => {
    try {
      const data = await holiday.getForSeller();
      await this.setState({ holidays: data.data });
    } catch (error) {
      console.error(error);
    }
  };

  generateDayes = () => {
    const m = moment(this.state.m);
    const holidays = this.state.holidays.map(h =>
      moment(h.day).format("MM-DD-YYYY")
    );
    let days = [],
      i = 1,
      j = 1,
      day = this.state.day,
      date = this.state.monthes[this.state.month].date.split("/"),
      d = moment.jDaysInMonth(Number(date[0]), Number(date[1]) - 1),
      today = m.jDate();
    for (i; i <= d; i++) {
      let to = moment(`${date[0]}/${date[1]}/${i}`, "jYYYY/jM/jD").format(
        "MM-DD-YYYY"
      );
      let index = holidays.indexOf(to);

      if (index < 0) {
        days.push({ id: j, name: i.toString(), date: to });
        j++;
      }
    }
    let findIndexday = days.findIndex(x => x.name === today.toString());
    day = 1;
    this.setState({ days, day });
    flkty2.select(findIndexday);
    if (this.state.time && !this.state.time.uuid) flkty3.select(0);
  };

  render() {
    const { classes } = this;
    const { days, day, month, time, monthes, times } = this.state;
    return (
      <Paper style={{ boxShadow: "none", borderTop: "1px solid #bab7b6" }}>
        <Title label="زمان رزرو خود را تعیین کنید" />
        <div className={classes.height}>
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
                  color: month === mo.id - 1 ? "#000" : "#c7c7c7"
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
                  color: day === da.id ? "#000" : "#c7c7c7"
                }}
                key={da.id}
              >
                {da.name}
              </span>
            ))}
          </Flickity>

          <Flickity
            flickityRef={(e: any) => (flkty3 = e)}
            className={"carousel-333"}
            elementType={"div"}
            options={flickityOptions}
          >
            {times.map(da => (
              <span
                onClick={() => flkty3.select(da.id - 1)}
                className={classes.box}
                style={{
                  color: time.id === da.id ? "#000" : "#c7c7c7"
                }}
                key={da.id}
              >
                {da.name}
              </span>
            ))}
          </Flickity>
        </div>
      </Paper>
    );
  }
}

export default withStyles(Styles)(DateTime);
