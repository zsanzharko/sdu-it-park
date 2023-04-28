import { useNavigate } from 'react-router-dom';
import { DecorationPeople } from '../../components/DecorationPeople';
import './style.scss';

export const OurPotential: React.FC = () => {
  const navigate = useNavigate();
  const scrollToPage = () => {
    navigate('/cooperation');
    document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="our-potential">
      <div className="our-potential__block">
        <h2 className="our-potential__text">
          Раскроем <br /> потенциал вместе
        </h2>
        <button type="button" className="our-potential__link" onClick={scrollToPage}>
          Заполнить форму
        </button>
      </div>
      <DecorationPeople />
    </section>
  );
};
