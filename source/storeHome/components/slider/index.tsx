import { Grid } from "@material-ui/core";

import useStyles from "./style";

const f1 = require("./assets/coffee.jpg");
const f2 = require("./assets/depositphotos.jpg");
const f3 = require("./assets/RARTOF.jpg");

const Flickity = require("react-flickity-component");

const picture = [{ id: 1, src: f1 }, { id: 2, src: f2 }, { id: 3, src: f3 }];

const flickityOptions = {
  rightToLeft: true,
  cellAlign: "center",
  pageDots: false,
  prevNextButtons: false,
  wrapAround: true,
  autoPlay: true,
  imagesLoaded: true
};

const ListBox = () => {
  const classes = useStyles({});
  return (
    <div className={classes.listStyle}>
      <Grid container justify="center">
        <Grid
          item
          className={classes.flicity}
          xs={12}
          sm={12}
          md={11}
          lg={12}
          xl={12}
        >
          <Flickity
            className={"carousel"}
            elementType={"div"}
            options={flickityOptions}
          >
            {picture.map(pic => (
              <div className={classes.flicityImg} key={pic.id}>
                <img src={pic.src} />
              </div>
            ))}
          </Flickity>
        </Grid>
      </Grid>
    </div>
  );
};

export default ListBox;
