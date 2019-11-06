import React, { Component } from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.id == "search_input") {
      this.props.onSearchChange(e.target.value);
    } else if (e.target.id == "onlyStock") {
      this.props.onOnlyStockChange(e.target.checked);
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.handleChange}
          id="search_input"
          value={this.props.search}
        />
        <div>
          <input
            type="checkbox"
            onChange={this.handleChange}
            id="onlyStock"
            checked={this.props.onlyStock}
          />
          <label htmlFor="onlyStock">Only show products in stock</label>
        </div>
      </form>
    );
  }
}
