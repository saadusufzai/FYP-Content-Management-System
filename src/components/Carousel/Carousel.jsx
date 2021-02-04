import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from "./Carousel.module.css";


import img1 from "../../images/carousel/img1.jpg";
import Intro from "./Intro";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    className: "slider",
  };
  return (
    <Slider {...settings}>
      <div>
       <Intro  heading={'Welcome to Environmental Protection Organization'}/>
        <img className={classes.imgs} src={img1} alt="epo=intro" />
      </div>
      <div>
      <Intro/>
        <img className={classes.imgs} src={img1} alt="epo=intro" />
      </div>
      <div>
      <Intro/>
        <img className={classes.imgs} src={img1} alt="epo=intro" />
      </div>
    </Slider>
  );
};

export default Carousel;
