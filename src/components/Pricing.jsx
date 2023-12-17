import "../css/pricing.css";
import PricingComponent from "./PricingComponent";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <h2 className="head-title">we've got a plan that's perfect for you</h2>

        <div className="pricing-component-container">
          <PricingComponent sticky={false} type="starter" pricing="30"/>
          <PricingComponent sticky={true} type="professional" pricing="60"/>
          <PricingComponent sticky={false} type="buziness" pricing="100"/>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
