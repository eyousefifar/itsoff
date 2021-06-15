import DateTime from "../components/dateTime";
// import Tabel from "../components/table";
// import Posision from "../components/position";
import { Component } from "react";

import { reserves } from "../api";

import Paper from "../../../custom/paper";
import Button from "../../../custom/button";

import Arrow from "../assets/svg/arrow";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import moment from "moment-jalaali";

interface IState {
  tabels: Array<IReserve>;
  loading: boolean;
  from: string;
  to: string;
}

interface ITabel {
  name: string;
}

interface ITiming {
  at: number;
}

interface IUser {
  name: string;
  phone: string;
}

interface IProduct {
  name: string;
}
interface IItem {
  Product: IProduct;
  count: number;
  uuid: string;
}

interface IReserve {
  uuid: string;
  day: string;
  totalPrice: number;
  paymode: number;
  createdAt: string;
  Tabel: ITabel;
  Timing: ITiming;
  User: IUser;
  ReserveItems: Array<IItem>;
}

class Reserve extends Component {
  state: IState = {
    tabels: [],
    loading: false,
    from: "",
    to: ""
  };

  change = async (name: string, value: string) => {
    this.setState({ [name]: value });
  };

  getReserves = async () => {
    this.setState({ loading: true });
    try {
      const { from, to } = this.state;
      const { data } = await reserves.getReserves(from, to);
      this.setState({ tabels: data });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    this.setState({ loading: false });
  };

  render() {
    const { tabels, loading } = this.state;
    return (
      <Paper>
        <Grid container spacing={1} item>
          <Grid item xs={12} md={6}>
            <DateTime name="from" onChange={this.change} title="از تاریخ" />
          </Grid>
          <Grid item xs={12} md={6}>
            <DateTime name="to" today onChange={this.change} title="تا تاریخ" />
          </Grid>
        </Grid>
        <Button
          onClick={this.getReserves}
          loading={loading}
          fullWidth
          color="primary"
        >
          نمایش
        </Button>
        {tabels.length ? (
          <div style={{ maxWidth: "100%", overflow: "auto" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontFamily: "iranSanse" }} align="right">
                    نام
                  </TableCell>
                  <TableCell style={{ fontFamily: "iranSanse" }} align="right">
                    میز
                  </TableCell>
                  <TableCell style={{ fontFamily: "iranSanse" }} align="right">
                    تاریخ
                  </TableCell>
                  <TableCell style={{ fontFamily: "iranSanse" }} align="right">
                    ساعت
                  </TableCell>
                  <TableCell style={{ fontFamily: "iranSanse" }} align="right">
                    شماره همراه
                  </TableCell>
                  <TableCell style={{ fontFamily: "iranSanse" }} align="right">
                    سفارشات
                  </TableCell>
                  <TableCell style={{ fontFamily: "iranSanse" }} align="right">
                    مبلغ
                  </TableCell>
                  <TableCell style={{ fontFamily: "iranSanse" }} align="right">
                    تاریخ ثبت
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tabels.map(row => (
                  <TableRow key={row.uuid}>
                    <TableCell
                      style={{ fontFamily: "iranSanse", whiteSpace: "nowrap" }}
                      align="right"
                      component="th"
                      scope="row"
                    >
                      {row.User.name}
                    </TableCell>
                    <TableCell
                      style={{ fontFamily: "iranSanse", whiteSpace: "nowrap" }}
                      align="right"
                    >
                      {row.Tabel.name}
                    </TableCell>
                    <TableCell
                      style={{ fontFamily: "iranSanse", whiteSpace: "nowrap" }}
                      align="right"
                    >
                      {moment(row.day).format("jYY/jM/jD")}
                    </TableCell>
                    <TableCell
                      style={{ fontFamily: "iranSanse", whiteSpace: "nowrap" }}
                      align="right"
                    >
                      {row.Timing.at} - {row.Timing.at + 1}
                    </TableCell>
                    <TableCell
                      style={{ fontFamily: "iranSanse", whiteSpace: "nowrap" }}
                      align="right"
                    >
                      {row.User.phone}
                    </TableCell>
                    <TableCell
                      style={{ fontFamily: "iranSanse", whiteSpace: "nowrap" }}
                      align="right"
                    >
                      {row.ReserveItems.length ? (
                        <ExpansionPanel>
                          <ExpansionPanelSummary expandIcon={<Arrow />}>
                            <span>سفارشات</span>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                            <table style={{ width: "100%" }}>
                              {row.ReserveItems.map(x => (
                                <tr key={x.uuid}>
                                  <td>{x.Product.name}</td>
                                  <td>{x.count}</td>
                                </tr>
                              ))}
                            </table>
                          </ExpansionPanelDetails>
                        </ExpansionPanel>
                      ) : null}
                    </TableCell>
                    <TableCell
                      style={{ fontFamily: "iranSanse", whiteSpace: "nowrap" }}
                      align="right"
                    >
                      {row.totalPrice}
                    </TableCell>
                    <TableCell
                      style={{ fontFamily: "iranSanse", whiteSpace: "nowrap" }}
                      align="right"
                    >
                      {moment(row.createdAt).format("jYY/jM/jD")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : null}
      </Paper>
    );
  }
}

export default Reserve;
