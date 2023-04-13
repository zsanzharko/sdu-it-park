import people from '../../assets/images/people.png';
import './style.scss';

export const DecorationPeople: React.FC = () => {
  return (
    <div className="decoration-people">
      <div className="decoration-people__circle decoration-people__circle-outer">
        <div className="decoration-people__circle decoration-people__circle-inner" />
      </div>
      <img className="decoration-people__image" src={people} alt="people" />
    </div>
  );
};
