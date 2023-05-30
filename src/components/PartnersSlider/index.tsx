import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { IStore } from '../../utils/types';
import { useAppDispatch } from '../../store/store.dispath';
import './style.scss';
import { fetchPartnersList } from '../../store/slices/partnersList.slice';
import { LoadingIcon } from '../../assets/icons/LoadingIcon';

export const PartnersSlider: React.FC = () => {
  const { partners, isNew, pending } = useSelector((state: IStore) => state.partnersList);
  const sliderRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isNew) {
      dispatch(fetchPartnersList());
    }
    const width = document.documentElement.offsetWidth - 120 > partners.length * 300 - 150;
    sliderRef.current!.style.justifyContent = width ? 'center' : 'flex-start';
  }, [isNew, dispatch, partners.length]);

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
        {pending ? (
          <LoadingIcon />
        ) : (
          partners.map((partner) => (
            <div key={partner.id} className="partners-slides__slide">
              <img
                className="partners-slider__image"
                src={`data:image/jpg;base64,${partner.logo}`}
                alt="partner"
              />
              <p className="partners-slider__text">{partner.sponsorName}</p>
            </div>
          ))
        )}
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
