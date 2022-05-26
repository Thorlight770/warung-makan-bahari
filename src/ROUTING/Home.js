import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate();
  return (
    <div>
        Home
        <button className='btn btn-primary' onClick={() => navigate("/product/001")}>Product</button>
    </div>
  )
}
export default Home;
