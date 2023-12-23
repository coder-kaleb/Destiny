import "../css/features.css";
import FeatureCard from "./FeatureCard";

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
