import logo from "../assets/logo.png";
import MenuToggle from "./MenuToggle";
import "../css/navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll",  handleScroll);
  }, []);
  return (
    <header className={`header ${isScroll ? "header-white" : ""}`}>
      <nav className="nav">
        <img src={logo} alt="logo" className="logo" />
        <ul className="desktop-ul">
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">services</a>
          </li>
          <li>
            <a href="">features</a>
          </li>
          <li>
            <a href="">reviews</a>
          </li>
          <li>
            <a href="">pricing</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>

        <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
      <ul className={`mobiel-ul ${isOpen ? "open" : ""} `}>
        <li>
          <a href="">home</a>
        </li>
        <li>
          <a href="">services</a>
        </li>
        <li>
          <a href="">features</a>
        </li>
        <li>
          <a href="">reviews</a>
        </li>
        <li>
          <a href="">pricing</a>
        </li>
        <li>
          <a href="">contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
