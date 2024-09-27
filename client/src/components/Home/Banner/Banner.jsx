import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Convallis interdum purus adipiscing dis parturient posuere ac quam a
            eleifed montes parturient posuere curae tempor
          </p>
          <div className="ctas">
            <div className="banner-cta">Shop Now</div>
            <div className="banner-cta v2">Learn More</div>
          </div>
        </div>
        <img src={BannerImg} alt="banner" className="banner-img" />
      </div>
    </div>
  );
};

export default Banner;
