/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react';

import { ITeamSlide } from '../../utils/types';
import { TeamSlide } from '../../components/TeamSlide';
import { LoadingIcon } from '../../assets/icons/LoadingIcon';

import './style.scss';

interface ITeamSlider {
  type: string;
  slides: Array<ITeamSlide>;
}

export const TeamSlider: React.FC<ITeamSlider> = ({ type, slides }) => {
  const [people, setPeople] = useState(slides.filter((slide) => slide.type === type));
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = (n: number) => {
    return activeSlide + n > people.length - 1 ? n - 1 : activeSlide + n;
  };

  const prevSlide = (n: number) => {
    return activeSlide - n < 0 ? people.length - n : activeSlide - n;
  };

  const handleSliderClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.pageX <= window.innerWidth / 2) {
      setActiveSlide(activeSlide <= 0 ? people.length - 1 : activeSlide - 1);
    } else {
      setActiveSlide(activeSlide >= people.length - 1 ? 0 : activeSlide + 1);
    }
  };

  useEffect(() => {
    setPeople(slides.filter((slide) => slide.type === type));
  }, [slides, type]);

  useEffect(() => {
    setActiveSlide(activeSlide > people.length - 1 ? 0 : activeSlide);
  }, [people, activeSlide]);

  return (
    <div className="our-team__carousel">
      <div className="our-team__carousel__wrapper" ref={sliderRef} onClick={handleSliderClick}>
        {slides.length > 0 ? (
          <>
            <TeamSlide key={0} active="left-second" {...people[prevSlide(2)]} />
            <TeamSlide key={1} active="left" {...people[prevSlide(1)]} />
            <TeamSlide key={2} active="true" {...people[activeSlide]} />
            <TeamSlide key={3} active="right" {...people[nextSlide(1)]} />
            <TeamSlide key={4} active="right-second" {...people[nextSlide(2)]} />
          </>
        ) : (
          <LoadingIcon />
        )}
      </div>
    </div>
  );
};
