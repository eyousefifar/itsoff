import { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Grid from "@material-ui/core/Grid";

import Styles from "./style";

import { withStyles } from "@material-ui/styles";
import Typography from "../../../../custom/typography";
import ExpandMoreIcon from "../../assets/svg/arrow";

import { category } from "../../api";

import Button from "../buttomNavigate";
import { borderRadius } from "../../../../theme/style";

interface IClasses {
  root: string;
  image: string;
}

class Acr extends Component<any, {}> {
  classes: IClasses;
  constructor(props: any) {
    super(props);
    this.classes = props.classes;
  }

  state = {
    expanded: false,
    list: [{ uuid: "", image: "", name: "" }]
  };

  componentDidMount() {
    this.getCategory();
  }

  getCategory = async () => {
    try {
      let Suggest: any;
      let unSuggest: any;
      const { data } = await category.getAllCat();
      unSuggest = data.filter(
        (x: { name: string }) => x.name !== "پیشنهاد کافه چی"
      );
      Suggest = data.find(
        (x: { name: string }) => x.name === "پیشنهاد کافه چی"
      );
      if (Suggest) {
        unSuggest.unshift(Suggest);
      }

      await this.setState({ list: unSuggest });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { expanded, list } = this.state;
    const { classes } = this;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          TransitionProps={{ timeout: 0 }}
          expanded={expanded}
          onChange={() => {
            this.props.isExpanded(!expanded);
            this.setState({ expanded: !expanded });
          }}
        >
          <ExpansionPanelSummary
            style={{ height: 40, minHeight: 40, borderRadius: borderRadius }}
            expandIcon={<ExpandMoreIcon width={14} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              style={{ borderRadius: borderRadius }}
              variant="caption"
            >
              مشاهده دسته بندی ها
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails id="Expansion">
            <Grid container spacing={1}>
              {/* <Grid item xs={12}>
                <Button>
                  <Grid
                    container
                    spacing={1}
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <Chi width="20" height="20" />
                    </Grid>
                    <Grid item>
                      <Typography variant="caption">پیشنهاد کافه چی</Typography>
                    </Grid>
                  </Grid>
                </Button>
              </Grid>
               */}
              {list.map(btn => (
                <Grid
                  key={btn.uuid}
                  item
                  xs={btn.name === "پیشنهاد کافه چی" ? 12 : 6}
                  sm={btn.name === "پیشنهاد کافه چی" ? 12 : 4}
                  md={btn.name === "پیشنهاد کافه چی" ? 12 : 3}
                  lg={btn.name === "پیشنهاد کافه چی" ? 12 : 2}
                  xl={btn.name === "پیشنهاد کافه چی" ? 12 : 1}
                >
                  <Button
                    onClick={() => {
                      this.props.scroll(btn.uuid);
                      this.props.isExpanded(!expanded);
                      this.setState({ expanded: !expanded });
                    }}
                  >
                    <img className={classes.image} src={btn.image} />
                    &nbsp; &nbsp;
                    <Typography style={{ fontSize: 10 }} variant="caption">
                      {btn.name}
                    </Typography>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(Styles)(Acr);
