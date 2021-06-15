import CssTypography from "./style";

type align = "inherit" | "left" | "center" | "right" | "justify";
type variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "button"
  | "overline"
  | "srOnly"
  | "inherit";

interface IPaper {
  children: any;
  gutterBottom?: boolean;
  variant?: variant;
  noWrap?: boolean;
  align?: align;
  style?: any;
}

export default (props: IPaper) => {
  const { children, ...rest } = props;
  return <CssTypography {...rest}>{children}</CssTypography>;
};
