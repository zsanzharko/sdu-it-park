import { ITeamSlide } from '../../utils/types';
import './style.scss';

interface ITeamSlideComponent extends ITeamSlide {
  active: string;
}

export const TeamSlide: React.FC<ITeamSlideComponent> = ({ photo, id, active, fullName }) => {
  return (
    <div className="team-slide team-slide">
      <div
        className="team-slide__image"
        style={{ backgroundImage: `url(data:image/jpg;base64,${photo})` }}
      >
        <div className="team-slide__layout team-slide__layout" />
        {id}
      </div>
      <p className={`team-slide__text team-slide__text-${active}`}>{fullName}</p>
    </div>
  );
};
