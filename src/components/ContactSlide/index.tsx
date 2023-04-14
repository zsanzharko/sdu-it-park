import { IContactSlide } from '../../utils/types';
import './style.scss';

export const ContactSlide: React.FC<IContactSlide> = ({
  photo,
  phoneNumber,
  fullName,
  position,
}) => {
  return (
    <div className="contact-slide">
      <img src={photo[0]} alt="" />
      <h2>{fullName}</h2>
      <p>{position}</p>
      <p>{phoneNumber}</p>
    </div>
  );
};
