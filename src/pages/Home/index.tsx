import { DecorationBanner } from '../../components/DecorationBanner';
import './style.sass';

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      <DecorationBanner />
    </div>
  );
};
