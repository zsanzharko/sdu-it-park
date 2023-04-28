/* eslint-disable jsx-a11y/control-has-associated-label */
import { useEffect, useState } from 'react';
import './style.scss';

interface IDecorationBanner {
  id: number;
  background: string;
}

export const DecorationBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState<IDecorationBanner[]>([]);
  const [opacity, setOpacity] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((index) => (index - 1 < 0 ? slides.length - 1 : index - 1));
  };

  const goToNext = () => {
    setCurrentIndex((index) => (index + 1 === slides.length ? 0 : index + 1));
  };

  const goToSlide = (slide: IDecorationBanner) => {
    setCurrentIndex(slide.id);
  };

  const arrowAnimation = () => {
    setOpacity(opacity ? 0 : 1);
  };

  useEffect(() => {
    const data: IDecorationBanner[] = [
      {
        id: 0,
        background:
          'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
      },
      {
        id: 1,
        background:
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
      },
      {
        id: 2,
        background:
          'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
      },
    ];
    setSlides(data);
  }, []);

  return (
    <div className="decoration-banner" onMouseEnter={arrowAnimation} onMouseLeave={arrowAnimation}>
      <div className="decoration-banner__wrapper">
        <button
          type="button"
          className="decoration-banner__arrow decoration-banner__arrow-left"
          onClick={goToPrevious}
          style={{ opacity: `${opacity}` }}
        >
          ❮
        </button>
        <button
          type="button"
          className="decoration-banner__arrow decoration-banner__arrow-right"
          onClick={goToNext}
          style={{ opacity: `${opacity}` }}
        >
          ❯
        </button>
        <div className="decoration-banner__dots">
          {slides.map((slide) => (
            <button
              key={slide.id}
              type="button"
              className="decoration-banner__dot"
              onClick={() => goToSlide(slide)}
              style={{ backgroundColor: `${slide.id === currentIndex ? '#9f2728' : '#ffffff'}` }}
            />
          ))}
        </div>
      </div>
      <div
        className="decoration-banner__slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => {
          return (
            <div
              key={slide.id}
              className="decoration-banner__slide"
              style={{ backgroundImage: `url(${slide.background})` }}
            />
          );
        })}
      </div>
    </div>
  );
};
