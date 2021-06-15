import { PrimaryBackground, defaultColor } from "../../../../../color";

const useStyles = () => ({
  reverse: {
    backgroundColor: PrimaryBackground,
    color: defaultColor,
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 0,
    marginRight: 0
  },
  mask: {
    width: 80,
    height: 80,
    margin: "10px auto",
    "& img": {
      maxHeight: 80,
      maxWidth: 80
    }
  }
});

export default useStyles;
