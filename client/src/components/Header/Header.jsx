import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/Context";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

import "./Header.scss";
const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartItems } = useContext(Context);
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
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            ONLINESTORE.
          </div>
          <div className="right">
            <FaSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <AiOutlineShoppingCart />
              {cartItems.length > 0 ? (
                <span className="cart-count">{cartItems.length}</span>
              ) : null}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
