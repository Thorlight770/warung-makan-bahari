import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import ProductFormBloc from "../../../bloc/ProductFormBloc";

export const ProductForm = ({bloc}) => {
  const { params, 
    getProductById,
    nav, 
    handleSubmitBtn, 
    handleEditBtn } =
    bloc();

  const formik = useFormik({
    initialValues: {
      id: params.id,
      name: "",
      price: "",
      stock: "",
    },
    onSubmit: () => {
      if (params.id) {
        handleEditBtn(formik.values);
      } else {
        handleSubmitBtn(formik.values);
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
      getProduct();
    }
  }, []);

  const getProduct = async () => {
    const response = await getProductById(params.id);
    formik.values.name = response.data.name;
    formik.values.price = response.data.price;
    formik.values.stock = response.data.stock;
    formik.setFieldValue(response);
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
        <br />
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