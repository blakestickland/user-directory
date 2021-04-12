import React from "react";

function TableRow(props) {
  return  <tr key={props.user.id}>
              <td>{props.user.name.first} {props.user.name.last}</td>
              <td><img src={props.user.picture.thumbnail} alt="user mugshot" /></td>
              <td>{props.user.email}</td>
              <td>
                {props.user.location.city},
                {props.user.location.state},
                {props.user.location.country}
              </td>
          </tr>;
}

export default TableRow;
