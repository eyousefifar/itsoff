import { useState } from "react";

import useStyles from "../style";
import Grid from "@material-ui/core/Grid";
import InfoBox from "../components/information";
import ExpansionPanelList from "../components/expansionPanel";
import Input from "../components/input";
import Button from "../../../custom/button";

import Slider from "../components/slider";

import LocationSvg from "../assets/svg/location2";
const search = () => {
  console.log("hello");
};

const place = [
  {
    id: 1,
    name: "زنبیل اباد",
    percent: "33%",
    stars: 4,
    address: "فروشگاه مواد غذایی زاگرس"
  },
  {
    id: 1,
    name: "زنبیل اباد",
    percent: "33%",
    stars: 4,
    address: "فروشگاه مواد غذایی زاگرس"
  },
  {
    id: 1,
    name: "زنبیل اباد",
    percent: "33%",
    stars: 4,
    address: "فروشگاه مواد غذایی زاگرس"
  },
  {
    id: 1,
    name: "زنبیل اباد",
    percent: "33%",
    stars: 4,
    address: "فروشگاه مواد غذایی زاگرس"
  },
  {
    id: 1,
    name: "زنبیل اباد",
    percent: "33%",
    stars: 4,
    address: "فروشگاه مواد غذایی زاگرس"
  }
];

const list = [
  { id: 1, check: false, text: "اذر", width: 20, height: 20 },
  { id: 2, check: false, text: "سعیدی", width: 20, height: 20 },
  { id: 3, check: false, text: "زنبیل اباد", width: 20, height: 20 },
  { id: 4, check: false, text: "صفاییه", width: 20, height: 20 },
  { id: 5, check: false, text: "صفاشهر", width: 20, height: 20 },
  { id: 6, check: false, text: "امام", width: 20, height: 20 },
  { id: 7, check: false, text: "میثم", width: 20, height: 20 },
  { id: 8, check: false, text: "سعیدی", width: 20, height: 20 },
  { id: 9, check: false, text: "اذر", width: 20, height: 20 },
  { id: 10, check: false, text: "سعیدی", width: 20, height: 20 },
  { id: 11, check: false, text: "اذر", width: 20, height: 20 }
];
const list1 = [
  { id: 1, check: false, text: "البسه", width: 20, height: 20 },
  { id: 2, check: false, text: "مکانیکی", width: 20, height: 20 },
  { id: 3, check: false, text: "پوشاک", width: 20, height: 20 },
  { id: 4, check: false, text: "سوپر مارکت", width: 20, height: 20 },
  { id: 5, check: false, text: "البسه", width: 20, height: 20 },
  { id: 6, check: false, text: "مکانیکی", width: 20, height: 20 },
  { id: 7, check: false, text: "البسه", width: 20, height: 20 },
  { id: 8, check: false, text: "مکانیکی", width: 20, height: 20 },
  { id: 9, check: false, text: "البسه", width: 20, height: 20 },
  { id: 10, check: false, text: "مکانیکی", width: 20, height: 20 },
  { id: 11, check: false, text: "مکانیکی", width: 20, height: 20 },
  { id: 12, check: false, text: "البسه", width: 20, height: 20 },
  { id: 13, check: false, text: "مکانیکی", width: 20, height: 20 },
  { id: 14, check: false, text: "البسه", width: 20, height: 20 }
];

const Home = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<boolean>(false);
  const [expanded1, setExpanded1] = useState<boolean>(false);
  const [listArray, setListArray] = useState<any>(list);
  const [list1Array, setList1Array] = useState<any>(list1);
  const [result, setResult] = useState<any>([]);

  const handleCheck = (btn: any, arrayName: any, setArray: any) => {
    let checked = list.findIndex(x => x.id === btn.id);
    let listArrayCopy = [...arrayName];
    listArrayCopy[checked].check = !listArrayCopy[checked].check;
    setArray(listArrayCopy);
  };

  const filter = () => {
    let result1 = listArray.filter((x: any) => x.check === true);
    let result2 = list1Array.filter((x: any) => x.check === true);
    let result = result1.concat(result2);
    setResult(result);
  };

  const removeFilter = async (btn: any) => {
    let resultCopy = [...result];
    let resultIndex = resultCopy.findIndex(x => x.id === btn.id);
    await resultCopy.splice(resultIndex, 1);
    setResult(resultCopy);
  };

  return (
    <div className={classes.homeBackground}>
      <div className={classes.homeBackgroundDiv}>
        <Grid xs={12} sm={12} md={6} lg={6} xl={6} item>
          <Input search={search} />

          <div className={classes.content}>
            <ExpansionPanelList
              title="موقعیت مکانی"
              handleCheck={handleCheck}
              listArray={listArray}
              setListArray={setListArray}
              svg={<LocationSvg width={14} height={14} />}
              expanded={expanded}
              setExpanded={setExpanded}
            />
            <ExpansionPanelList
              title="شغل و خدمات"
              handleCheck={handleCheck}
              listArray={list1Array}
              setListArray={setList1Array}
              svg={<LocationSvg width={14} height={14} />}
              expanded={expanded1}
              setExpanded={setExpanded1}
            />
          </div>

          {expanded || expanded1 ? (
            <Grid className={classes.giridButton}>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className={classes.girid_button}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className={classes.girid__button}
                >
                  <Button style={{width: "90%", marginBottom: "8px", alignSelf: 'center'}} onClick={filter} color="secondary">
                    {"اعمال فیلتر"}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            // <Button onClick={filter} children={'اعمال فیلتر'} />
            null
          )}
          {!result.length ? (
            <>
              {!expanded && !expanded1 && (
                <>
                  <Slider />

                  <div className={classes.imgBoxDiv}>
                    <div className={classes.imgBoxBall}>
                      رزرو تمامی مجموعه های تفریحی ورزشی استان قم
                    </div>
                  </div>

                  <div className={classes.imgBoxDiv}>
                    <div className={classes.imgBoxPhone}>
                      لوازم جانبی ،فروشگاه محصولات دیجیتال موبایل
                    </div>
                  </div>

                  <div className={classes.imgBoxDiv}>
                    <div className={classes.imgBoxRokh}>
                      فروشگاه لوازم ارایشی بهداشتی
                    </div>
                  </div>
                  {/* <ListBox /> */}
                  {/* <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}> */}
                  {place.map(x => (
                    // <span key={`${x.id}${x.name}`}>
                      <InfoBox key={`${x.id}${x.name}`} link="./storeHome" place={x} />
                   
                  ))}
                  {/* </div> */}
                  
                </>
              )}

              {/* //IMG? */}
            </>
          ) : (
            <>
              <div style={{ height: "auto", margin: "5px" }}>
                {result.map((x: any) => (
                  <span key={Math.random()}>
                    <span className={classes.filtered}>
                      {x.text}
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          removeFilter(x);
                        }}
                      >
                        &#9747;
                      </span>
                    </span>
                  </span>
                ))}
              </div>
              {result.map((x: any) => (
                <span key={Math.random()}>
                  <InfoBox link="./storeHome" place={x} />
                </span>
              ))}
            </>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
