import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/Context";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

import "./Header.scss";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offSet = window.scrollY;
    if (offSet > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center">ONLINESTORE.</div>
          <div className="right">
            <FaSearch />
            <AiOutlineHeart />
            <span className="cart-icon">
              <AiOutlineShoppingCart />
              <span>5</span>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
