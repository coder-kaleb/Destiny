import React from "react";
import "../css/cta.css"
const CTA = () => {
  return (
    <section className="section-cta">
      <div className="cta-wrapper">
        <div className="txt-info">
          <h2>Still confused ? Try a 7-day free trial now</h2>
          <p>
            Don't worry, we won't need your credit card details. Just enter your
            email address and we'll take care of the rest.
          </p>
          <div className="cta">
            <input type="text" placeholder="join the wait list" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
