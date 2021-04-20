import React from "react";
import TableRow from "./TableRow";

function Table(props) {
  console.log(props);

  const sortType = {
    up: {
      class: 'sort-up',
      // fn: (a, b) => a.name.last - b.name.last
    },
    down: {
      class: 'sort-down',
      // fn: (a, b) => b.name.last - a.name.last
    },
    default: {
      class: 'sort',
      // fn: (a, b) => a
    }
  };


  return (
      <table className="table table-hover table-striped mt-3">
          <thead className="thead-light">
              <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name
                    <button onClick={props.sort} className="border-0 mx-2">
                      <i className={`fa fa-${sortType[props.data.sortTypes].class}`} />
                    </button>
                  </th>
                  
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Location</th>
                  <th scope="col">DOB</th>
              </tr>
          </thead>
          <tbody>
              {props.data.resultView.length > 0 &&
               [...props.data.resultView]
              //  .sort(sortType[props.data.sortTypes].fn)
               .map (user => {
                  return <TableRow user={user} key={user.login.uuid} />;
              })}
          </tbody>
      </table>
    );
  }
  
  export default Table;