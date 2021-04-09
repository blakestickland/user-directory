import React from "react";
import TableRow from "./TableRow";


function Table(props) {
    return (
      <table>
          <thead>
              <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Picture</th>
                  <th scope="col">Email</th>
                  <th scope="col">Location</th>
              </tr>
          </thead>
          <tbody>
              {props.data.result.length > 0 && props.data.result.map(employee => {
                  return <TableRow employee={employee}/>;
              })}
          </tbody>
      </table>
    );
  }
  
  export default Table;