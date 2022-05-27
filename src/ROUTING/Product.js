import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";
import { ProductForm } from "./ProductForm";
import { ProductList } from "./ProductList";

const Product = () => {
  return (
    <Routes>
        <Route index element={<ProductList />} />
        <Route path=":id" element={<Product />} />
        <Route path="form" element={<ProductForm />} />
        <Route path="list" element={<ProductList />} />
        <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
};
export default Product;
