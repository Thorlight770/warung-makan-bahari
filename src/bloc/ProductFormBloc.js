import { useNavigate, useParams } from "react-router-dom";

const ProductFormBloc = (productRepository) => {
  const params = useParams();

  let {getProduct, createProduct, updateProduct} = productRepository();

  const getProductById = async (id) => {
    try {
      const response = await getProduct(id);
      console.log("BLOC : ",response);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  let nav = useNavigate();

  const handleSubmitBtn = (values) => {
    const response = createProduct(values);
    console.log(response);
    nav("/products");
  };

  const handleEditBtn = (values) => {
    updateProduct(values);
    nav("/products");
  };
  return {
    params,
    getProductById,
    nav,
    handleSubmitBtn,
    handleEditBtn,
  };
};

export default ProductFormBloc;
