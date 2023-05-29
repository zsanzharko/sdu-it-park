/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
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
  const [activeSlide, setActiveSlide] = useState(0);

  const changeBackground = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const index = +(e.currentTarget.getAttribute('data-id') as string);
    setActiveSlide(index);
  };

  return (
    <div className="post-slider">
      <div
        className="post-slider__wrapper"
        style={{
          background: `url(data:image/jpg;base64,${slides[activeSlide].contentByte}) center center / cover no-repeat`,
        }}
      />
      <div
        className="post-slider__buttons"
        style={{ gridTemplateColumns: `repeat(${slides.length}, 1fr)` }}
      >
        {slides.length > 1 &&
          slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className="post-slider__button"
              data-id={index}
              onClick={changeBackground}
              disabled={index === activeSlide}
            >
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
};
