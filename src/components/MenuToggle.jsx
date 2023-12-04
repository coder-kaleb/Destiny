import { useState } from "react";

const MenuToggle = ({isOpen, setIsOpen}) => {
  return (
    <div
      className={`menu-container ${isOpen ? "openmenu" : ""}`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuToggle;
