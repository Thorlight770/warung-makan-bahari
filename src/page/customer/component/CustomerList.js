import React from "react";
import { Link } from "react-router-dom";

const CustomerList = () => {
  return (
    <div className="mx-5 px-5">
      <Link className="btn btn-primary my-3" to={"form"}>Add Customer</Link>
      <h2>Customer List</h2>
      <table className="table">
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>ADDRESS</td>
            <td>ACTION</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cid-0001</td>
            <td>Mujid</td>
            <td>mujidaee@gmail.com</td>
            <td>Bekasi Tenggara</td>
            <td>
              <button className="btn btn-danger">DELETE</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
