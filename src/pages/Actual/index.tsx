import { PageTitle } from '../../components/PageTitle';
import { ActualPageFilters } from '../../layouts/ActualPageFilters';
import './style.scss';

export const Actual: React.FC = () => {
  return (
    <div className="actual-page">
      <button type="button" className="actual-page__wrapper-scroll">
        <p className="scroll-text scroll-text__arrow">❮</p>
        <p className="scroll-text">Наверх</p>
      </button>
      <PageTitle name="актуальное" />
      <div className="actual-page__wrapper">
        <div className="actual-page__posts" />
        <ActualPageFilters />
      </div>
    </div>
  );
};
