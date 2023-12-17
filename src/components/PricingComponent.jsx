import React from "react";

const PricingComponent = ({ type, sticky, pricing }) => {
  return (
    <div className={`pricing-compo ${sticky ? "popular" : ""}`}>
      {sticky && <p className="sticky">popular</p>}
      <div className="upper-info">
        <h4 className="title">{type}</h4>
        <div className="price">
          <p>
            <small className="dollar">$</small>
            {pricing} <small className="period">/Month</small>
          </p>
        </div>
      </div>

      <ul className="features">
        <li>05 Email Account</li>
        <li> 50 GB Space</li>
        <li> 1 Domain Name</li>
        <li> 200 GB Bandwidth</li>
        <li> 01 Mysql Databases</li>
        <li> Enhanced Security</li>
      </ul>

      <div className="btn-container">
        <button className="btn">purchase now</button>
      </div>
    </div>
  );
};

export default PricingComponent;
