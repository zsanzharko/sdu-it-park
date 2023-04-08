import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./about.scss";

import puzzleLeft from "../../assets/images/puzzle-left.svg";
import puzzleRight from "../../assets/images/puzzle-right.svg";
import socket from "../../assets/images/socket.svg";
import shalabek from "../../assets/images/shalabek.png";
import sdulogo from '../../assets/images/sdu_technopark_logo.png';
import people from "../../assets/images/pic-for-about.png";
import { CarouselImage } from "../../components/CarouselImage";

const teachers = [
  {
    id: 0,
    name: "Шаломов Шалабек 1",
    img: shalabek
  },
  {
    id: 1,
    name: "Шаломов Шалабек 2",
    img: "https://images.ctfassets.net/hrltx12pl8hq/qGOnNvgfJIe2MytFdIcTQ/429dd7e2cb176f93bf9b21a8f89edc77/Images.jpg"
  },
  {
    id: 2,
    name: "Шаломов Шалабек 3",
    img: shalabek
  },
  {
    id: 3,
    name: "Шаломов Шалабек 4",
    img: "https://images.ctfassets.net/hrltx12pl8hq/qGOnNvgfJIe2MytFdIcTQ/429dd7e2cb176f93bf9b21a8f89edc77/Images.jpg"
  },
  {
    id: 4,
    name: "Шаломов Шалабек 5",
    img: shalabek
  },
  {
    id: 5,
    name: "Шаломов Шалабек 6",
    img: "https://images.ctfassets.net/hrltx12pl8hq/qGOnNvgfJIe2MytFdIcTQ/429dd7e2cb176f93bf9b21a8f89edc77/Images.jpg"
  },
  {
    id: 6,
    name: "Шаломов Шалабек 7",
    img: shalabek
  },
  {
    id: 7,
    name: "Шаломов Шалабек 8",
    img: "https://images.ctfassets.net/hrltx12pl8hq/qGOnNvgfJIe2MytFdIcTQ/429dd7e2cb176f93bf9b21a8f89edc77/Images.jpg"
  }
]

const students = [
  {
    id: 0,
    name: "Шаломов Шалабек 21",
    img: "https://pixlr.com/images/index/remove-bg.webp"
  },
  {
    id: 1,
    name: "Шаломов Шалабек 22",
    img: shalabek
  },
  {
    id: 2,
    name: "Шаломов Шалабек 23",
    img: "https://pixlr.com/images/index/remove-bg.webp"
  },
  {
    id: 3,
    name: "Шаломов Шалабек 24",
    img: shalabek
  },
  {
    id: 4,
    name: "Шаломов Шалабек 25",
    img: "https://pixlr.com/images/index/remove-bg.webp"
  },
  {
    id: 5,
    name: "Шаломов Шалабек 26",
    img: shalabek
  },
  {
    id: 6,
    name: "Шаломов Шалабек 27",
    img: "https://pixlr.com/images/index/remove-bg.webp"
  },
  {
    id: 7,
    name: "Шаломов Шалабек 28",
    img: shalabek
  }
]

function About() {
  const [peopleDatabase, setPeopleDatabase] = useState(students);
  const [imageArray, setImageArray] = useState(peopleDatabase.slice(0, 5));
  const [activeButton, setActiveButton] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = () => {
    setActiveButton(!activeButton);
    if (activeButton) {
      setPeopleDatabase(teachers);
    } else {
      setPeopleDatabase(students);
    }
  }

  const handleSliderClick = (e) => {
    if (e.pageX <= window.innerWidth / 2) {
      return activeIndex === 0 ? setActiveIndex(peopleDatabase.length - 1) : setActiveIndex(activeIndex - 1);
    } else {
      return activeIndex === peopleDatabase.length - 1 ? setActiveIndex(0) : setActiveIndex(activeIndex + 1);
    }
  }

  useEffect(() => {
    const minIndex = activeIndex;
    const maxIndex = activeIndex + 5;
    const temp = peopleDatabase.slice(minIndex, maxIndex);
    if (maxIndex > peopleDatabase.length - 1) {
      const remainder = activeIndex - 3;
      temp.push(...peopleDatabase.slice(0, remainder));
    }
    setImageArray(temp);
  }, [activeIndex, peopleDatabase]);

  const ourMissionRef = useRef();
  const [dirMissionIsVisible, setDirMissionIsVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setDirMissionIsVisible(entry.isIntersecting);
    })
    observer.observe(ourMissionRef.current);

    if (dirMissionIsVisible) {
      const puzzles = document.querySelectorAll(".puzzle");
      const socket = document.querySelector(".socket");
      const socketBlock = document.querySelector(".socket-block");

      puzzles.forEach((puzzle) => {
        puzzle.classList.add("animation-puzzle");
      });
      setTimeout(() => {
        socket.classList.add("animation-socket");
        setTimeout(() => {
          socketBlock.classList.add("animation-socket");
        }, 1000);
      }, 1000);
    }
  });

  return (
    <div className="about">
      <section className="about-section first" ref={ourMissionRef}>
        <h2 className="title">наша миссия</h2>
        <div className="about-img-block">
          <img src={puzzleLeft} alt="" className="puzzle puzzle-left" />
          <div className="socket-block">
            <img src={socket} alt="" className="socket"/>
          </div>
          <img src={puzzleRight} alt="" className="puzzle puzzle-right" />
        </div>
        <p><span>трансформировать сообщество СДУ в<br/>комьюнити предпринимателей, где<br/>каждый вне зависимости от своих<br/>скиллов и идей будет иметь<br/>возможность реализовать свои<br/>проекты и довести их до конечного<br/>продукта.</span></p>
        <button className="banner-arrow arrowDown" onClick={() => {
          document.querySelector(".about-section.second").scrollIntoView({behavior: "smooth", block: "start"});
        }}>❮</button>
      </section>

      <section className="about-section second">
        <h2 className="title">наша команда</h2>
        <div className="about-button-block">
          <button disabled={activeButton} onClick={handleButtonClick}>студенты</button>
          <button disabled={!activeButton} onClick={handleButtonClick}>учителя</button>
        </div>
        <div className="about-carousel">
          <div className="about-carousel__wrapper" onClick={(e) => handleSliderClick(e)}>
            <CarouselImage style={{ opacity: 0.3 }} person={imageArray[0]}/>
            <CarouselImage style={{ opacity: 0.7 }} person={imageArray[1]}/>
            <CarouselImage person={imageArray[2]}/>
            <CarouselImage style={{ opacity: 0.7 }} person={imageArray[3]}/>
            <CarouselImage style={{ opacity: 0.3 }} person={imageArray[4]}/>
          </div>
        </div>
        <p className="under-carousel__name">{imageArray[3].name}</p>
        <p className="under-carousel__text">Команда Технопарка состоит из наставников, имеющих индустриальный и/или исследовательский опыт. Это преподаватели СДУ, студенты с опытом участия в проектах, эксперты из индустрии.</p>
        <button className="banner-arrow arrowDown" onClick={() => {
          document.querySelector(".about-section.third").scrollIntoView({behavior: "smooth", block: "start"});
        }}>❮</button>
      </section>

      <section className="about-section third">
        <div className="about-section-block">
          <img src={sdulogo} alt="" />
          <h2>Раскроем потенциал вместе</h2>
          <Link to="/cooperation" onClick={() => {
            document.documentElement.scrollIntoView({behavior: "smooth", block: "start"});
          }}><button className="block-button">Заполнить форму</button></Link>
        </div>
        <div className="img-composition">
          <div>
            <div></div>
          </div>
          <img src={people} alt="" />
        </div>
      </section>
    </div>
  )
}

export default About;