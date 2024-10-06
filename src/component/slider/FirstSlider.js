import React, { useState } from "react";
import "../../index.css";
import SecondCont from "../FirstCustSlider";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerView = 1;
  const totalSlides = slides.length;

  const goToNextSlide = () => {
    if (currentIndex < totalSlides - slidesPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const [startPosition, setStartPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(0);
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setStartPosition(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndPosition(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const distance = startPosition - endPosition;
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        goToNextSlide();
      } else {
        goToPreviousSlide();
      }
    }
  };

  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setEndPosition(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      const distance = startPosition - endPosition;
      if (Math.abs(distance) > minSwipeDistance) {
        if (distance > 0) {
          goToNextSlide();
        } else {
          goToPreviousSlide();
        }
      }
    }
    setIsDragging(false);
  };

  return (
    <div
      className="top-carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-itemSet" key={index}>
            <SecondCont
              title={slide.title}
              description={slide.description}
              buttonText={slide.buttonText}
              onClick={() => alert(`Know more about ${slide.title}`)}
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
