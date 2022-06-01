import client from "../../../shared/http-client/Client"

const ProductService = () =>{

const getProducts = async (params) => {
    const response = await client.get('/products', {params})
    return response;
}

async function getProduct(id){
    const response = await client.get(`/products/${id}`)
    return response;
}

async function createProduct(product){
    const response = await client.post('/products', product)
    return response;
}

async function updateProduct(product){
    const response = await client.put('/products', product)
    return response;
}

async function deleteProduct(id){
    console.log("[PAGE REPOSITORY]", id);
    const response = await client.delete(`/products?id=${id}`)
    return response;
}

return{
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}

}

export default ProductService;