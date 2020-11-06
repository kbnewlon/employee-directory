import React from 'react';
function Table(props){

return (
    <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Picture</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
   
  </tbody>
</table>
)


}

export default Table;