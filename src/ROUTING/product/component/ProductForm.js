import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createProduct,
  getProduct,
  updateProduct,
} from "../services/ProductService";
import * as Yup from "yup";

export const ProductForm = () => {
  const params = useParams();

  const formik = useFormik({
    initialValues: {
      id: params.id,
      name: "",
      price: "",
      stock: "",
    },
    onSubmit: () => {
      if (params.id) {
        handleEditBtn();
      } else {
        handleSubmitBtn();
      }
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Tidak bole kosong !")
        .min(5, "Minimal 5 character"),
    }),
  });

  useEffect(() => {
    if (params.id) {
      getProductById(params.id);
    }
  }, []);

  const getProductById = async (id) => {
    try {
      const response = await getProduct(id);
      formik.values.name = response.data.name;
      formik.values.price = response.data.price;
      formik.values.stock = response.data.stock;
      formik.setFieldValue(response);
    } catch (error) {
      console.error(error);
    }
  };

  let nav = useNavigate();

  const handleSubmitBtn = () => {
    const response = createProduct(formik.values);
    console.log(response);
    nav("/products");
  };

  const handleEditBtn = () => {
    updateProduct(formik.values);
    nav("/products");
  };

  return (
    <div className="d-flex mx-3">
      <form onSubmit={formik.handleSubmit}>
        <label className="label-control">NAME</label>
        <input
          className="form-control"
          type="text"
          name="name"
          onChange={formik.handleChange}
          onFocus={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name && (
          <small className="text-danger">{formik.errors.name}</small>
        )}
        <br/>
        <label className="label-control">PRICE</label>
        <input
          className="form-control"
          type="text"
          name="price"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        <label className="label-control">STOCK</label>
        <input
          className="form-control"
          type="text"
          name="stock"
          onChange={formik.handleChange}
          value={formik.values.stock}
        />
        <div className="my-3">
          {formik.values.id ? (
            <button className="btn btn-primary" type="submit">
              Edit
            </button>
          ) : (
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          )}
          <button
            className="btn btn-danger mx-3"
            onClick={() => nav("/products")}
          >
            Cancle
          </button>
        </div>
      </form>
    </div>
  );
};
