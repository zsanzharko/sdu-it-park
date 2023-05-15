/* eslint-disable jsx-a11y/control-has-associated-label */
import { useEffect, useState } from 'react';
import './style.scss';

interface IDecorationBanner {
  id: number;
  contentByte: string;
  contentType: string;
}

interface IPostImageSlider {
  slides: IDecorationBanner[];
}

export const PostImageSlider: React.FC<IPostImageSlider> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLeftActive, setIsLeftActive] = useState(false);
  const [isRightActive, setIsRightActive] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((index) => (index - 1 < 0 ? slides.length - 1 : index - 1));
  };

  const goToNext = () => {
    setCurrentIndex((index) => (index + 1 === slides.length ? 0 : index + 1));
  };

  useEffect(() => {
    setIsLeftActive(currentIndex === 0);
    setIsRightActive(currentIndex === slides.length - 1);
  }, [currentIndex, slides.length]);

  return (
    <div className="decoration-banner post-image-slider">
      <div className="decoration-banner__wrapper">
        <button
          type="button"
          className="decoration-banner__arrow decoration-banner__arrow-left"
          onClick={goToPrevious}
          disabled={isLeftActive}
        >
          ❮
        </button>
        <button
          type="button"
          className="decoration-banner__arrow decoration-banner__arrow-right"
          onClick={goToNext}
          disabled={isRightActive}
        >
          ❯
        </button>
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
              style={{ backgroundImage: `url(	data:image/jpg;base64,${slide.contentByte})` }}
            />
          );
        })}
      </div>
    </div>
  );
};
