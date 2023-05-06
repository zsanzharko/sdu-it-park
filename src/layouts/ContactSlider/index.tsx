import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../store/store.dispath';
import { fetchContactsData } from '../../store/slices/contactsPeople.slice';
import { ContactSlide } from '../../components/ContactSlide';
import { IStore } from '../../utils/types';
import { LoadingIcon } from '../../assets/icons/LoadingIcon';

import './style.scss';

export const ContactSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { people, pending, isNew } = useSelector((state: IStore) => state.contactsPeopleData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isNew) {
      dispatch(fetchContactsData());
    }
  }, [dispatch, isNew]);

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
        style={{
          transform: `translateX(-${currentIndex * 690}px)`,
          width: `${+people.length * 690}px`,
        }}
      >
        {people.length > 0 &&
          !pending &&
          people.map((person) => {
            return <ContactSlide key={person.id} {...person} />;
          })}
        {pending && <LoadingIcon />}
      </div>
    </div>
  );
};
