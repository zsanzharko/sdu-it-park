import './style.scss';

interface IDecorationArrow {
  fn: () => void;
}

export const DecorationArrow: React.FC<IDecorationArrow> = ({ fn }) => {
  return (
    <button className="decoration-arrow" type="button" onClick={fn}>
      ❮
    </button>
  );
};
