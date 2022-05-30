import client from "../../../shared/http-client/Client"

export const getProducts = async (params) => {
    const response = await client.get('/products', {params})
    return response;
}

export async function getProduct(id){
    const response = await client.get(`/products/${id}`)
    return response;
}

export async function createProduct(product){
    const response = await client.post('/products', product)
    return response;
}

export async function updateProduct(product){
    const response = await client.put('/products', product)
    return response;
}

export async function deleteProduct(params){
    const response = await client.delete(`/products`, {params})
    return response;
}