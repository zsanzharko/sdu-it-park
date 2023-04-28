import { useRef } from 'react';

import './style.scss';
import image from '../../assets/icons/partner.svg';

export const PartnersSlider: React.FC = () => {
  const partners = [
    {
      id: 0,
      src: image,
    },
    {
      id: 1,
      src: image,
    },
    {
      id: 2,
      src: image,
    },
    {
      id: 3,
      src: image,
    },
    {
      id: 4,
      src: image,
    },
    {
      id: 5,
      src: image,
    },
  ];
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current!.scrollLeft -= 280;
  };

  const scrollRight = () => {
    sliderRef.current!.scrollLeft += 280;
  };

  return (
    <section className="partners-slider">
      <button
        className="partners-slider__button partners-slider__button-left"
        type="button"
        onClick={scrollLeft}
      >
        ❮
      </button>
      <div className="partners-slider__slides" ref={sliderRef}>
        {partners.map((partner) => (
          <img
            key={partner.id}
            className="partners-slider__slide"
            src={partner.src}
            alt="partner"
          />
        ))}
      </div>
      <button
        className="partners-slider__button partners-slider__button-right"
        type="button"
        onClick={scrollRight}
      >
        ❯
      </button>
    </section>
  );
};
