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
  const [links, setLinks] = useState<ILinks>();
  const fetchLinks = async () => {
    const res = await fetch(
      'http://cors-anywhere.herokuapp.com/http://185.4.180.23:8000/api/v1/general/website'
    ).then((r) => (r.ok ? r.json() : { data: { url: '', phoneNumber: '', email: '' } }));
    setLinks(res.data);
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <div className="footer">
      <div className="footer__icons">
        <Logo />
        <div className="footer__icons-wrapper">
          <Link to={links?.url || '/'}>
            <FacebookIcon />
          </Link>
          <Link to={links?.url || '/'}>
            <InstagramIcon />
          </Link>
          <Link to={links?.url || '/'}>
            <LinkedinIcon />
          </Link>
        </div>
      </div>

      <div className="footer__contacts">
        <div className="footer__contacts-wrapper">
          <p className="footer__contacts-text">Нужна помощь? Свяжитесь с нами:</p>
          <Link to={links?.phoneNumber || '/'} className="footer__contacts-text">
            {links?.phoneNumber || '+7 (727) 307 95 65'}
          </Link>
        </div>
        <div className="footer__contacts-wrapper">
          <Link
            to={links?.url || '/'}
            className="footer__contacts-text footer__contacts-text-small"
          >
            <img src={earth} alt="earth icon" />
            {links?.url || 'www.techopark.sdu.edu.kz'}
          </Link>
          <Link
            to={links?.email || 'https://mail.google.com'}
            className="footer__contacts-text footer__contacts-text-small"
          >
            <img src={letter} alt="earth icon" />
            {links?.email || 'technopark@sdu.edu.kz'}
          </Link>
        </div>
      </div>
    </div>
  );
};
