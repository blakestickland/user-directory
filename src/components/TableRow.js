import React from "react";

function TableRow(props) {
  return <tr>
      <td>{props.employee.name.first} {props.employee.name.last}</td>
      <td><img src={props.employee.picture.thumbnail} alt="Employee mugshot" /></td>
      <td>{props.employee.email}</td>
      <td>
        {props.employee.location.city},
        {props.employee.location.state},
        {props.employee.location.country}
      </td>
  </tr>;
}

export default TableRow;
