import { cloneElement, useEffect, useRef } from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import "../css/pricing.css";
const CompaniesAnimation = () => {
  const animationCont = useRef(null);
  const animated = useRef(null);
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      const childLi = Array.from(animated.current.children);
      childLi.forEach((item) => {
        const dublicatedItem = item.cloneNode(true);
        dublicatedItem.setAttribute("data-animated", "true");
        animated.current.appendChild(dublicatedItem);
      });
    }
  });
  return (
    <section className="horizontal-animation">
      <div className="animation-container" ref={animationCont}>
        <ul className="animated" ref={animated}>
          <li>
            <img src={logo1} alt="logo" />
          </li>
          <li>
            <img src={logo2} alt="logo" />
          </li>
          <li>
            <img src={logo3} alt="logo" />
          </li>
          <li>
            <img src={logo4} alt="logo" />
          </li>
          <li>
            <img src={logo6} alt="logo" />
          </li>
          <li>
            <img src={logo7} alt="logo" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CompaniesAnimation;
