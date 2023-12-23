import "../css/features.css";
import FeatureCard from "./featureCard";

const Features = () => {
  return (
    <section className="section" id="features">
      <div className="feature-container">
        <FeatureCard />
        <FeatureCard style="reverse" />
      </div>
    </section>
  );
};

export default Features;
