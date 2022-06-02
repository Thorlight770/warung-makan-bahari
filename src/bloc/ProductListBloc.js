import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductListBloc = (productRepository) => {
  const [list, setList] = useState([]);
  const [pages, setPages] = useState({});
  const [loading, setLoading] = useState(false);

  let nav = useNavigate();

  let {getProducts, deleteProduct} = productRepository();

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await getProducts();
      setList(response.data.content);
      setPages({
        pageNumber: response.data.page,
        totalPage: response.data.totalPages,
      });
      setLoading(false);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteBtn = async (id) => {
    await deleteProduct(id);
    console.log(id);
    getProduct();
  };

  const handleEditBtn = (id) => {
    nav(`form/${id}`);
  };

  const handlePagination = (page) => {
    axios.get(`http://localhost:3000/products?page=${page}`).then((res) => {
      setList(res.data.content);
      setPages({ ...pages, pageNumber: page });
    });
  };


  return {
      list,
      pages,
      loading,
      nav,
      getProduct,
      handleEditBtn,
      handleDeleteBtn,
      handlePagination
  }
};


export default ProductListBloc;
