import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  }
}));

function Spinner({ loading = false }) {
  const classes = useStyles();
  // const [loader, setLoader] = useState(loading);

  // useEffect(() => {
  //   setLoader(loading);
  // }, [loading]);
  return (
    <div className={`${classes.root}`}>
      {loading && <CircularProgress className="spinner" />}
    </div>
  );
}

export default Spinner;
