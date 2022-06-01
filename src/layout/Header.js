import React from 'react'
import { Navbar, NavbarBrand } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar dark="true" color="primary" className="shadow mb-4">
        <NavbarBrand className="mr-auto">TOKESHOP</NavbarBrand>
    </Navbar>
  )
}
export default Header;
