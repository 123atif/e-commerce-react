import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import "./Cart.scss";
import { useContext } from "react";
import { Context } from "../../utils/Context";
import { useNavigate } from "react-router-dom";
const Cart = ({ setShowCart }) => {
  const navigate = useNavigate();
  const { cartSubTotal, cartItems } = useContext(Context);
  return (
    <div className="cart-panel">
      <div className="opac-layer" onClick={() => setShowCart(false)}></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>
        {cartItems.length < 1 ? (
          <div className="empty-cart">
            <BsCartX size={100} />
            <span>No Product in the cart</span>
            <button
              className="return-cta"
              onClick={() => {
                navigate("/");
                setShowCart(false);
              }}
            >
              RETURN TO SHOP
            </button>
          </div>
        ) : (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="price">PKR: {cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta">Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
