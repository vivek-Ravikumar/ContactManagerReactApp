import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { connect } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import {
  searchContact,
  addButtonClickFunction,
  clearSearch
} from "../Redux/Actions/actions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

const SearchBar = ({
  addButtonClick,
  addButtonClickFunction,
  searchText,
  searchContact,
  clearSearch,
  initialContacts
}) => {
  const classes = useStyles();
  const [sText, setSText] = useState("");

  const searchTextFunction = event => {
    setSText(event.target.value);
  };

  const searchFunction = () => {
    // alert(sText);
    if (sText) {
      searchContact(sText);
    } else searchClearFunction();
  };

  const searchClearFunction = () => {
    setSText("");
    clearSearch();
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Search by Name
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
              value={sText}
              onChange={searchTextFunction}
              onKeyUp={searchFunction}
            />
          </div>

          <Button
            className="addNewContactButton"
            onClick={addButtonClickFunction}
            variant="contained"
          >
            {addButtonClick ? "Close Form" : "Add new Contact"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    addButtonClick: state.addButtonClick,
    searchText: state.searchText,
    initialContacts: state.initialContacts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addButtonClickFunction: () => dispatch(addButtonClickFunction()),
    searchContact: searchText => dispatch(searchContact(searchText)),
    clearSearch: () => dispatch(clearSearch())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
