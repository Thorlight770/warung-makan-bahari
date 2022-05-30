import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const ProductList = () => {
  const [list, setList] = useState([]);
  const [pages, setPages] = useState({});

  let nav = useNavigate();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/products`);
      setList(response.data.content);
      console.log(response.data);
      setPages({
        pageNumber: response.data.page,
        totalPage: response.data.totalPages,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteBtn = (id) => {
    axios.delete(`http://localhost:3000/products?id=${id}`).then((res) => {
      getProduct();
      console.log(res);
    });
  };

  const handleEditBtn = (id) => {
    nav(`form/${id}`);
  };

  const handlePagination = (page) => {
    axios.get(`http://localhost:3000/products?page=${page}`).then((res) => {
      setList(res.data.content);
      setPages({ ...pages, pageNumber: page });
    });
    // nav(`?page=${page}`)
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
                <td>{pages.pageNumber * 3 + (index + 1)}</td>
                <td>{data.name}</td>
                <td>Rp.{data.price},-</td>
                <td>{data.stock}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleEditBtn(data.id)}
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </button>
                  <button className="btn btn-danger mx-3">
                    <i
                      className="bi bi-trash-fill"
                      style={{ color: "black" }}
                      onClick={() => handleDeleteBtn(data.id)}
                    ></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <nav aria-label="...">
        <ul className="pagination pagination-sm">
          <li className={pages.pageNumber === 0 ? "page-item disabled" : "page-item"}>
            <button className="page-link" onClick={() => handlePagination(pages.pageNumber-1)}>Previous</button>
          </li>
          {Array(pages.totalPage)
            .fill(1)
            .map((el, i) => (
              <li className="page-items" key={i}>
                <span
                  className="page-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => handlePagination(i)}
                >
                  {i + 1}
                </span>
              </li>
            ))}
          <li className={pages.pageNumber === pages.totalPage - 1 ? "page-item disabled" : "page-item"}>
            <button className="page-link" onClick={() => handlePagination(pages.pageNumber+1)}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
