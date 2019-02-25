import React, { Component } from "react";
import ReactDOM from "react-dom";
import DropDown from "./component/dropDown";
import Filter from "./component/filter";
import TableList from "./component/tableList";
import Pagination from "./component/pagination";
import "./style/style.scss";

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.allItemsCheckedStatus = false;

    this.state = {
      pagination: [],
      dataItems: [],
      currentPage: [],
      pageId: 0,
      quantityItems: 5,

      columnConfig: {
        name: {
          title: "Название",
          isSortable: true,
          isSearchable: true
        },
        age: {
          title: "Возраст",
          isSortable: true
        },
        snippet: {
          title: "Описание",
          isSearchable: true
        }
      }
    };
  }
  componentDidMount() {
    this.getData();
  }

  checkAll = () => {
    let quantityCheckedCheckBoxes = 0;

    this.state.dataItems.filter(item => {
      if(quantityCheckedCheckBoxes === this.state.dataItems.length - 1) {
        this.allItemsCheckedStatus = true;
      } else {
        this.allItemsCheckedStatus = false;
      }

      if(item.isChecked) {
        quantityCheckedCheckBoxes++;
      }      
    })    
  }

  selectAllItems = () => {  
    this.setState((prevState) => {
      prevState.dataItems.map(item => {
        item.isChecked = !this.allItemsCheckedStatus;
        
      })
      return {
        prevState
      }
    })
  }

  selectItems = (itemId) => {
    this.setState(prevState => {
      prevState.dataItems[itemId].isChecked = !prevState.dataItems[itemId].isChecked;
      
      return {
        prevState
      }
    })
  };

  createPagination = (quantityItems) => {
    this.setState(prevState => {
      let pagination = [];      

      let items = [...prevState.dataItems];

      items.forEach(() => {
        pagination.push(items.splice(0, quantityItems));
      });
      pagination.push(items);
      pagination = pagination.filter(arr => arr.length !== 0);

      return {        
        pageId: 0,
        currentPage: pagination[0],
        quantityItems,     
        pagination, 
      }
    });
  };

  selectPage = (id) => {
    this.setState({
      currentPage: this.state.pagination[id],
      pageId : id,
    })
  }

  async getData() {
    const response = await fetch(
      "https://mate-academy.github.io/phone-catalogue-static/phones/phones.json"
    );
    const items = await response.json();

    items.map(item => {
      item.isChecked = false;
    })

    this.setState({
      dataItems: items
    }, () => {
      this.createPagination(this.state.quantityItems);
    });
  }

  render() {
    this.checkAll();
    console.log(this.state)
    return (
      <div className="DataTable">
        <div className="DataTable__header">
          <DropDown changeQuantityItems={quantityItems => {
            this.createPagination(quantityItems);            
          }} />
          <Filter />
        </div>
        <div className="DataTable__content">
          <TableList
            currentPage={1}
            config={this.state.columnConfig}
            items={this.state.currentPage}
            selectItems={this.selectItems}
            selectAllItems={this.selectAllItems}
            generalStatusCheckBoxes={this.allItemsCheckedStatus}
          />
        </div>
        <div className="DataTable__footer">         
          <Pagination 
            paginationItems={this.state.pagination ? this.state.pagination : []}
            pageId={this.state.pageId}
            selectPage={this.selectPage}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<DataTable />, document.getElementById("data-table"));
