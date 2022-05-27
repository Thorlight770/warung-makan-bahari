import React from 'react'
import { Link } from 'react-router-dom'

export const CustomerForm = () => {
  return (
    <div>CustomerForm
        <Link className='btn btn-danger' to={"/Customers"}>Cancle</Link>
    </div>
  )
}
