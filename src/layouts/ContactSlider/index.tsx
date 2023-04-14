import { useEffect, useState } from 'react';

import { ContactSlide } from '../../components/ContactSlide';
import { IContactSlide } from '../../utils/types';
import { LoadingIcon } from '../../assets/icons/LoadingIcon';

import './style.scss';

export const ContactSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [people, setPeople] = useState<Array<IContactSlide>>([]);

  const fetchData = async () => {
    const res = await fetch('http://185.4.180.23:8000/api/v1/contacts');
    if (res.ok) {
      const data = await res.json();
      setPeople(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const goToPrev = () => {
    const index = currentIndex - 1;
    setCurrentIndex(index < 0 ? people.length - 1 : index);
  };

  const goToNext = () => {
    const index = currentIndex + 1;
    setCurrentIndex(index === people.length ? 0 : index);
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
        disabled={currentIndex >= people.length - 1}
      >
        ❯
      </button>
      <div
        className="contact-slider__container"
        style={{ transform: `translateX(-${currentIndex * 690}px)` }}
      >
        {people.length > 0 ? (
          people.map((person) => {
            return <ContactSlide key={person.id} {...person} />;
          })
        ) : (
          <LoadingIcon />
        )}
      </div>
    </div>
  );
};
