import React from "react";
import "./style.css";
const MenuCard = ({ menuData }) => {
  return (
    // console.log(menuData)
    <>
      <section className=" main-card--cointainer">
        {menuData.map((curElemrnt) => {
          const { id, price, name, description } = curElemrnt;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card bg-dark">
                  <div className="card-body">
                    <img
                      src={curElemrnt.image}
                      alt="images"
                      className="card-media"
                    />
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description">
                      {description}
                    </span>
                    {/* <div className="card-read">Read</div> */}
                    <div className="card-price">{price}</div>
                  </div>
                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
