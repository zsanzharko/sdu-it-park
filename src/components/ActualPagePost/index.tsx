import { IActualPagePost } from '../../utils/types';
import './style.scss';

export const ActualPagePost: React.FC<IActualPagePost> = ({ title }) => {
  return (
    <div className="actual-page__post">
      <h2 className="actual-page__post-title">{title}</h2>
    </div>
  );
};
