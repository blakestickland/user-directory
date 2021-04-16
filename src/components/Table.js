import React from "react";
import TableRow from "./TableRow";

function Table(props) {
  console.log(props);

  const sortType = {
    up: {
      class: 'sort-up',
      fn: (a, b) => a.name.last - b.name.last
    },
    down: {
      class: 'sort-down',
      fn: (a, b) => b.name.last - a.name.last
    },
    default: {
      class: 'sort',
      fn: (a, b) => a
    }
  };


  return (
      <table className="table table-hover table-striped mt-3">
          <thead className="thead-light">
              <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name
                    <button onClick={props.sort}>
                         <i className={`fas fa-${sortType[props.data.sortTypes].class}`} />
                     </button>
                  </th>
                  
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Location</th>
                  <th scope="col">DOB</th>
              </tr>
          </thead>
          <tbody>
              {props.data.currentResult.length > 0 &&
               [...props.data.currentResult]
               .sort(sortType[props.data.sortTypes].fn)
               .map (user => {
                  return <TableRow user={user}/>;
              })}
          </tbody>
      </table>
    );
  }
  
  export default Table;

// class Table extends React.Component {
  // declaring the default state.
  // state = {
  //   currentSort: 'default'
  // };

  // method called every time the sort button is clicked.
  // it will change the currentSort value to the next one.
  // onSortChange = () => {
  //   const { currentSort } = this.state;
  //   let nextSort;

  //   if (currentSort === 'down') nextSort = 'up';
  //   else if (currentSort === 'up') nextSort = 'default';
  //   else if (currentSort === 'default') nextSort = 'down';

  //   this.setState({
  //     currentSort: nextSort
  //   });
  // };

//   render() {
//     const { data } = this.props;
//     const { currentSort } = this.state;

//     return (
//       data.result.length > 0 && (
//         <table className="table table-hover table-striped mt-3">
//             <thead className="thead-light">
//                 <tr>
//                     <th scope="col">Image</th>
//                     <th scope="col">Name</th>
//                       <button onClick={this.onSortChange}>
//                         <i className={`fas fa-${sortTypes[currentSort].class}`} />
//                       </button>
//                     <th scope="col">Phone</th>
//                     <th scope="col">Email</th>
//                     <th scope="col">Location</th>
//                     <th scope="col">DOB</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {[...data.result].sort(sortTypes[currentSort].fn).map (user => {
//                     return <TableRow user={user}/>;
//                 })}
//             </tbody>
//         </table>
//       )
//     );
//   }

// }
  
// export default Table;