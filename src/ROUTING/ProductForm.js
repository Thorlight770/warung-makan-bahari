import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    validationSchema: Yup.object({
      name: Yup.string().min(2, "Minimum 2 characters").required("Required !"),
    }),
  });

  console.log("val: ", formik);

  useEffect(() => {
    if (params.id) {
      getProductById(params.id);
    }
  }, []);

  const getProductById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/products/${id}`);
      Yup()
        formik.values.name = response.data.name
        formik.values.price = response.data.price
        formik.values.stock = response.data.stock
        console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  let nav = useNavigate();

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    // axios.post("http://localhost:3000/products", formik.values).then((res) => {
    //   console.log(res);
    // });
    // nav("/products");
    console.log(formik);
  };

  const handleEditBtn = (e) => {
    e.preventDefault();
    // axios.put(`http://localhost:3000/products`, product).then((res) => {
    //   console.log(res);
    // });
    // nav("/products");
    console.log(formik);
  };

  return (
    <div className="d-flex mx-3">
      <form onSubmit={formik.values.id ? handleEditBtn : handleSubmitBtn}>
      {/* <form onSubmit={handleSubmitBtn}> */}
        <label className="label-control">NAME</label>
        <input
          className="form-control"
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          // value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name && (
          <p>{formik.errors.name}</p>
        )}
        <label className="label-control">PRICE</label>
        <input
          className="form-control"
          type="text"
          name="price"
          onChange={formik.handleChange}
          value={formik.values.price}
          // value={formik.values.price}
        />
        <label className="label-control">STOCK</label>
        <input
          className="form-control"
          type="text"
          name="stock"
          onChange={formik.handleChange}
          value={formik.values.stock}
          // value={formik.values.stock}
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
