import Paper from "../../../../custom/paper";
import Title from "../../../../library/title";

const Page = () => {
  return (
    <Paper>
      <Title label="محل قرارگیری میزها در کافه" />
      <img width="100%" src={require("../../../../static/images/plan.jpg")} />
    </Paper>
  );
};

export default Page;
