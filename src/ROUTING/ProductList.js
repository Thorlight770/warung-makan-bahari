import React from 'react'
import { Link } from 'react-router-dom'

export const ProductList = () => {
  return (
    <div className='mx-5 px-5'>
        <Link className='btn btn-primary my-3' to={"form"}>Add Product</Link>
        <h2>Product List</h2>
        <table className='table'>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>PRICE</td>
                    <td>ACTION</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>pid-0001</td>
                    <td>soklin</td>
                    <td>Rp.12000,-</td>
                    <td>
                        <button className='btn btn-danger'>DELETE</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}