import { DecorationMountain } from '../../components/DecorationMountain';
import { CooperationForm } from '../../layouts/CooperationForm';
import './style.scss';

export const Cooperation: React.FC = () => {
  return (
    <div className="cooperation-page">
      <div className="cooperation-page__wrapper">
        <DecorationMountain />
        <CooperationForm />
      </div>
    </div>
  );
};
