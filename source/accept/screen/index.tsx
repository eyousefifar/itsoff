import CommentBox from "../components/commentBox";
import { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Styles from "./style";
import Line from "../components/commentLine";
import Title from "../../../library/title";
import { comments } from "../api";

import Paper from "../../../custom/paper";
import Button from "../../../custom/button";
import Typography from "../../../custom/typography";
import {
  Grid,
  Dialog,
  DialogActions,
  DialogTitle,
  CircularProgress
} from "@material-ui/core";

interface IState {
  comments: Array<IComment>;
  Allcomments: Array<IComment>;
  loading: boolean;
  openDelete: boolean;
  loadingBtn: boolean;
  select: any;
  open: boolean;
  selectedUuId: string;
}

interface IClasses {
  loader: string;
  center: string;
}

interface IComment {
  text: string;
  User: IUser;
  uuid: string;
  rate: number;
}

interface IUser {
  name: string;
  image: string;
  rate: number;
}

class Reserve extends Component {
  classes: IClasses;

  constructor(props: any) {
    super(props);
    this.classes = props.classes;
  }

  state: IState = {
    comments: [],
    openDelete: false,
    select: {},
    loading: true,
    loadingBtn: false,
    Allcomments: [],
    open: false,
    selectedUuId: ""
  };

  componentDidMount() {
    this.getAllComment();
    this.getAllAceptedComment();
  }

  getAllComment = async () => {
    try {
      const { data } = await comments.getAllMyComment();
      this.setState({ comments: data.list });
    } catch (error) {
      console.error(error);
    }
    this.setState({ loading: false });
  };
  getAllAceptedComment = async () => {
    try {
      const { data } = await comments.getAllAcceptedComment();
      this.setState({ Allcomments: data.list });
    } catch (error) {
      console.error(error);
    }
    this.setState({ loading: false });
  };

  acceptComment = async () => {
    this.setState({ loadingBtn: true });
    try {
      await comments.acceptComment(this.state.select.uuid);
      this.getAllComment();
      this.getAllAceptedComment();
      this.setState({ openDelete: false });
    } catch (error) {
      console.error(error);
    }
    this.setState({ loadingBtn: false });
  };

  PopUpDelete = () => {
    return (
      <Dialog
        fullWidth
        onClose={() => this.setState({ open: false })}
        open={this.state.open}
      >
        <Paper>
          <DialogTitle>
            <Typography> ایا از حذف محصول اطمینان دارید</Typography>
          </DialogTitle>
          <DialogActions>
            <Grid container spacing={1} item>
              <Grid xs={6} item>
                <Button
                  onClick={this.deleteComment}
                  size="large"
                  color="secondary"
                  fullWidth
                >
                  {"بله"}
                </Button>
              </Grid>
              <Grid xs={6} item>
                <Button
                  onClick={() => this.setState({ open: false })}
                  size="large"
                  color="primary"
                  fullWidth
                >
                  {"خیر"}
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </Paper>
      </Dialog>
    );
  };

  deleteComment = async () => {
    try {
      await comments.delete_comment(this.state.selectedUuId);
      this.getAllComment();
      this.getAllAceptedComment();
      this.setState({ open: false });
    } catch (error) {
      console.error(error);
    }
  };

  handleButton = (data: IComment) => {
    this.setState({ select: data, openDelete: true });
  };

  handleDelete = (x: any) => {
    console.log(x);
    this.setState({ open: true, selectedUuId: x });
  };

  render() {
    const { classes } = this;
    const {
      select,
      loading,
      comments,
      openDelete,
      loadingBtn,
      Allcomments
    } = this.state;

    return (
      <>
        <Dialog
          open={openDelete}
          fullWidth
          onClose={() => this.setState({ openDelete: false })}
        >
          <DialogTitle>
            <Typography>{`آیا از تایید نظر ${select.User &&
              select.User.name} اطمینان دارید`}</Typography>
          </DialogTitle>
          <DialogActions>
            <Grid container spacing={1} item>
              <Grid xs={6} item>
                <Button
                  loading={loadingBtn}
                  onClick={this.acceptComment}
                  size="large"
                  color="secondary"
                  fullWidth
                >
                  {"بله"}
                </Button>
              </Grid>
              <Grid xs={6} item>
                <Button
                  onClick={() => this.setState({ openDelete: false })}
                  size="large"
                  color="primary"
                  fullWidth
                >
                  {"خیر"}
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </Dialog>

        <Paper>
          {loading ? (
            <div className={classes.loader}>
              <CircularProgress size="70px" color="inherit" />
            </div>
          ) : comments.length ? null : (
            <div className={classes.center}>
              <Typography>{"نظر جدیدی ثبت نشده"}</Typography>
            </div>
          )}
          {this.state.open ? <this.PopUpDelete /> : ""}
          <Grid container spacing={1} item>
            {comments.map(x => (
              <Grid key={x.uuid} item xs={12} sm={6} md={6} lg={6} xl={6}>
                <CommentBox
                  {...x}
                  handleButton={this.handleButton}
                  handleDelete={() => this.handleDelete(x.uuid)}
                />
              </Grid>
            ))}
          </Grid>
          <br />
          <br />
          <br />

          <Title label="نظرات تایید شده" />
          {Allcomments.map((comment: IComment) => (
            <Line
              key={comment.uuid}
              image={comment.User.image}
              name={comment.User.name}
              rate={comment.rate}
              comment={comment.text}
              handleDelete={() => this.handleDelete(comment.uuid)}
            />
          ))}
        </Paper>
      </>
    );
  }
}

export default withStyles(Styles)(Reserve);
