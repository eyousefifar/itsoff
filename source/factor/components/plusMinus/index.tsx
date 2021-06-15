import { useState } from "react";

import Plus from "../../assets/svg/plus";
import Minus from "../../assets/svg/minus";
import useStyles from "../../style";

export default () => {
  const [count, setCount] = useState<number>(0);

  const settingCount = (kind: number) => {
    if (count + kind < 0) {
      setCount(0);
    } else {
      setCount(count + kind);
    }
  };
  const classes = useStyles();

  return (
    <div className={classes.buttonAdd}>
      <div onClick={() => settingCount(1)}>
        <Plus width={15} />
      </div>
      <span>{count}</span>
      <div onClick={() => settingCount(-1)}>
        <Minus width={15} />
      </div>
    </div>
  );
};
