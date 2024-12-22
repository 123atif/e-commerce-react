import "./SingleProduct.scss";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import "./SingleProduct.scss";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
const SingleProduct = () => {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  console.log(data);
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={import.meta.env.VITE_DEV_URL + data?.data[0]?.img[0]?.url}
              alt="product_details_image"
            />
          </div>
          <div className="right">
            <span className="name">{data?.data[0]?.title}</span>
            <span className="price">RS: {data?.data[0]?.price}</span>
            <span className="desc">{data?.data[0]?.desc}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={() => count > 1 && setCount(count - 1)}>-</span>
                <span>{count}</span>
                <span onClick={() => setCount(count + 1)}>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider"></span>
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span> {data?.data[0]?.categories[0]?.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icon">
                  <FaFacebook size={18} />
                  <FaInstagram size={18} />
                  <FaLinkedin size={18} />
                  <FaPinterest size={18} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
