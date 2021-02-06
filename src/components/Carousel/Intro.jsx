import Button, { Button2 } from "../Button/Button";
import classes from "./Carousel.module.css";
const Intro = ({ heading }) => {
  return (
    <div className={classes.intro}>
      <h1>{heading ? `${heading}` : "We Protect The Environment"}</h1>
      <p>A Non Profit Organization fighting for climate change </p>
      <Button text="Our Work" link="/gallery" />
      <Button2 text="Learn More" link="/about" />
    </div>
  );
};

export default Intro;
