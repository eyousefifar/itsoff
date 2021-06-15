import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

import theme from "./style";
import CircularProgress from "@material-ui/core/CircularProgress";

type variant = "text" | "outlined" | "contained";
type size = "medium" | "large" | "small";
type color = "primary" | "secondary" | "default";
type type = "submit" | "button";

interface IButton {
  type?: type;
  children: any;
  background?: string;
  fullWidth?: boolean;
  size?: size;
  variant?: variant;
  color?: color;
  fontColor?: string;
  onClick?: any;
  className?: string;
  style?: any;
  loading?: boolean;
  disabled?: boolean;
  noLoading?: boolean;
}

export default (props: IButton) => {
  const {
    type,
    children,
    fullWidth,
    size,
    variant,
    color,
    fontColor,
    background,
    onClick,
    className,
    loading,
    disabled,
    style,
    noLoading
  } = props;
  return (
    <ThemeProvider theme={theme}>
      <Button
        type={type}
        className={className}
        onClick={onClick}
        variant={variant || "contained"}
        fullWidth={fullWidth}
        size={size}
        color={color}
        disabled={disabled || loading}
        style={{
          color: fontColor ? fontColor : "",
          backgroundColor: background ? background : "",
          ...style
        }}
      >
        {noLoading ? (
          <>{children}</>
        ) : (
          <>
            <span
              style={{
                marginLeft: 10
              }}
            >
              {children}
            </span>
            {loading && (
              <CircularProgress
                size={20}
                color={color === "secondary" ? "secondary" : "primary"}
              />
            )}
          </>
        )}
      </Button>
    </ThemeProvider>
  );
};
