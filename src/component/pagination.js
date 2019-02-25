import React, { Component } from "react";


export default class Pagination extends Component {
  render() {
    return (
      <div className="DataTable__pagination-navigation">
            {this.props.paginationItems.map((item, index) => {              
              return (
                <div key={index} 
                className={`DataTable__pagination-item${index === this.props.pageId ? '--active' : ''}`}
                onClick={() => {
                  this.props.selectPage(index);
                }}
                >
                {index + 1}
                </div>
              )
            })}
      </div>
    )
  }
}