import React from "react";
import "./style-spon.css";
const Card = ({ menuData }) => {
  return (
    // console.log(menuData)
    <>
      <section className=" main-card--cointainer-spon">
        {menuData.map((curElemrnt) => {
          const { id, name, description } = curElemrnt;
          return (
            <>
              <div className="card-container-spon" key={id}>
                <div className="card ">
                  <div className="card-body-spon">
                    <img
                      src={curElemrnt.image}
                      alt="images"
                      className="card-media"
                    />
                    <h2 className="card-title-spon"> {name} </h2>
                    {/* <span className="card-description subtle">
              {description}
            </span> */}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Card;
