import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { searchItem } from "../actions";

const styles = (theme) => ({
  searchBarStyle: {
    marginBottom: "20px",
    marginLeft: "15%",
    marginRight: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
});

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  // state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    // this.props.onSubmit(this.state.term); // need to change this also
    this.props.onSubmit(this.props.term);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.searchBarStyle}>
        <form onSubmit={this.onFormSubmit}>
          <TextField
            id="outlined-basic"
            label="Image Search"
            variant="outlined"
            type="text"
            fullWidth
            margin="normal"
            value={this.props.term}
            onChange={(e) => this.props.searchItem(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  term: state.term,
});

const mapDispatchToProps = (dispatch) => {
  return {
    searchItem: (data) => dispatch(searchItem(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SearchBar));
