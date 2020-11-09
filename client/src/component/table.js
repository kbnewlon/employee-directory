import React, {useEffect} from 'react';

import { Image } from "react-bootstrap";

function Table(props) {

  
console.log(props);

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Name</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Email Address</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {
          props.list.map((employee, index) => {
            return (
              <tr key={index}>
                <td>{employee.id}</td>
                <td className="text-center" />
                <Image src={employee.image} roundedCircle />
                <td>{employee.name}</td>
                <td>
                  <a href={"tel:" + employee.phone}>{employee.phone}</a>
                </td>
                <td>
                  <a href={"mailto:" + employee.email}>{employee.email}</a>
                </td>
                <td>{employee.dob}</td>
              </tr>
            )
          }
          )
        }
      </tbody>
    </table >
  );


};

export default Table;