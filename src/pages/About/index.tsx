import { OurMission } from '../../layouts/OurMission';
import { OurPotential } from '../../layouts/OurPotential';
import { OurTeam } from '../../layouts/OurTeam';
import './style.sass';

export const About: React.FC = () => {
  return (
    <div className="about-page">
      <OurMission />
      <OurTeam />
      <OurPotential />
    </div>
  );
};
