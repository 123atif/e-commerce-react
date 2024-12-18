import "./Category.scss";
import { useNavigate } from "react-router-dom";
const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="sec-heading">Shop By Category</div>
      <div className="categories">
        {categories?.data?.map((item, id) => (
          <div
            className="catgeory"
            key={id}
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={`${import.meta.env.VITE_DEV_URL}${item.img.url}`}
              alt="category"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
