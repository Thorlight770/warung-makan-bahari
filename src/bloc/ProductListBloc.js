import axios from "axios";
import { useNavigate } from "react-router-dom";
import useProductList from "./UseProductList";

const ProductListBloc = (productRepository) => {
  const { screenState, setScreenState } = useProductList();

  let nav = useNavigate();

  let { getProducts, deleteProduct } = productRepository();

  const getProduct = async () => {
    try {
      setScreenState({ ...screenState, idLoading: true });
      const response = await getProducts();
      setScreenState({
        list: response.data.content,
        isLoading: false,
        pages: {
          pageNumber: response.data.page,
          totalPage: response.data.totalPages,
        },
      });
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
      setScreenState({
        list: res.data.content,
        pages: {
          pageNumber: res.data.page,
          totalPage: res.data.totalPages,
        },
      });
    });
  };

  return {
    screenState,
    nav,
    getProduct,
    handleEditBtn,
    handleDeleteBtn,
    handlePagination,
  };
};

export default ProductListBloc;
