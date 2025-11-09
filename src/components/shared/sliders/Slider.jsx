// custom slider without any slider libraries
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Slider.css";
import banner1 from "../../../assets/images/banner/banner-img.png";
import banner2 from "../../../assets/images/banner/banner-img.png";
import banner3 from "../../../assets/images/banner/banner-img.png";

const slides = [
  { id: 1, image: banner1, text: "Slide 1" },
  { id: 2, image: banner2, text: "Slide 2" },
  { id: 3, image: banner3, text: "Slide 3" },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 100);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(true);
    }, 100);
  };

  // Optional: auto-slide
  // useEffect(() => {
  //   const timer = setInterval(() => nextSlide(), 4000);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className="slider-container">
      <div className="slider-contents d-flex">
        {/* First Slider Block */}
        <div className="slider-content border-grey d-flex align-items-center flex-column justify-content-center position-relative">
          <div className={`slide ${fade ? "fade-in" : "fade-out"}`}>
            <img
              src={slides[current].image}
              alt="banner"
              className="content-img mb-3"
            />
            {/* <p>{slides[current].text}</p> */}
          </div>

          {/* Navigation buttons */}
          <Button
            variant="light"
            className="slider-btn left"
            onClick={prevSlide}
          ></Button>
          <Button
            variant="light"
            className="slider-btn right"
            onClick={nextSlide}
          ></Button>

          {/* Dots */}
          <div className="dots">
            {slides.map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrent(i)}
                className={`dot ${i === current ? "active" : ""}`}
              ></span>
            ))}
          </div>
        </div>

        {/* Second Slider Block */}
        <div className="slider-content slider-content2 border-grey d-flex align-items-center flex-column justify-content-center">
          <div className={`slide ${fade ? "fade-in" : "fade-out"}`}>
            <img
              src={slides[current].image}
              alt="banner"
              className="content-img mb-3"
            />
            {/* <p>{slides[current].text}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
