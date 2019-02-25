import React, { Component } from "react";
import { debounce } from 'lodash';

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.getValue = debounce(this.getValue, 500);    
 }

 getValue = (text) => {
  this.props.filterItems(text)
 }

  render() {
    return (
      <div>
        <label>
          Search:{" "}
          <input
            type="text"
            className="DataTable__filter"
            placeholder="Motorola"
            onChange={(event) => {
              this.getValue(event.target.value);              
            }}
          />
        </label>
      </div>
    );
  }
}
