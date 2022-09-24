import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Offcanvas } from "react-bootstrap";
import { useState } from "react";
// import Menucontainer from "../Menu/Menucontainer"
// import { FaPizzaSlice } from "react-icons/fa";
// import { MDBIcon } from 'mdb-react-ui-kit';
// import { IconName } from "react-icons/cg";
import "./Home.css";

const Sidebar = (props) => {
  const [show, setShow] = useState(false);
  const closeSidebar = () => setShow(false);
  const showSidebar = () => setShow(true);
  console.log(props.menu);
  // const list=props.menu
  let crEle = "Home";
  // console.log(list);

  return (
    <>
      {/* <Button
        variant="primary"
        onClick={showSidebar}
        className="menu navbar-toggler-icon "
      ></Button> */}
      {/* <Offcanvas placement="end" show={show} onHide={closeSidebar}> */}
        {/* <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body> */}
          <nav className="navbar-menu">
            <div className="btn-group">
              {/* {props.menu.map((crEle) => {
                console.log(crEle);
                return (
                  <button
                    className="btn-group__item"
                    onClick={() => {
                      props.shome(crEle);
                      props.filter(crEle);
                    }}
                  >
                    {crEle}
                  </button>
                );
              })} */}
            </div>
          </nav>
        {/* </Offcanvas.Body> */}
      {/* </Offcanvas> */}
    </>
  );
};

export default Sidebar;
