import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <Router>
            <Nav>
                <NavLink to="/">Burger</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>   
        </Router>
    )
}

export default Navbar
