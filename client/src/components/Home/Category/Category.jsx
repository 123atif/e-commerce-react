import "./Category.scss";
// import cate1 from "../../../assets/category/cat-1.jpg";
// import cate2 from "../../../assets/category/cat-2.jpg";
// import cate3 from "../../../assets/category/cat-3.jpg";
// import cate4 from "../../../assets/category/cat-4.jpg";

const Category = ({ categories }) => {
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item, id) => (
          <div className="catgeory" key={id}>
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
