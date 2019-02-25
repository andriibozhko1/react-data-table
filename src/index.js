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
      query: '',
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

    const pattern = new RegExp(this.state.query, 'i');
    let filteredItems;
    Object.keys(this.state.columnConfig).filter(key => {
      filteredItems = items.filter((item) => pattern.test(item[key])) 
    })     
    this.setState({
      dataItems: filteredItems
    }, () => {
      this.createPagination(this.state.quantityItems);
    });
  }

  sortTable = (key) => {
    this.setState(prevState => {
      prevState.dataItems.sort((a,b) => a[key] < b[key] ? -1 : 1);
      
      return {
        prevState
      }
    }, () => {
      this.createPagination(this.state.quantityItems);
    })
  }

  render() {
    this.checkAll();
    return (
      <div className="DataTable">
        <div className="DataTable__header">
          <DropDown changeQuantityItems={quantityItems => {
            this.createPagination(quantityItems);            
          }} />
          <Filter filterItems={(query) => {
            this.setState({
              query,
            }, () => this.getData())
          }}/>
        </div>
        <div className="DataTable__content">
          <TableList
            currentPage={1}
            config={this.state.columnConfig}
            items={this.state.currentPage}
            selectItems={this.selectItems}
            selectAllItems={this.selectAllItems}
            generalStatusCheckBoxes={this.allItemsCheckedStatus}
            sortTable={this.sortTable}
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
