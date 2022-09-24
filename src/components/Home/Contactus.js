import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
// import { MDBIcon } from 'mdb-react-ui-kit';
const Contactus = () => {
  return (
    <section id="contactus">
      <div className="container-item">
        <p>Food Court</p>
        <div className="media">
          <span className="melement">
            <FaFacebook />
          </span>
          <span className="melement">
            <FaTwitter />
          </span>
          <span className="melement">
            <FaYoutube />
          </span>
          <span className="melement">
            <FaInstagram />
          </span>
        </div>
      </div>
      <div className="copyright">
        Copyright &copy; www.foodcourt.com. All rights reserved!
      </div>
    </section>
  );
};

export default Contactus;
