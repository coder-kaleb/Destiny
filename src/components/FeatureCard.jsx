import feature from "../assets/feature_1.png";
import { CheckSquare } from "react-feather";

const FeatureCard = ({style}) => {
  return (
    <div className={`upper-feature ${style ? "reverse" : ""}`}>
      <div>
        <img src={feature} alt="feature-image" className="feature-img" />
      </div>

      <div className="feature-txt">
        <h3>Designed for Startups & brands.</h3>
        <p>
          Just get the code and sit tight, you will witness its power and
          performance in lead generations. Is simple yet Powerful and productive
          technology. Experience, then believe.
        </p>
        <div className="lists">
          <p>
            <CheckSquare /> Write some feature here.
          </p>
          <p>
            <CheckSquare /> Repeat the same with another one.
          </p>
          <p>
            <CheckSquare /> Complete the list with the last.
          </p>
        </div>
        <div>
          <button className="btn">watch intro</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
