import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import GroupButton from "./GroupButton";
import Container from "@material-ui/core/Container";
import { withStyles, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { imageArray, searchItem } from "../actions";

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  ContainerStyle: {
    marginTop: "20px",
  },
});

let searchTerm;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  onSearchSubmit = async (term) => {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term, per_page: 20 },
      headers: {
        Authorization: "Client-ID RxOfRHYrs4q27UpD2Fpa8HP-DmhQLqE8tdYIbcMsZLk",
      },
    });
    searchTerm = res.config.params.query;
    console.log(res, "response");
    this.props.imageArray(res.data.results);
  };

  componentDidMount() {
    this.onSearchSubmit("Mountain");
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Container maxWidth="md" className={classes.ContainerStyle}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <GroupButton onSubmit={this.onSearchSubmit} />
          <Typography
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {searchTerm && `${searchTerm} Images`}
          </Typography>
          {console.log(this.props.images, "img")}
          <ImageList images={this.props.images} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  term: state.term,
  images: state.images,
});

const mapDispatchToProps = (dispatch) => {
  return {
    imageArray: (data) => dispatch(imageArray(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
