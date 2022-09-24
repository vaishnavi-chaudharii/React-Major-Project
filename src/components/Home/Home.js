import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import Navigbar from "./Navbar"
import Welcomepage from "./Welcomepage";
import BeastDeals from "./BeastDeals";
import OuSponser from "./OuSponser";

import "./Home.css";
import Contactus from "./Contactus";

const Home = () => {
  return (
    <>
      {/* <Navigbar/> */}
      <Welcomepage />

      <BeastDeals />
      <OuSponser />
      <Contactus />
    </>
  );
};

export default Home;
