// src/components/BurgerNav.js
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { FiMenu } from "react-icons/fi"; // You can choose a different icon from react-icons library

const BurgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="burger-icon">
        <FiMenu size={24} onClick={() => setIsOpen(!isOpen)} />
      </div>
      <Menu isOpen={isOpen} onStateChange={handleStateChange}>
        <a onClick={closeMenu} className="menu-item" href="/">
          Home
        </a>
        <a onClick={closeMenu} className="menu-item" href="/about">
          About
        </a>
        <a onClick={closeMenu} className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    </>
  );
};

export default BurgerNav;
