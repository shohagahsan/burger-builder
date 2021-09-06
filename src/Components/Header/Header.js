import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import './Header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className="Navigation">
            <Navbar style={{ backgroundColor: "#D70F64", height: "70px" }}>
                <NavbarBrand href="/" className="me-auto ms-md-5 Brand"><img src={Logo} alt="Logo" width="80px" /></NavbarBrand>
                <Nav className="me-md-5">
                    <NavItem>
                        <NavLink exact to="/" className="NavLink">Burger Builder</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/orders" className="NavLink">Orders</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/login" className="NavLink">Login</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;