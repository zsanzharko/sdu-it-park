import './style.scss';

import wheelOut from '../../assets/icons/wheel-out.svg';
import wheelIn from '../../assets/icons/wheel-in.svg';

interface IDecoraionWheel {
  width: number;
  height: number;
  additionalClass?: string;
}

export const DecoraionWheel: React.FC<IDecoraionWheel> = ({ width, height, additionalClass }) => {
  return (
    <div
      className={`decoration-wheel ${additionalClass}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img
        className={`decoration-wheel__image decoration-wheel__image-out ${additionalClass}`}
        src={wheelOut}
        alt=""
      />
      <img
        className={`decoration-wheel__image decoration-wheel__image-in ${additionalClass}`}
        src={wheelIn}
        alt=""
      />
    </div>
  );
};
