import React from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {
    let params = useParams()
    console.log(params);
  return (
    <div>Product dengan id : {params.id}</div>
  )
}
export default Product;
