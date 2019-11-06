import React, { Component } from "react";

export default class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>
          <b>{this.props.label}</b>
        </td>
      </tr>
    );
  }
}
