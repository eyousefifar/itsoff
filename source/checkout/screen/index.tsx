// import DateTime from "../components/dateTime";
// import Tabel from "../components/table";
import Posision from "../components/position";
import { Component } from "react";

// import { tabel } from "../api";

class Reserve extends Component {
  state = {
    tabels: [],
    loading: true
  };

  change = async () => {
    // this.setState({ loading: true, tabels: [] });
    // if (b.uuid) {
    //   try {
    //     const { data } = await tabel.getByTyming(b.uuid, a);
    //     this.setState({ tabels: data });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // } else {
    //   this.setState({ tabels: [] });
    // }
    // // setTimeout(() => {
    // this.setState({ loading: false });
    // }, 150);
  };

  render() {
    // const { tabels, loading } = this.state;
    return (
      <>
        {/* <DateTime onChange={this.change} /> */}
        {/* <Tabel loading={loading} tables={tabels} /> */}
        <Posision />
      </>
    );
  }
}

export default Reserve;
