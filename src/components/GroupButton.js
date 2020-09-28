import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
});

class GroupButton extends React.Component {
  constructor(props) {
    super(props);
  }

  onButtonClick = (e) => {
    e.preventDefault();
    this.props.onSubmit(e.currentTarget.value);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
        >
          <Button value="Mountain" onClick={this.onButtonClick}>
            Mountain
          </Button>
          <Button value="Beaches" onClick={this.onButtonClick}>
            Beaches
          </Button>
          <Button value="Birds" onClick={this.onButtonClick}>
            Birds
          </Button>
          <Button value="Food" onClick={this.onButtonClick}>
            Food
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}
export default withStyles(styles)(GroupButton);
