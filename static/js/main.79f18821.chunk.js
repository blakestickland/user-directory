(this["webpackJsonpemployee-database"]=this["webpackJsonpemployee-database"]||[]).push([[0],{46:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s(13),r=s.n(n),c=s(14),l=s(3),i=s(15),o=s(16),u=s(20),h=s(19),d=s(0);var j=function(e){return Object(d.jsx)("form",{children:Object(d.jsxs)("div",{className:"form-group text-center",children:[Object(d.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(d.jsx)("input",{id:"search",name:"search",type:"text",value:e.value,className:"mx-2",onChange:e.handleInputChange,placeholder:"Search by location"}),Object(d.jsx)("button",{onClick:e.handleLocationReset,className:"btn btn-primary mx-2 p-1",children:"Reset"})]})})},b=s(17),m=s.n(b);var f=function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("img",{src:e.user.picture.thumbnail,alt:"user mugshot"})}),Object(d.jsxs)("td",{children:[e.user.name.first," ",e.user.name.last]}),Object(d.jsx)("td",{children:e.user.phone}),Object(d.jsx)("td",{children:e.user.email}),Object(d.jsxs)("td",{children:[e.user.location.city,",",e.user.location.state,",",e.user.location.country]}),Object(d.jsx)("td",{children:m()(e.user.dob.date).calendar()})]})};var p=function(e){return console.log(e),Object(d.jsxs)("table",{className:"table table-hover table-striped mt-3",children:[Object(d.jsx)("thead",{className:"thead-light",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"Image"}),Object(d.jsxs)("th",{scope:"col",children:["Name",Object(d.jsx)("button",{onClick:e.sort,className:"border-0 mx-2",children:Object(d.jsx)("i",{className:"fa fa-".concat({up:{class:"sort-up",fn:function(e,t){return e.name.last-t.name.last}},down:{class:"sort-down",fn:function(e,t){return t.name.last-e.name.last}},default:{class:"sort",fn:function(e,t){return e}}}[e.data.sortTypes].class)})})]}),Object(d.jsx)("th",{scope:"col",children:"Phone"}),Object(d.jsx)("th",{scope:"col",children:"Email"}),Object(d.jsx)("th",{scope:"col",children:"Location"}),Object(d.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(d.jsx)("tbody",{children:e.data.resultView.length>0&&Object(l.a)(e.data.resultView).map((function(e){return Object(d.jsx)(f,{user:e},e.login.uuid)}))})]})},x=s(18),O=s.n(x),g=function(){return O.a.get("https://randomuser.me/api/?results=20&nat=au,nz")};var w=function(e){return console.log(e),Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)("label",{htmlFor:"filter",children:"Type to filter Users: "}),Object(d.jsx)("input",{id:"filter",name:"filter",type:"text",value:e.value,placeholder:"Filter by name",onChange:e.handleInputChangeFilter,className:"mx-2"}),Object(d.jsx)("button",{onClick:e.handleFilterReset,className:"btn btn-danger mx-2 p-1",children:"Reset"})]})},v=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).getUsers=function(t){console.log("getting users from API"),g(t).then((function(t){return e.setState({initialResult:Object(l.a)(t.data.results),resultView:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleSearch=function(t){t.preventDefault();var s=t.target.value;e.setState({search:s})},e.handleInputChange=function(t){t.persist();var s=t.target.name,a=t.target.value;e.setState(Object(c.a)({},s,a));var n=e.state.resultView.filter((function(e){return e.location.city.toLowerCase().includes(a.toLowerCase())||e.location.country.toLowerCase().includes(a.toLowerCase())||e.location.state.toLowerCase().includes(a.toLowerCase())}));e.setState({resultView:n})},e.handleInputChangeFilter=function(t){var s=t.target.value,a=e.state.resultView.filter((function(e){return e.name.first.toLowerCase().includes(s.toLowerCase())||e.name.last.toLowerCase().includes(s.toLowerCase())}));e.setState({filter:s,resultView:a})},e.handleFilterReset=function(t){t.preventDefault(),e.setState({filter:"",resultView:Object(l.a)(e.state.initialResult)})},e.handleLocationReset=function(){e.setState({search:"",resultView:Object(l.a)(e.state.initialResult)})},e.onSortChange=function(){var t,s,a=e.state,n=a.sortTypes,r=a.resultView,c=a.initialResult;switch(n){case"down":s=r.sort((function(e,t){return e.name.last.localeCompare(t.name.last)})),t="up",e.setState({sortTypes:t,resultView:s});break;case"up":s=c,t="default",e.setState({sortTypes:t,resultView:s});break;default:s=r.sort((function(e,t){return t.name.last.localeCompare(e.name.last)})),t="down",e.setState({sortTypes:t,resultView:s})}},e.state={initialResult:[],resultView:[],search:"",filter:"",sortTypes:"default"},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"text-center",children:"User Directory"}),Object(d.jsx)("hr",{}),Object(d.jsx)(j,{value:this.state.search,search:this.state.search,handleInputChange:this.handleInputChange,handleLocationReset:this.handleLocationReset}),Object(d.jsx)(w,{value:this.state.filter,filter:this.state.filter,handleInputChangeFilter:this.handleInputChangeFilter,handleFilterReset:this.handleFilterReset}),Object(d.jsx)(p,{data:this.state,sort:this.onSortChange})]})}}]),s}(a.Component);var C=function(){return Object(d.jsx)(v,{})};s(45);r.a.render(Object(d.jsx)(C,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.79f18821.chunk.js.map