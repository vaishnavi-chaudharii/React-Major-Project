import React, { useState } from "react";
// import "./style.css"
// import MenuCard from "./MenuCard"
import Menu from "./FoodCourtMenu";
// import Navbar from './Navbar';
import Navigbar from "../Home/Navbar";
// import Navbar from "../BurgerNavBar";
// import Sidebar from "../BurgerSideBar";

const uniqueList = [
  "Home",
  ...new Set(
    Menu.map((curEle) => {
      return curEle.category;
    })
  ),
  "All",
];

console.log(uniqueList);




const Reaustraunt = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menu, setmenu] = useState(uniqueList);
  const filter = (category) => {
    const updateList = Menu.filter((curElemr) => {
      return curElemr.category === category;
    });
    setMenuData(updateList);
    if (category === "All") {
      setMenuData(Menu);
    }
  };


  return (
    <>
      <Navigbar menu={menu} filter={filter} menuData={menuData} />
      {/* <Navbar toggle={toggle} menu={menu} filter={filter} menuData={menuData} />
      <Sidebar isOpen={isOpen} toggle={toggle} /> */}
    </>
  );
};

export default Reaustraunt;
