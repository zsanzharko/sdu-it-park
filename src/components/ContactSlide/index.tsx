import { IContactSlide } from '../../utils/types';
import './style.scss';

export const ContactSlide: React.FC<IContactSlide> = ({ url, name, role, mobile }) => {
  return (
    <div className="contact-slide">
      <img src={url} alt="" />
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{mobile}</p>
    </div>
  );
};
