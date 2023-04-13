import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FacebookIcon } from '../../assets/icons/FacebookIcon';
import { Logo } from '../../components/Logo';
import { InstagramIcon } from '../../assets/icons/InstagramIcon';
import { LinkedinIcon } from '../../assets/icons/LinkedinIcon';
import earth from '../../assets/icons/EarthIcon.svg';
import letter from '../../assets/icons/LetterIcon.svg';

import './style.scss';

interface ILinks {
  url: string;
  email: string;
  phoneNumber: string;
}

export const Footer: React.FC = () => {
  const initialLinks = {
    url: 'www.techopark.sdu.edu.kz',
    phoneNumber: '+7 (727) 307 95 65',
    email: 'technopark@sdu.edu.kz',
  };
  const [links, setLinks] = useState<ILinks>(initialLinks);

  const fetchLinks = async () => {
    const res = await fetch('http://185.4.180.23:8000/api/v1/general/website');
    if (res.ok) {
      const data = await res.json();
      setLinks(data);
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
          <Link to="/">
            <FacebookIcon />
          </Link>
          <Link to="/">
            <InstagramIcon />
          </Link>
          <Link to="/">
            <LinkedinIcon />
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
