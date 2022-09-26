import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {Link} from 'react-router-dom'
import logo from "./logo.svg";
import "./Home.css";
import Sidebar from "./Sidebar";
import MenuCard from "./Deals/MenuCard";
import Home from "./Home";
import Popup from "./Popup";

import { BrowserRouter as Router } from "react-router-dom";


function Navigbar(props) {
  const [mhome, setmhome] = useState("Home");
  const [openModal, setopenModal] = useState(false);
  const Para = (props) => {
    console.log(props.menuData);
    if (mhome == "Home") {
      return <Home />;
    } else {
      return <MenuCard menuData={props.menuData} />;
    }
  };

  console.log(props.menu);

  const shome = (para) => {
    setmhome(para);
  };

  return (
    <>
        <Navbar
        bg="light"
        variant="dark"
        sticky="top"
        className="navbar bg-sm-dark"
        expand="sm"
        collapseOnSelect // coment to add side bar
      >
        <Navbar.Brand sticky="top">
          <img src={logo} width="40px" height="40px" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          {/* coment to add side bar  */}
          <Nav>
            <Link className="links" to="/">
              Home
            </Link>
            <Link className="links" to="/burger">
              Burger
            </Link>
            <Link className="links" to="/pizza">
              Pizza
            </Link>
            <Link className="links" to="/fries">
              Fries
            </Link>
            <Link className="links" to="#contactus">
              Contact Us
            </Link>
            <Link className="links" id="signup" to="signup">
              Sign up
            </Link>
            <Sidebar menu={props.menu} filter={props.filter} shome={shome} />
          </Nav>
        </Navbar.Collapse>
        {/* coment to add side bar */}
      </Navbar>

      <Para menuData={props.menuData} />
    </>
  );
}

export default Navigbar;
