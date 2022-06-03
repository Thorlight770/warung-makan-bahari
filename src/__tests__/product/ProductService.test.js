import ProductService from '../../page/product/services/ProductService';
import client from '../../shared/http-client/Client'

/**
 * this function for group all of Product Service Test
 */
describe('Product Service Test', () => {

    /**
     * test get product list non param
     */
    it('should return product list successfully', async () => {
        client.get = jest.fn();
        client.get.mockResolvedValue({
            data : {
                id : 1
            }
        });
    
        const productService = await ProductService().getProducts();
        const actualResponseId = productService.data.id;
        expect(client.get).toBeCalledWith('/products', {});
        expect(actualResponseId).toEqual(1);
    })
    /**
     * test get product using param
     */
    it('should return product list with params successfully', async () => {
        client.get = jest.fn();
        const params = {
            id : 1
        }
        client.get.mockResolvedValue({
            data: [
                {
                    data: {
                        id : "0001"
                    }
                }
            ]
        })

        const productService = await ProductService().getProducts(params);
        const actualResponseId = productService.data[0].data.id;
        expect(client.get).toHaveBeenCalledWith('/products', {params})
        expect(actualResponseId).toBe("0001");
    })
    /**
     * test post product
     */
    it('should return message create product successfully', async () => {
        client.post = jest.fn();
        const product = {
            id: "pid-001"
        }
        client.post.mockResolvedValue({
            status: 200,
            message: "Success create product",
            data: {
                id: "pid-001"
            } 
        })

        const productService = await ProductService().createProduct(product);
        const actualResponse = productService.message;
        expect(client.post).toHaveBeenCalledWith('/products', product)
        expect(actualResponse).toBe("Success create product")
    })
    /**
     * test put product
     */
     it('should return message update product successfully', async () => {
        client.put = jest.fn();
        const product = {
            id: "pid-001"
        }
        client.put.mockResolvedValue({
            status: 200,
            message: "Success update product",
            data: {
                id: "pid-001"
            } 
        })

        const productService = await ProductService().updateProduct(product);
        const actualResponse = productService.message;
        expect(client.put).toHaveBeenCalledWith('/products', product)
        expect(actualResponse).toBe("Success update product")
    })
    /**
     * test delete product
     */
    it('should return message delete product successfully', async () => {
        client.delete = jest.fn();
        const id ="pid-0001"
        client.delete.mockResolvedValue({
            status: 200,
            message: "Success delete product"
        })

        const productService = await ProductService().deleteProduct(id);
        const actualResponse = productService.message;
        expect(client.delete).toHaveBeenCalledWith(`/products?id=${id}`)
        expect(actualResponse).toBe("Success delete product")
    })
})