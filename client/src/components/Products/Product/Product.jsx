import "./Product.scss";
import { useNavigate } from "react-router-dom";
const Product = ({ id, data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${data?.id}`)}
    >
      <div className="thumbnail">
        <img
          src={import.meta.env.VITE_DEV_URL + data?.img[0]?.url}
          alt="product-image"
        />
      </div>
      <div className="prod-details">
        <span className="name">{data?.title}</span>
        <span className="price">{`RS:${data?.price}`}</span>
      </div>
    </div>
  );
};

export default Product;
