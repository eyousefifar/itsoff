interface IProps {
  total: number;
  percent: number;
}
export default (props: IProps) => {
  const { total, percent } = props;
  return (
    <div className={`c100 p${percent} center chi`}>
      <span>{total}</span>
      <div className="slice">
        <div className="bar" />
        <div className="fill" />
      </div>
      <div className="fuler" />
    </div>
  );
};
