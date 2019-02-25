import React, { Component } from "react";

export default class DropDown extends Component {
  render() {
    return (
      <div className="DataTable__DropDown">
        Show{" "}
        <select
          className="DataTable__select"
          onChange={event => {
            this.props.changeQuantityItems(event.target.value)
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>{" "}
        Phones
      </div>
    );
  }
}
