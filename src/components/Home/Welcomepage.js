import React from "react";
import "./Home.css";
const Welcomepage = () => {
  return (
    <section id="home">
      <div className="homeSe">
        <h1 className=" h-primary">Welcome to FoodCourt</h1>
        <p>
        Welcome every morning with a smile. Look on the new day as another special gift from your Creator, another golden opportunity to complete what you were unable to finish your food.
        </p>
        <p>There is no love sincerer than the love of food.</p>
        <button className="btnn">Order Now</button>
      </div>
    </section>
  );
};

export default Welcomepage;
