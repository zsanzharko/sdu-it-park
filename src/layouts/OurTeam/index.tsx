import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../store/store.dispath';
import { fetchAboutTeamData } from '../../store/slices/aboutTeam.slice';
import { DecorationArrow } from '../../components/DecorationArrow';
import { PageTitle } from '../../components/PageTitle';
import { IStore } from '../../utils/types';
import { TeamSlider } from '../TeamSlider';

import './style.scss';

export const OurTeam: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState(true);
  const { team: slides, isNew } = useSelector((state: IStore) => state.aboutTeamData);
  const dispatch = useAppDispatch();

  const handleBtnClick = () => {
    setActiveBtn(!activeBtn);
  };

  const scrollToBlock = () => {
    document
      .querySelector('.our-potential')!
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    if (isNew) {
      dispatch(fetchAboutTeamData());
    }
  }, [dispatch, isNew]);

  return (
    <section className="our-team">
      <PageTitle name="наша команда" />
      <div className="our-team__buttons-container">
        <button
          className="our-team__button"
          type="button"
          onClick={handleBtnClick}
          disabled={activeBtn}
        >
          учителя
        </button>
        <button
          className="our-team__button"
          type="button"
          onClick={handleBtnClick}
          disabled={!activeBtn}
        >
          студенты
        </button>
      </div>
      <TeamSlider type={activeBtn ? 'EMPLOYEE' : 'STUDENT'} slides={slides} />
      <p className="our-team__text">
        Команда Технопарка состоит из наставников, имеющих индустриальный и/или исследовательский
        опыт. Это преподаватели СДУ, студенты с опытом участия в проектах, эксперты из индустрии.
      </p>
      <DecorationArrow fn={scrollToBlock} />
    </section>
  );
};
