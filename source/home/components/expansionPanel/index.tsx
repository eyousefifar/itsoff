// import { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

import ExpandMoreIcon from "../../assets/svg/arrow";
import SelectSvg from "../../assets/svg/select";

import Typography from "../../../../custom/typography";
import useStyles from "./style";

const Error = (props: any) => {
  const classes = useStyles();

  return (
    <div style={{ width: "48%" }}>
      <ExpansionPanel
        expanded={props.expanded}
        onChange={() => props.setExpanded(!props.expanded)}
      >
        <ExpansionPanelSummary
          className={classes.ExpansionPanelSummaryRow}
          expandIcon={<ExpandMoreIcon width={14} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography style={{ width: "100%" }} variant="caption">
            <span>
              <span className={classes.ExpansionSvg}>{props.svg}</span>
            </span>
            <span className={classes.ExpansionTitle}> {props.title} </span>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={1}>
            {props.listArray.map((btn: any) => (
              <Grid
                key={Math.random()}
                // setListArray={props.setListArray}
                onClick={() =>
                  props.handleCheck(btn, props.listArray, props.setListArray)
                }
                direction="row"
                justify="space-between"
                alignItems="center"
                className={classes.rowListArray}
                container
                xs={12}
                item
              >
                <div className={classes.listStyle}>{btn.text} </div>
                <div className={classes.listStyleSvg}>
                  <SelectSvg check={btn.check} width={13} />
                </div>
              </Grid>
            ))}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Error;
