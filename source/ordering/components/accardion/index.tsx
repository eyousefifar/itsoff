import { useState } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Grid from "@material-ui/core/Grid";
import Button1 from "@material-ui/core/Button";

import useStyles from "../../style";
import Typography from "../../../../custom/typography";
import ExpandMoreIcon from "../../assets/svg/arrow";
import Chi from "../../assets/svg/chi";

import cake from "../../assets/svg/cake";
import coffee from "../../assets/svg/coffee";
import coldDrinks from "../../assets/svg/coldDrinks";
import food from "../../assets/svg/food";
import fullCoffee from "../../assets/svg/fullCoffee";
import greenDrinks from "../../assets/svg/greenDrinks";
import greenTea from "../../assets/svg/greenTea";
import healthyDrinks from "../../assets/svg/healthyDrinks";
import herbalDrinks from "../../assets/svg/herbalDrinks";
import iceCream from "../../assets/svg/iceCream";
import salad from "../../assets/svg/salad";
import breakfast from "../../assets/svg/breakfast";

import Button from "../buttomNavigate";

const list = [
  { id: 1, icon: breakfast, text: "صبحانه", width: 20, height: 20 },
  { id: 2, icon: fullCoffee, text: "قهوه", width: 20, height: 20 },
  { id: 3, icon: cake, text: "کیک و دسر", width: 20, height: 20 },
  { id: 4, icon: coffee, text: "قهوه های دمی", width: 20, height: 20 },
  { id: 5, icon: greenTea, text: "چای تخصصی", width: 20, height: 20 },
  { id: 6, icon: herbalDrinks, text: "دمنوش", width: 20, height: 20 },
  { id: 7, icon: healthyDrinks, text: "عرقیجات", width: 20, height: 20 },
  { id: 8, icon: greenDrinks, text: "نوشیدنی سبز", width: 20, height: 20 },
  { id: 9, icon: coldDrinks, text: "نوشیدنی سرد", width: 20, height: 20 },
  { id: 10, icon: iceCream, text: "بستنی و شیک", width: 20, height: 20 },
  { id: 11, icon: food, text: "غذاها", width: 20, height: 20 },
  { id: 12, icon: salad, text: "سالاد", width: 20, height: 20 }
];

export default () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <ExpansionPanelSummary
          style={{ height: 40, minHeight: 40 }}
          expandIcon={<ExpandMoreIcon width={14} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="caption">مشاهده دسته بندی ها</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Button1
                variant="contained"
                className={classes.myButton}
                fullWidth
              >
                <Grid
                  container
                  spacing={1}
                  justify="center"
                  alignItems="center"
                  item
                >
                  <Grid item>
                    <Chi width="20" height="20" />
                  </Grid>
                  <Grid item>
                    <Typography variant="caption">پیشنهاد کافه چی</Typography>
                  </Grid>
                </Grid>
              </Button1>
            </Grid>
            {list.map(btn => (
              <Grid key={btn.id} item xs={6} sm={4} md={3} lg={2} xl={1}>
                <Button onClick={() => setExpanded(!expanded)}>
                  <btn.icon height={btn.height} width={btn.width} />
                  &nbsp; &nbsp;
                  <Typography style={{ fontSize: 10 }} variant="caption">
                    {btn.text}
                  </Typography>
                </Button>
              </Grid>
            ))}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};
