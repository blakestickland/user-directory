import React from "react";
import TableRow from "./TableRow";


// const UsersTable = (props) => {
//     const { users } = props.data.result;
//     const [sortConfig, setSortConfig] = React.useState(null);

//     React.useMemo(() => {
//         let sortedUsers = [...users];
//         if (sortConfig !== null) {
//             sortedUsers.sort((a, b) => {
//                 if (a[sortConfig.key] < b[sortConfig.key]) {
//                     return sortConfig.direction === 'ascending' ? -1 : 1;
//                 }
//                 if (a[sortConfig.key] > b[sortConfig.key]) {
//                     return sortConfig.direction === 'ascending' ? 1 : -1;
//                 }
//                 return 0;
//             });
//         }
//         return sortedUsers;
//     }, [users, sortConfig]);

//     const requestSort = key => {
//         let direction = 'ascending';
//         if (sortConfig.key === key && sortConfig.direction === 'ascending') {
//           direction = 'descending';
//         }
//         setSortConfig({ key, direction });
//       }

//     return (
//       <table>
//           <thead>
//             <caption>User Directory</caption>
//               <tr>
//                   <th scope="col">
//                     <button type="button" onClick={() => requestSort('name')}>
//                         Name
//                       </button>
//                   </th>
//                   <th scope="col">Picture</th>
//                   <th scope="col">Email</th>
//                   <th scope="col">
//                       <button type="button" onClick={() => requestSort('location')}>
//                         Location
//                       </button>
//                   </th>
//               </tr>
//           </thead>
//           <tbody>
//               {props.data.result.length > 0 && props.data.result.map(user => {
//                   return <TableRow user={user}/>;
//               })}
//           </tbody>
//       </table>
//     );
//   }
  
//   export default UsersTable;

// function Table(props) {
//     const { users } = props.data.result;
//     let sortedUsers = [...users];
//     sortedUsers.sort((a, b) => {
//         if (a.name < b.name) {
//             return -1;
//         }
//         if (a.name > b.name) {
//             return 1;
//         }
//         return 0;
//     });
    
//     return (
//       <table>
//           <thead>
//             <caption>User Directory</caption>
//               <tr>
//                   <th scope="col">Name</th>
//                   <th scope="col">Picture</th>
//                   <th scope="col">Email</th>
//                   <th scope="col">Location</th>
//               </tr>
//           </thead>
//           <tbody>
//               {props.data.result.length > 0 && props.data.result.map(user => {
//                   return <TableRow user={user}/>;
//               })}
//           </tbody>
//       </table>
//     );
//   }
  
//   export default Table;

function Table(props) {
  console.log(props);
    // const { result, sortType } = props;
    // let sorted = result.sort((a, b) => {
    //     const isReversed = (sortType === 'asc') ? 1 : -1;
    //     return isReversed * a.name.localeCompare(b.name)
    // }); 
    // sorted.sort((a, b) => {
    //     if (a.name < b.name) {
    //         return -1;
    //     }
    //     if (a.name > b.name) {
    //         return 1;
    //     }
    //     return 0;
    // });
    
    return (
      <table className="table mt-3">
          <thead className="thead-dark">
            <caption>User Directory</caption>
              <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                    {/* <button onClick={this.onSortChange}>
                      <i className={`fas fa-${sortTypes[currentSort].class}`} />
                    </button> */}
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Location</th>
                  <th scope="col">DOB</th>
              </tr>
          </thead>
          <tbody>
              {props.data.result.length > 0 && props.data.result.map (user => {
                  return <TableRow user={user}/>;
              })}
          </tbody>
      </table>
    );
  }
  
  export default Table;