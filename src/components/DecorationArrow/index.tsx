import './style.scss';

import arrow from '../../assets/icons/arrow-down.svg';

interface IDecorationArrow {
  name: string;
}

export const DecorationArrow: React.FC<IDecorationArrow> = ({ name }) => {
  const scrollToBlock = () => {
    document.querySelector(name)!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="decoration-arrow__block">
      <button className="decoration-arrow" type="button" onClick={scrollToBlock}>
        <img src={arrow} alt="" />
      </button>
    </div>
  );
};
