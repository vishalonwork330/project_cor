import React from 'react';
import Arrow from '../img/rightArrow.png'

const Container = ({ title, description, buttonText, onClick }) => {
  return (
    <div className="carousel-content">
        <h4>{title}</h4>
        <p>{description}</p>
        <button
            className="know-more-button"
            onClick={onClick}
        >
            {buttonText}
            <span className='arrowShow'><img src={Arrow} alt="arrow" /></span>
        </button>
    </div>
  );
};

export default Container;
