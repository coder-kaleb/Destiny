import logo from "../assets/logo.png";
import "../css/navbar.css";
import MenuToggle from "./MenuToggle";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="">
        <img src={logo} alt="logo" className="img" />
      </div>
      <div className={`navigator ${isOpen ? "mobielnav" : ""}`}>
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="services">Services</a>
          </li>
          <li>
            <a href="features">Features</a>
          </li>
          <li>
            <a href="reviews">Reviews</a>
          </li>
          <li>
            <a href="pricing">Pricing</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
      <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
