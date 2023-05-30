import { DecorationArrow } from '../../components/DecorationArrow';
import { DecorationBanner } from '../../components/DecorationBanner';
import { DecoraionWheel } from '../../components/DecorationWheel';
import { HomeInformation } from '../../layouts/HomeInformation';
import { PartnersSlider } from '../../components/PartnersSlider';
import { RolesBlock } from '../../layouts/RolesBlock';
// import { HardwareSection } from '../../components/HardwareSection';
import './style.scss';

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      <DecorationBanner />
      <div className="home-page__separator">
        <DecoraionWheel width={50} height={50} />
        <DecorationArrow name=".home-information" />
      </div>
      <HomeInformation />
      {/* <HardwareSection /> */}
      <RolesBlock />
      <PartnersSlider />
    </div>
  );
};
