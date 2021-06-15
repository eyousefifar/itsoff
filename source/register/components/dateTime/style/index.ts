import { PrimaryBackground } from "../../../../../color";
import { borderRadius } from "../../../../../theme/style";

const useStyles = () => ({
  box: {
    fontSize: 12,
    padding: "8px 12px",
    whiteSpace: "nowrap" as "nowrap"
  },
  reverse: {
    backgroundColor: PrimaryBackground,
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 0,
    marginRight: 0,
    borderRadius: borderRadius
  }
});

export default useStyles;
