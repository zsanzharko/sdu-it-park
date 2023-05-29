import { DecorationPeople } from '../../components/DecorationPeople';
import './style.scss';

export const OurPotential: React.FC = () => {
  return (
    <section className="our-potential">
      <div className="our-potential__wrapper">
        <div className="our-potential__block" />
        <DecorationPeople />
      </div>
    </section>
  );
};
