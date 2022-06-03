import ProductService from '../../page/product/services/ProductService';
import client from '../../shared/http-client/Client'

test('should return product list successfully', async () => {
    client.get = jest.fn();
    client.get.mockResolvedValue({
        data : {
            id : 1
        }
    });

    const productService = await (await ProductService().getProducts()).data;
    const actualResponseId = productService.id;
    expect(actualResponseId).toEqual(1);
})