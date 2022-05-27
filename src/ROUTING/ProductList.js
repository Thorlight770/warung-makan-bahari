import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const ProductList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setList(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mx-5 px-5">
      <Link className="btn btn-primary my-3" to={"form"}>
        Add Product
      </Link>
      <h2>Product List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.productName}</td>
                <td>Rp.{data.productPrice},-</td>
                <td>{data.stock}</td>
                <td>
                  <button className="btn btn-warning">
                    <i className="bi bi-pencil-fill"></i>
                  </button>
                  <button className="btn btn-danger mx-3">
                    <i
                      className="bi bi-trash-fill"
                      style={{ color: "black" }}
                    ></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
