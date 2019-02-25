import React, { Component } from "react";

export default class TableList extends Component {
  render() {

    return (
      <div>
        <table className="DataTable__table">
          <thead>
            <tr>
              <th className="DataTable__type-of-sort">
                <input 
                name="checkAll" 
                type="checkbox" 
                onChange={this.props.selectAllItems} 
                checked={this.props.generalStatusCheckBoxes}               
                />
              </th>

              {Object.keys(this.props.config).map(key => {
                return (
                  <th
                    className="DataTable__type-of-sort"
                    key={this.props.config[key].title}
                  >
                    {this.props.config[key].title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.items.map(item => {
              return (
                <tr 
                className={`DataTable__item${item.isChecked ? '--active' : ''}`} 
                key={item.age}>
                  <td 
                    className="DataTable__item-content"
                  >
                    <input
                      name="isChecked"
                      type="checkbox"
                      onChange={() => {                        
                        this.props.selectItems(item.age);
                      }}
                      checked={item.isChecked}
                    />
                  </td>
                  {Object.keys(this.props.config).map(key => {
                    return <td
                     className="DataTable__item-content"
                     key={key}
                     >
                      {item[key]}
                     </td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
