import React from 'react'
import { Link } from 'react-router-dom'

const CustomerForm = () => {
  return (
    <div>CustomerForm
        <Link className='btn btn-danger' to={"/Customers"}>Cancle</Link>
    </div>
  )
}
export default CustomerForm;
