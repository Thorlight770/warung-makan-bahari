import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

export const ProductList = ({ bloc }) => {
  const {
    screenState,
    getProduct,
    handleEditBtn,
    handleDeleteBtn,
    handlePagination,
  } = bloc();

  const{isLoading, pages, list} = screenState;

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="mx-5 px-5">
      <Link className="btn btn-primary my-3" to="form">
        Add Product
      </Link>
      <h2>Product List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>{!isLoading ? "#" : <Skeleton />}</th>
            <th>{!isLoading ? "Name" : <Skeleton />}</th>
            <th>{!isLoading ? "Price" : <Skeleton />}</th>
            <th>{!isLoading ? "Stock" : <Skeleton />}</th>
            <th>{!isLoading ? "Action" : <Skeleton />}</th>
          </tr>
        </thead>
        <tbody>
          {list.map((data, index) => {
            return (
              <tr key={index}>
                <td>
                  {isLoading ? <Skeleton /> : pages.pageNumber * 3 + (index + 1)}
                </td>
                <td>{isLoading ? <Skeleton /> : data.name}</td>
                <td>{isLoading ? <Skeleton /> : `Rp.${data.price},-`}</td>
                <td>{isLoading ? <Skeleton /> : data.stock}</td>
                <td>
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEditBtn(data.id)}
                    >
                      <i className="bi bi-pencil-fill"></i>
                    </button>
                  )}
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    <button className="btn btn-danger mx-3">
                      <i
                        className="bi bi-trash-fill"
                        style={{ color: "black" }}
                        onClick={() => handleDeleteBtn(data.id)}
                      ></i>
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <nav aria-label="...">
        <ul className="pagination pagination-sm">
          <li
            className={
              pages.pageNumber === 0 ? "page-item disabled" : "page-item"
            }
          >
            <button
              className="page-link"
              onClick={() => handlePagination(pages.pageNumber - 1)}
            >
              Previous
            </button>
          </li>
          {Array(pages.totalPage)
            .fill(1)
            .map((el, i) => (
              <li
                className={
                  i === pages.pageNumber ? "page-item active" : "page-item"
                }
                key={i}
              >
                <span
                  className="page-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => handlePagination(i)}
                >
                  {i + 1}
                </span>
              </li>
            ))}
          <li
            className={
              pages.pageNumber === pages.totalPage - 1
                ? "page-item disabled"
                : "page-item"
            }
          >
            <button
              className="page-link"
              onClick={() => handlePagination(pages.pageNumber + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
