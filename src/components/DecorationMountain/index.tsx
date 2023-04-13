import circle from '../../assets/images/circle-decoration.png';
import wheel from '../../assets/images/wheelicon-decoration.png';
import mountain from '../../assets/images/mountains-decoration.png';

import './style.scss';

export const DecorationMountain: React.FC = () => {
  return (
    <div className="decoration-mountain">
      <img className="decoration-mountain__circle" src={circle} alt="" />
      <img className="decoration-mountain__wheel" src={wheel} alt="" />
      <img className="decoration-mountain__mountains" src={mountain} alt="" />
    </div>
  );
};
