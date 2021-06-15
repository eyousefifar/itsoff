import { useEffect, useState } from "react";

import useStyle from "../../style";

import Paper from "../../../../custom/paper";
import Title from "../../../../library/title";

const Flickity =
  typeof window !== "undefined"
    ? require("react-flickity-component")
    : () => null;

let flkty: any;

const tables = [
  { id: 1, name: "میز ۱", persons: "۲ نفره" },
  { id: 2, name: "میز ۲", persons: "۳ نفره" },
  { id: 3, name: "میز ۳", persons: "۴ نفره" },
  { id: 4, name: "میز ۴", persons: "۵ نفره" },
  { id: 5, name: "میز ۵", persons: "۲ نفره" }
];

const flickityOptions = {
  rightToLeft: true,
  cellAlign: "center",
  pageDots: false,
  prevNextButtons: false,
  contain: false,
  draggable: true,
  // freeScroll: true,
  selectedAttraction: 0.4,
  friction: 0.8
};

const Page = () => {
  const [table, setTable] = useState(0);
  const [addListener, setListener] = useState(true);
  const classes = useStyle();

  useEffect(() => {
    if (flkty && flkty.on && addListener) {
      setListener(false);
      flkty.on("settle", () => {
        setTable(flkty.selectedIndex);
      });
    }
  });

  return (
    <>
      <Paper>
        <Title label="شماره میز" />
        <Flickity
          flickityRef={(e: any) => (flkty = e)}
          className={"carousel"}
          elementType={"div"}
          options={flickityOptions}
        >
          {tables.map(tab => (
            <div key={tab.id}>
              <div
                onClick={() => flkty.select(tab.id - 1)}
                className={classes.box}
                style={{
                  color: table === tab.id - 1 ? "#000" : "#c7c7c7"
                }}
              >
                {tab.name}
              </div>
              {/* <div
                className={classes.box}
                style={{
                  color: table === tab.id - 1 ? "#000" : "#c7c7c7"
                }}
              >
                {tab.persons}
              </div> */}
            </div>
          ))}
        </Flickity>
      </Paper>
    </>
  );
};

export default Page;
