import './style.scss';

import wheelOut from '../../assets/icons/wheel-out.svg';
import wheelIn from '../../assets/icons/wheel-in.svg';

interface IDecoraionWheel {
  width: number;
  height: number;
}

export const DecoraionWheel: React.FC<IDecoraionWheel> = ({ width, height }) => {
  return (
    <div className="decoration-wheel" style={{ width: `${width}px`, height: `${height}px` }}>
      <img className="decoration-wheel__image decoration-wheel__image-out" src={wheelOut} alt="" />
      <img className="decoration-wheel__image decoration-wheel__image-in" src={wheelIn} alt="" />
    </div>
  );
};
