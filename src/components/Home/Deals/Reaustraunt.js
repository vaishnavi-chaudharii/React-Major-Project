import React, { useState } from "react";
import "./style.css";
import MenuCard from "./MenuCard";
import Menu from "./Menu";

const Reaustraunt = () => {
  const [menuData, setMenuData] = useState(Menu);

  return (
    <>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Reaustraunt;
