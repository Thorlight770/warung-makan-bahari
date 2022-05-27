import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductForm = () => {
    let nav = useNavigate();
  return (
    <div className='d-flex mx-3'>
        <form>
            <label className='label-control'>ID</label>
            <input className='form-control' type='text' />
            <label className='label-control'>NAME</label>
            <input className='form-control' type='text' />
            <label className='label-control'>PRICE</label>
            <input className='form-control' type='text' />
            <div className='my-3'>
                <button className='btn btn-primary'>Submit</button>
                <button className='btn btn-danger mx-3' onClick={() => nav("/products")}>Cancle</button>
            </div>
        </form>
    </div>
  )
}
