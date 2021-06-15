import { useState, useEffect } from "react";

import Button from "../../../custom/button";
import { borderRadius, marginAndPadding_sm } from "../../../theme/style";

const Product = () => {
  const [size, setSize] = useState({ width: 200, height: 200 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (size.width !== window.innerWidth)
      setSize({ width: window.innerWidth, height: window.innerHeight });
  });
  // const lat = "34.633821",
  //   lng = "50.868480";
  return (
    <div
      style={{
        maxHeight: "100vh",
        maxWidth: "100vw",
        marginTop: -51,
        overflow: "hidden"
      }}
    >
      <iframe
        style={{ width: size.width, height: size.height }}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d205.17633819386484!2d50.8684613!3d34.6339531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f93bb60f9c0e74d%3A0x5c12790a8b5a08ab!2sChi+Cafe!5e0!3m2!1sen!2s!4v1564660459955!5m2!1sen!2s&q=record+stores+in+Seattle"
      />
      {/* <img
        src={`https://map.namaa.ir/place/18/${lat}/${lng}?width=${size.width}&height=${size.height}`}
      /> */}
      <a
        style={{ textDecoration: "none" }}
        target="_blank"
        href="https://goo.gl/maps/L4NwdbSC2ZjLVuVC7"
      >
        <Button
          style={{
            marginTop: -150,
            marginRight: marginAndPadding_sm,
            width: "calc(100% - 12px)",
            borderRadius: borderRadius
          }}
          color="secondary"
        >
          {"مشاهده روی نقشه"}
        </Button>
      </a>
    </div>
  );
};

export default Product;
