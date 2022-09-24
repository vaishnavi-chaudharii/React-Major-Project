import React, { useState } from "react";
import "./style-spon.css";
import Card from "./Card";
import List from "./ListSpon";

const Sponser = () => {
  const [menuData, setMenuData] = useState(List);

  return (
    <>
      <Card menuData={menuData} />
    </>
  );
};

export default Sponser;
