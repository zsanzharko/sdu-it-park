import React, { useState, useEffect } from 'react';

import "./banner.scss";

const BannerHeader = (props) => {
    const {children} = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    useEffect(() => {
        setLength(children.length);
    }, [children])

    const goToPrevious = () => {
        let index = currentIndex - 1;
        index < 0 ? setCurrentIndex(length - 1) : setCurrentIndex(index);
    }
    
    const goToNext = () => {
        let index = currentIndex + 1;
        index === length ? setCurrentIndex(0) : setCurrentIndex(index);
    }

    const arrowAnimation = () => {
        const arrows = document.querySelectorAll(".banner-button");

        arrows.forEach(element => {
            if(element.style.opacity === "1") element.style.opacity = 0;
            else element.style.opacity = 1;
        })
    }

    return (
        <div className="banner" onMouseEnter={arrowAnimation} onMouseLeave={arrowAnimation}>
            <div className="banner-wrapper">
                <button className="banner-button arrowLeft" onClick={goToPrevious}>❮</button>
                <button className="banner-button arrowRigth" onClick={goToNext}>❯</button>
                <ul className="banner-dots-container">
                    {children.map((slide, slideIndex) => (
                        <li key={slideIndex} className="banner-dot" onClick={() => {
                            setCurrentIndex(slideIndex);
                            document.querySelector(".banner-slides").style.transform = `translateX(-${-100 * slideIndex}%)`;
                        }} style={{backgroundColor:`${slideIndex === currentIndex ? "#9f2728" : "#ffffff"}`}}></li>
                    ))}
                </ul>
            </div>
            <div className="banner-slides" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                {children}
            </div>
        </div>
    );
}

export default BannerHeader;
