import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import { NotFoundPage } from "../NotFoundPage";
import { ProductForm } from "./component/ProductForm";
import { ProductList } from "./component/ProductList";

const Product = () => {
  return (
    <Routes>
        <Route index element={<ProductList />} />
        <Route path=":id" element={<Product />} />
        <Route path="?page=:page" element={<ProductList />} />
        <Route path="form" element={<ProductForm />} />
        <Route path="form/:id" element={<ProductForm />} />
        <Route path="list" element={<ProductList />} />
        <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
};
export default Product;
