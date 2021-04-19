import React from "react";
import moment from 'moment';

function TableRow(props) {
  return  <tr>
              <td><img src={props.user.picture.thumbnail} alt="user mugshot" /></td>
              <td>{props.user.name.first} {props.user.name.last}</td>
              <td>{props.user.phone}</td>
              <td>{props.user.email}</td>
              <td>
                {props.user.location.city},
                {props.user.location.state},
                {props.user.location.country}
              </td>
              <td>{moment(props.user.dob.date).calendar()}</td>
          </tr>
}

export default TableRow;
