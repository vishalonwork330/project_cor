import React, { useState, useEffect } from "react";
import "../../index.css";
import Container from "../CustomSlider";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const totalSlides = slides.length;

  const updateSlidesPerView = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 525) {
      setSlidesPerView(1);
    } else if (screenWidth < 991) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

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
      className="carousel"
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
        style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            className="carousel-item"
            key={index}
            style={{ minWidth: `${100 / slidesPerView}%` }}
          >
            <Container
              title={slide.title}
              description={slide.description}
              buttonText={slide.buttonText}
              onClick={() => alert(`Know more about ${slide.title}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
