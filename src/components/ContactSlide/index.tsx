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
      <img src={`data:image/jpg;base64,${photo}`} alt="" />
      <h2>{fullName}</h2>
      <p>{position}</p>
      <p>{phoneNumber}</p>
    </div>
  );
};
