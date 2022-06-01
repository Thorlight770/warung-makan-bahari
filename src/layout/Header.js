import React from 'react'
import { Button, Navbar, NavbarBrand } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar dark="true" color="primary" className="shadow mb-4 bg-primary justify-content-between">
        <NavbarBrand className="px-3" style={{color:"white", fontWeight: "bold"}}>TOKESHOP</NavbarBrand>
        <Button className="btn btn-danger mx-3"><i className="bi bi-box-arrow-left" style={{fontSize: "18px"}}></i></Button>
    </Navbar>
  )
}
export default Header;
