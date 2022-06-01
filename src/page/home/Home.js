import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate();
    let id = '001'
  return (
    <div>
        Home
        <button className='btn btn-primary' onClick={() => navigate(`/products/${id}`)}>Product</button>
    </div>
  )
}
export default Home;
