import React, { useState } from "react";
import {Link} from "react-router-dom";
// import Navbar from '../BurgerNavBar'
// import Sidebar from '../BurgerSideBar'


function Popup() {
//   const [isOpen, setIsOpen] = useState(false);

// const toggle = ()=>{
//     setIsOpen(!isOpen)
// }
  return (
    <>
    <div className='n-bar'>
     
     <div className="links">
            <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="" />
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
     </div>
     <div>
     <Link className="links" id="signup" to="/signup">
              Sign up
            </Link>
     </div>
    </div>
    
    <div class="contact-container">
      
            <div class="contact-form">
                <form>
                    <div class="row">
                        <div class="input50">
                            <input type="text" placeholder="Enter your name:" />
                        </div>
                        <div class="input50">
                            <input type="text" placeholder="Enter your mobile number:" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input50">
                            <input type="text" placeholder="Enter your email:" />
                        </div>
                        <div class="input50">
                            <input type="text" placeholder="Enter your Subject:" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input100">
                            <textarea placeholder="Enter the message:"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input100">
                            <input type="Submit" value="Send"/>
                        </div>
                    </div>
                </form>
            </div>
</div>
</>
  );
}

export default Popup;
