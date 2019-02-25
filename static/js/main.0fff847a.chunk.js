(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(22)},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a.n(n),s=a(9),i=a(12),r=a(1),l=a(2),o=a(4),u=a(3),m=a(5),p=a(0),h=a.n(p),f=a(10),b=a.n(f),g=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return h.a.createElement("div",{className:"DataTable__DropDown"},"Show"," ",h.a.createElement("select",{className:"DataTable__select",onChange:function(t){e.props.changeQuantityItems(t.target.value)}},h.a.createElement("option",{value:"5"},"5"),h.a.createElement("option",{value:"10"},"10"),h.a.createElement("option",{value:"20"},"20"))," ","Phones")}}]),t}(p.Component),d=a(11),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getValue=function(e){a.props.filterItems(e)},a.getValue=Object(d.debounce)(a.getValue,500),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return h.a.createElement("div",null,h.a.createElement("label",null,"Search:"," ",h.a.createElement("input",{type:"text",className:"DataTable__filter",placeholder:"Motorola",onChange:function(t){e.getValue(t.target.value)}})))}}]),t}(p.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return void 0===this.props.items?h.a.createElement("div",null,"NO ITEMS =("):h.a.createElement("div",null,h.a.createElement("table",{className:"DataTable__table"},h.a.createElement("thead",null,h.a.createElement("tr",null,h.a.createElement("th",{className:"DataTable__type-of-sort"},h.a.createElement("input",{name:"checkAll",type:"checkbox",onChange:this.props.selectAllItems,checked:this.props.generalStatusCheckBoxes})),Object.keys(this.props.config).map(function(t){return h.a.createElement("th",{className:"DataTable__type-of-sort",key:e.props.config[t].title,onClick:function(){e.props.config[t].isSortable&&e.props.sortTable(t)}},e.props.config[t].title)}))),h.a.createElement("tbody",null,this.props.items.map(function(t,a){return h.a.createElement("tr",{className:"DataTable__item".concat(t.isChecked?"--active":""),key:t.age},h.a.createElement("td",{className:"DataTable__item-content"},h.a.createElement("input",{name:"isChecked",type:"checkbox",onChange:function(){e.props.selectItems(a)},checked:t.isChecked})),Object.keys(e.props.config).map(function(e){return h.a.createElement("td",{className:"DataTable__item-content",key:e},t[e])}))}))))}}]),t}(p.Component),I=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return h.a.createElement("div",{className:"DataTable__pagination-navigation"},this.props.paginationItems.map(function(t,a){return h.a.createElement("div",{key:a,className:"DataTable__pagination-item".concat(a===e.props.pageId?"--active":""),onClick:function(){e.props.selectPage(a)}},a+1)}))}}]),t}(p.Component),E=(a(21),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).checkAll=function(){var e=0;a.state.dataItems.filter(function(t){e===a.state.dataItems.length-1?a.allItemsCheckedStatus=!0:a.allItemsCheckedStatus=!1,t.isChecked&&e++})},a.selectAllItems=function(){a.setState(function(e){return e.dataItems.map(function(e){e.isChecked=!a.allItemsCheckedStatus}),{prevState:e}})},a.selectItems=function(e){a.setState(function(t){return t.dataItems[e].isChecked=!t.dataItems[e].isChecked,{prevState:t}})},a.createPagination=function(e){a.setState(function(t){var a=[],n=Object(i.a)(t.dataItems);return n.forEach(function(){a.push(n.splice(0,e))}),a.push(n),{pageId:0,currentPage:(a=a.filter(function(e){return 0!==e.length}))[0],quantityItems:e,pagination:a}})},a.selectPage=function(e){a.setState({currentPage:a.state.pagination[e],pageId:e})},a.sortTable=function(e){a.setState(function(t){return t.dataItems.sort(function(t,a){return t[e]<a[e]?-1:1}),{prevState:t}},function(){a.createPagination(a.state.quantityItems)})},a.allItemsCheckedStatus=!1,a.state={query:"",pagination:[],dataItems:[],currentPage:[],pageId:0,quantityItems:5,columnConfig:{name:{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",isSortable:!0,isSearchable:!0},age:{title:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",isSortable:!0},snippet:{title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",isSearchable:!0}}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(s.a)(c.a.mark(function e(){var t,a,n,s,i=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/phone-catalogue-static/phones/phones.json");case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent).map(function(e){e.isChecked=!1}),n=new RegExp(this.state.query,"i"),Object.keys(this.state.columnConfig).filter(function(e){s=a.filter(function(t){return n.test(t[e])})}),this.setState({dataItems:s},function(){i.createPagination(i.state.quantityItems)});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.checkAll(),h.a.createElement("div",{className:"DataTable"},h.a.createElement("div",{className:"DataTable__header"},h.a.createElement(g,{changeQuantityItems:function(t){e.createPagination(t)}}),h.a.createElement(v,{filterItems:function(t){e.setState({query:t},function(){return e.getData()})}})),h.a.createElement("div",{className:"DataTable__content"},h.a.createElement(k,{currentPage:1,config:this.state.columnConfig,items:this.state.currentPage,selectItems:this.selectItems,selectAllItems:this.selectAllItems,generalStatusCheckBoxes:this.allItemsCheckedStatus,sortTable:this.sortTable})),h.a.createElement("div",{className:"DataTable__footer"},h.a.createElement(I,{paginationItems:this.state.pagination?this.state.pagination:[],pageId:this.state.pageId,selectPage:this.selectPage})))}}]),t}(p.Component));b.a.render(h.a.createElement(E,null),document.getElementById("data-table"))}},[[13,1,2]]]);
//# sourceMappingURL=main.0fff847a.chunk.js.map