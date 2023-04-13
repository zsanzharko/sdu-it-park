import { ITeamSlide } from '../../utils/types';
import './style.scss';

interface ITeamSlideComponent extends ITeamSlide {
  active: string;
}

export const TeamSlide: React.FC<ITeamSlideComponent> = ({ photo, active, fullName, id }) => {
  return (
    <div className={`team-slide team-slide-${active}`}>
      <div
        className="team-slide__image"
        style={{ backgroundImage: `url(data:image/jpg;base64,${photo})` }}
      >
        <div className={`team-slide__layout team-slide__layout-${active}`} />
      </div>
      {id}
      <p className={`team-slide__text team-slide__text-${active}`}>{fullName}</p>
    </div>
  );
};
