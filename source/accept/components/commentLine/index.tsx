import Grid from "@material-ui/core/Grid";

import useStyles from "./style";
import Paper from "../../../../custom/paper";
import Typography from "../../../../custom/typography";
import Star from "../../assets/svg/star";
import User from "../../assets/svg/user";
import Button from "../../../../custom/button";
import { Primary } from "../../../../color";

interface IProps {
  image?: string;
  name?: string;
  rate?: number;
  comment?: string;
  handleDelete?: any;
}

export default (props: IProps) => {
  const classes = useStyles();
  const { image, name, rate, comment } = props;
  return (
    <div className={classes.line}>
      <Grid xs spacing={2} container alignItems="center" item>
        <Grid item>
          <div className={classes.mask}>
            {image ? <img src={image} /> : <User />}
          </div>
        </Grid>
        <Grid item>
          <div className={classes.commentName}>
            <Typography variant="caption">{name}</Typography>
          </div>
          <Grid
            className={classes.starBox}
            container
            alignItems="center"
            spacing={1}
          >
            <Grid item>
              <Star height={15} />
            </Grid>
            <Grid item>
              <Typography variant="caption">{rate}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Paper className={classes.comment}>
        <Typography align="right" variant="caption">
          {comment}
        </Typography>
        <td colSpan={1}>
          <Button
            onClick={() => props.handleDelete()}
            color="secondary"
            fontColor={Primary}
            fullWidth
          >
            حذف
          </Button>
        </td>
      </Paper>
    </div>
  );
};
