import React from "react";
import Reaustraunt from "./Deals/Reaustraunt";
const BeastDeals = () => {
  return (
    <section id="bestdeal">
      <div className="bestdeals">
        <div className="deals-title">
          <h1 className="h-secondary-deal">Best Deals</h1>
        </div>

        <Reaustraunt />
      </div>
    </section>
  );
};

export default BeastDeals;
