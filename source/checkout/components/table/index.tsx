import { Component } from "react";

import Styles from "./style";
import { withStyles } from "@material-ui/styles";

import Paper from "../../../../custom/paper";
import Button from "../../../../custom/button";
import Title from "../../../../library/title";
import Link from "next/link";
import { CircularProgress } from "@material-ui/core";
import Typography from "../../../../custom/typography";

const Flickity =
  typeof window !== "undefined"
    ? require("react-flickity-component")
    : () => null;

let flkty: any;

const flickityOptions = {
  rightToLeft: true,
  cellAlign: "center",
  reloadOnUpdate: true,
  pageDots: false,
  prevNextButtons: false,
  contain: false,
  draggable: true,
  // freeScroll: true,
  selectedAttraction: 0.4,
  friction: 0.8
};
interface ITabel {
  capacity: number;
  floor: number;
  name: string;
  price: number;
  uuid: string;
}
interface IProps {
  tables: Array<ITabel>;
  loading: boolean;
  classes: IClasses;
}
interface IClasses {
  btnContainer: string;
  box: string;
  center: string;
}

class Tabel extends Component<IProps, {}> {
  state = {
    tabel: 0
  };

  classes: IClasses;

  constructor(props: any) {
    super(props);
    this.classes = props.classes;
  }

  // componentDidMount() {
  //   if (flkty && flkty.on) {
  //     flkty.on("settle", () => {
  //       console.log(flkty.selectedIndex)
  //       this.setState({ tabel: flkty.selectedIndex });
  //       sessionStorage.setItem(
  //         "table",
  //         btoa(
  //           unescape(
  //             encodeURIComponent(
  //               JSON.stringify(this.props.tables[flkty.selectedIndex])
  //             )
  //           )
  //         )
  //       );
  //     });
  //   }
  // }

  // componentDidUpdate(prp: any) {
  //   if (
  //     (!prp.tables.length && this.props.tables.length) ||
  //     prp.tables.length !== this.props.tables.length
  //   ) {
  //     if (flkty && flkty.on) {
  //       flkty.on("settle", () => {
  //         this.setState({ tabel: flkty.selectedIndex });
  //         sessionStorage.setItem(
  //           "table",
  //           btoa(
  //             unescape(
  //               encodeURIComponent(
  //                 JSON.stringify(this.props.tables[flkty.selectedIndex])
  //               )
  //             )
  //           )
  //         );
  //       });
  //     }
  //     // flkty.select(this.props.tables.length - 1);
  //     // console.log(flkty)
  //     // flkty.resize()
  //     setTimeout(() => {
  //       flkty.select(0);
  //     }, 100);
  //   }
  // }

  render() {
    const { tables, loading } = this.props;
    const { tabel } = this.state;
    const { classes } = this;

    return (
      <Paper
        style={{
          boxShadow:
            "0px 3px 3px 0px #0003,0px 1px 1px 0px #00000024,0px 2px 1px -1px #0000001f"
        }}
      >
        <Title label="میز خود را انتخاب کنید " />
        {loading ? (
          <div className={classes.center}>
            <CircularProgress color="inherit" />
          </div>
        ) : tables.length === 0 ? (
          <div className={classes.center}>
            <Typography variant="caption">
              {"متاسفانه در این تاریخ و ساعت میز خالی موجود نمی باشد"}
            </Typography>
          </div>
        ) : null}
        <>
          {tables.length ? (
            <Flickity
              flickityRef={(e: any) => (flkty = e)}
              className={"carousel"}
              elementType={"div"}
              options={flickityOptions}
            >
              {tables.map((tab, index) => (
                <div key={tab.uuid}>
                  <div
                    onClick={() => flkty.select(index)}
                    className={classes.box}
                    style={{
                      color: tabel === index ? "#000" : "#c7c7c7"
                    }}
                  >
                    {tab.name}
                  </div>
                </div>
              ))}
            </Flickity>
          ) : null}
          <div className={classes.btnContainer}>
            {tables.length && tables[tabel] && tables[tabel].uuid ? (
              <Link href="/productList" prefetch>
                <Button color="secondary" fullWidth>
                  <span>{"تایید رزرو"}</span>
                </Button>
              </Link>
            ) : null}
          </div>
        </>
      </Paper>
    );
  }
}

export default withStyles(Styles)(Tabel);
