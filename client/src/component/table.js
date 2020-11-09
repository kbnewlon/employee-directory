import React from 'react';
import { Image } from "react-bootstrap";

function Table(props) {


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
        <tr>
          <td>{props.id}</td>
          <td className="text-center" />
          <Image src={props.image} roundedCircle />
          <td>{props.name}</td>
          <td>
            <a href={"tel:" + props.phone}>{props.phone}</a>
          </td>
          <td>
            <a href={"mailto:" + props.email}>{props.email}</a>
          </td>
          <td>{props.dob}</td>
        </tr>
      </tbody>
    </table >
  )


}

export default Table;