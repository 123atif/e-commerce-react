import "./Category.scss";
import cate1 from "../../assets/category/cat-1.jpg";
import cate2 from "../../assets/category/cat-2.jpg";
import cate3 from "../../assets/category/cat-3.jpg";
import cate4 from "../../assets/category/cat-4.jpg";

const Category = () => {
  return (
    <div className="shop-by-category">
      <div className="categories">
        <div className="catgeory">
          <img src={cate1} alt="category" />
        </div>
        <div className="catgeory">
          <img src={cate2} alt="category" />
        </div>
        <div className="catgeory">
          <img src={cate3} alt="category" />
        </div>
        <div className="catgeory">
          <img src={cate4} alt="category" />
        </div>
      </div>
    </div>
  );
};

export default Category;
