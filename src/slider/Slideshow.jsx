import styles from "./Slideshow.module.scss";
import slide1 from "./slides/slide1.jpg";
import slide2 from "./slides/slide2.jpg";
import slide3 from "./slides/slide3.jpg";
import { useState } from "react";
const Slideshow = () => {
  const fnGetId = () => {
    return Math.random().toString(36).substring(2, 9);
  };
  const [slidesArray, setSlidesArray] = useState([
    { id: fnGetId(), img: slide1, active: false },
    { id: fnGetId(), img: slide2, active: true },
    { id: fnGetId(), img: slide3, active: false },
  ]);
  let activeSlidePath = "";
  const activeSlide = () => {
    slidesArray.map((slide) =>
      slide.active === true ? (activeSlidePath = slide.img) : slide
    );
  };
  activeSlide();
  const radioOnChange = (eventObject) => {
    setSlidesArray(
      slidesArray.map((slide) =>
        slide.id === eventObject.target.id
          ? { ...slide, active: true }
          : { ...slide, active: false }
      )
    );
  };
  const dottesCreate = () => {
    return slidesArray.map((slide) => (
      <input
        key={slide.id}
        id={slide.id}
        type="radio"
        checked={slide.active}
        onChange={radioOnChange}
      />
    ));
  };
  return (
    <div className={styles.slideshow}>
      <div className={styles.image}>
        <img alt="alt" src={activeSlidePath} />
      </div>
      <div className={styles.sliderDottes}>{dottesCreate()}</div>
    </div>
  );
};

export default Slideshow;
