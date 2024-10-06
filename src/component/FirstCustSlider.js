import React from 'react';
import Play from '../img/play.png'
import ImgSet from '../img/maskImg.svg'

const SecondCont = ({ title, description, buttonText, onClick }) => {
    return (
        <div className="firstCarsl">
            <div className='sectionLeft'>
                <h4>{title}</h4>
                <p>{description}</p>
                <button
                    className="knowBtn"
                    onClick={onClick}
                >
                    {buttonText}
                    <div className='firstBtn'><img src={Play} alt="arrow1" /></div>
                </button>
            </div>
            <div className='sectionRight'>
                <img src={ImgSet} alt="" />
            </div>
        </div>
      );
};
export default SecondCont ;
