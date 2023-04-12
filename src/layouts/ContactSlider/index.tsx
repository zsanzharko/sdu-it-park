import { useEffect, useState } from 'react';

import { variables } from './index.contacts';
import { ContactSlide } from '../../components/ContactSlide';
import { IContactSlide } from '../../utils/types';

import './style.scss';

export const ContactSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [people, setPeople] = useState<Array<IContactSlide>>([]);
  const { length } = people;

  useEffect(() => {
    // TODO: add fetch request to get people
    setPeople(variables);
  }, []);

  const goToPrev = () => {
    const index = currentIndex - 1;
    setCurrentIndex(index < 0 ? length - 1 : index);
  };

  const goToNext = () => {
    const index = currentIndex + 1;
    setCurrentIndex(index === length ? 0 : index);
  };

  return (
    <div className="contact-slider">
      <button
        type="button"
        className="contact-slider__button contact-slider__button-left"
        onClick={goToPrev}
        disabled={currentIndex === 0}
      >
        ❮
      </button>
      <button
        type="button"
        className="contact-slider__button contact-slider__button-right"
        onClick={goToNext}
        disabled={currentIndex === length - 1}
      >
        ❯
      </button>
      <div
        className="contact-slider__container"
        style={{ transform: `translateX(-${currentIndex * 690}px)` }}
      >
        {people.map((person) => {
          return <ContactSlide key={person.id} {...person} />;
        })}
      </div>
    </div>
  );
};
