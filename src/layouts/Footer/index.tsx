import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../../components/Logo';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import earth from '../../assets/icons/EarthIcon.svg';
import letter from '../../assets/icons/LetterIcon.svg';

import './style.scss';

interface ILinks {
  url: string;
  email: string;
  phoneNumber: string;
  instagram: string;
  facebook: string;
  linkedIn: string;
}

export const Footer: React.FC = () => {
  const initialLinks: ILinks = {
    url: 'www.techopark.sdu.edu.kz',
    phoneNumber: '+7 (727) 307 95 65',
    email: 'technopark@sdu.edu.kz',
    instagram: 'www.instagram.com',
    facebook: 'www.facebook.com',
    linkedIn: 'www.linkedin.com',
  };
  const [links, setLinks] = useState<ILinks>(initialLinks);

  const fetchLinks = async () => {
    try {
      const res = await fetch('/api/v1/general/website');
      const data = await res.json();
      setLinks(data);
    } catch (err) {
      throw new Error();
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <div className="footer">
      <div className="footer__icons">
        <Logo />
        <div className="footer__icons-wrapper">
          <Link to={links.facebook}>
            <img className="footer__icons-wrapper__image" src={facebook} alt="" />
          </Link>
          <Link to={links.instagram}>
            <img className="footer__icons-wrapper__image" src={instagram} alt="" />
          </Link>
          <Link to={links.linkedIn}>
            <img className="footer__icons-wrapper__image" src={linkedin} alt="" />
          </Link>
        </div>
      </div>

      <div className="footer__contacts">
        <div className="footer__contacts-wrapper">
          <p className="footer__contacts-text">Нужна помощь? Свяжитесь с нами:</p>
          <Link to="/" className="footer__contacts-text">
            {links?.phoneNumber}
          </Link>
        </div>
        <div className="footer__contacts-wrapper">
          <Link to="/" className="footer__contacts-text footer__contacts-text-small">
            <img src={earth} alt="earth icon" />
            {links?.url}
          </Link>
          <Link to="/" className="footer__contacts-text footer__contacts-text-small">
            <img src={letter} alt="earth icon" />
            {links?.email}
          </Link>
        </div>
      </div>
    </div>
  );
};
