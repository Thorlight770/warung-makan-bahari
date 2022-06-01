import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <Nav vertical="true" pills="true">
        <NavItem>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <Link to="customers" className="nav-link">
            Customer
          </Link>
        </NavItem>
        <NavItem>
          <Link to="products" className="nav-link">
            Product
          </Link>
        </NavItem>
      </Nav>
    </>
  );
};

export default Sidebar;
