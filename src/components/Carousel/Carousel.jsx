import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Carousel.module.css";


import img1 from "../../images/carousel/wed1.jpg";
import img2 from "../../images/carousel/wed3.jpg";
import img3 from "../../images/carousel/wed2.jpg";
import Intro from "./Intro";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    draggable: true,
    overflow:false,
    className: "slider",
  };
  return (
    <Slider  {...settings}>
      <div>
       <Intro  heading={'Welcome to EPO'}/>
        <img className={classes.imgs} src={img1} alt="epo=intro" />
      </div>
      <div>
      <Intro/>
        <img className={classes.imgs} src={img2} alt="epo=intro" />
      </div>
      <div>
      <Intro/>
        <img className={classes.imgs} src={img3} alt="epo=intro" />
      </div>
    </Slider>
  );
};

export default Carousel;
