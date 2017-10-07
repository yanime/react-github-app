import React from "react";
import _ from "underscore";
import { Input } from "semantic-ui-react";

const style = {
  container: {
    display: "flex"
  },
  label: {
    padding: "0.5rem 1rem",
    fontSize: "1.25rem"
  }
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleSearch(string) {
    this.props.onSearch(string);
  }

  componentWillMount() {
    this.handleSearchDebounced = _.debounce(function() {
      this.handleSearch.apply(this, [this.state.value]);
    }, 500);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.handleSearchDebounced();
  }
  render() {
    return (
      <div style={style.container}>
        <label style={style.label}>Search User: </label>
        <Input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Search;
