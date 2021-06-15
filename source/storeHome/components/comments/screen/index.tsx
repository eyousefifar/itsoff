import { Component } from "react";

import Styles from "../style";

import { withStyles } from "@material-ui/styles";
import Button from "../../../../../custom/button";

import Title from "../../../../../library/title";
import Paper from "../../../../../custom/paper";

import * as comment from "../api";
import Star from "../assets/svg/star";
import Link from "next/link";
const image1 = require("../assets/image/1.jpg");
const image2 = require("../assets/image/2.jpg");
const image3 = require("../assets/image/3.jpg");

// import Slider from '@material-ui/core/Slider';
// import { secondary } from '../../../../../color';
// import { borderRadius } from '../../../../../theme/style';
interface IClasses {
  label: string;
  table: string;
  snak: string;
  textRight: string;
  textInput: string;
  Fathertable: string;
  flex: string;
  labelValue: string;
}

// const PrettoSlider = withStyles({
//   root: {
//     color: secondary,
//     height: 10
//   },
//   thumb: {
//     height: 0,
//     width: 0,
//     // border: '2px solid currentColor',
//     // marginTop: 0,
//     // marginLeft: -3,
//     '&:focus,&:hover,&$active': {
//       boxShadow: 'inherit'
//     }
//   },
//   active: {},
//   valueLabel: {
//     // left: 'calc(-50% + 4px)',
//     left: -10
//   },
//   track: {
//     height: 10,
//     borderRadius: borderRadius
//   },
//   rail: {
//     height: 10,
//     borderRadius: borderRadius
//   }
// })(Slider);

class Product extends Component {
  classes: IClasses;
  constructor(props: any) {
    super(props);
    this.classes = props.classes;
  }

  state = {
    text: "",
    open: false,
    openSnak: false,
    loading: false,
    comments: [
      {
        uuid: "1",
        User: { image: image1, name: "مهرداد کاظمی نژاد" },
        rate: 3.5,
        text: "عالی از تمام خدمات راضی بودم"
      },
      {
        uuid: "1",
        User: { image: image2, name: "عرفان یوسفی فر" },
        rate: 5,
        text: "عالی از تمام خدمات راضی بودم"
      },
      {
        uuid: "1",
        User: { image: image3, name: "محمد یوسفی" },
        rate: 4,
        text: "عالی از تمام خدمات راضی بودم"
      }
    ],
    Info: {
      list: [
        { id: 1, label: "برخورد پرسنل", value: 4.4 },
        { id: 2, label: "صرفه قیمت به امکانات", value: 4.4 },
        { id: 3, label: "نظافت مجموعه", value: 4.4 },
        { id: 4, label: "خدمات و امکانات مجموعه", value: 4.4 }
      ],
      all: 0,
      percent: 0
    },
    Send: [
      { id: 1, label: "برخورد پرسنل", name: "deal", value: 1 },
      { id: 2, label: "صرفه قیمت به امکانات", name: "environment", value: 1 },
      { id: 3, label: "نظافت مجموعه", name: "quality", value: 1 },
      {
        id: 4,
        label: "خدمات و امکانات مجموعه",
        name: "cleaning",
        value: 1
      }
    ]
  };

  componentDidMount() {
    // this.getAll();
  }

  valuetext = (id: any, value: any) => {
    let Send = [...this.state.Send];
    if (value > 1) Send[id].value = value;
    else Send[id].value = 1;
    this.setState({ Send });
  };

  // getAll = async () => {
  //   try {
  //     const {
  //       data: { list, info }
  //     } = await comment.getAllComments();
  //     const comments = list.map((list: any) => {
  //       return {
  //         User: {
  //           name: list.User.name,
  //           image: list.User.image
  //         },
  //         text: list.text,
  //         uuid: list.uuid,
  //         rate: Math.round(
  //           (list.quality + list.environment + list.cleaning + list.deal) / 4
  //         )
  //       };
  //     });
  //     const All = {
  //       cleaning: !info[0].cleaning ? 0 : parseFloat(info[0].cleaning),
  //       deal: !info[0].deal ? 0 : parseFloat(info[0].deal),
  //       environment: !info[0].environment ? 0 : parseFloat(info[0].environment),
  //       quality: !info[0].quality ? 0 : parseFloat(info[0].quality)
  //     };
  //     const all = All.cleaning + All.deal + All.environment + All.quality;
  //     const Info = {
  //       list: [
  //         { id: 1, label: "نظافت پرسنل،تجهیزات و محیط", value: All.cleaning },
  //         { id: 2, label: "محیط کافه", value: All.environment },
  //         { id: 3, label: "کیفیت مواد مورد استفاده", value: All.quality },
  //         { id: 4, label: "برخورد پرسنل", value: All.deal }
  //       ],
  //       all: (all / 4).toFixed(1),
  //       percent: Math.round(12 + all * 3.8)
  //     };
  //     this.setState({ comments, Info });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  submitComment = async () => {
    this.setState({ loading: true });
    try {
      let SendData: any = {};
      this.state.Send.forEach(data => {
        SendData[data.name] = data.value;
      });
      SendData.text = this.state.text;
      await comment.newComment(SendData);
      this.setState({
        open: false,
        openSnak: true,
        Send: [
          {
            id: 0,
            label: "نظافت پرسنل،تجهیزات و محیط",
            name: "cleaning",
            value: 1
          },
          { id: 1, label: "محیط کافه", name: "environment", value: 1 },
          {
            id: 2,
            label: "کیفیت مواد مورد استفاده",
            name: "quality",
            value: 1
          },
          { id: 3, label: "برخورد پرسنل", name: "deal", value: 1 }
        ],
        text: ""
      });
    } catch (error) {
      console.error(error);
    }
    this.setState({ loading: false });
  };

  render() {
    const { classes } = this;
    const { Info } = this.state;
    return (
      <>
        <Paper>
          <table className={classes.table}>
            <Title label="کافه‌چی از نگاه شما" />
            <tbody>
              <tr className={classes.flex}>
                {Info.list.map(range => (
                  <td className={classes.textRight} key={range.id}>
                    <span className={classes.label}>{range.label}</span>
                    <span>
                      <span className={classes.labelValue}>{range.value}</span>
                      <span>
                        <Star height={12} />
                      </span>
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </Paper>
        <Link href="/comments">
          <Button fullWidth color="secondary" style={{ marginBottom: "12px" }}>
            {"ثبت امتیاز و نظر شما"}
          </Button>
        </Link>
      </>
    );
  }
}

export default withStyles(Styles)(Product);

// its for last version for comments
{
  /* <div className={classes.Fathertable}>
<table className={classes.table}>
  <tbody>
    {Info.list.map(range => (
      <tr key={range.id}>
        <td className={classes.textRight}>
          <span className={classes.label}>{range.label}</span>
        </td>
        <td style={{ minWidth: 100 }}>
          <PrettoSlider
            value={range.value}
            step={1}
            min={0}
            max={5}
          />
        </td>
      </tr>
    ))}
  </tbody>
</table>
<Button
  fullWidth
  color="secondary"
  onClick={() => this.commentRouter()}
>
  {'ثبت امتیاز و نظر شما'}
</Button>
</div> */
}
