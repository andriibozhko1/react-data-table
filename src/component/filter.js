import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div>
        <label>
          Search:{" "}
          <input
            type="text"
            className="DataTable__filter"
            placeholder="Motorola"
          />
        </label>
      </div>
    );
  }
}
