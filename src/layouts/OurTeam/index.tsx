import { useEffect, useState } from 'react';

import { DecorationArrow } from '../../components/DecorationArrow';
import { PageTitle } from '../../components/PageTitle';
import { ITeamSlide } from '../../utils/types';
import { TeamSlider } from '../TeamSlider';

import './style.scss';

export const OurTeam: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState(true);
  const [slides, setSlides] = useState<Array<ITeamSlide>>([]);

  const handleBtnClick = () => {
    setActiveBtn(!activeBtn);
  };

  const fetchData = async () => {
    const res = await fetch('http://185.4.180.23:8000/api/v1/team-info/list');
    if (res.ok) {
      const data = await res.json();
      setSlides(data);
    }
  };

  const scrollToBlock = () => {
    document
      .querySelector('.our-potential')!
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
