import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { routes } from './index.routes';
import { Logo } from '../../components/Logo';

import './style.scss';

export const Header: React.FC = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(-1);
  useEffect(() => {
    routes.forEach((route) => {
      if (route.link === location.pathname) setActiveLink(route.id);
      else if (location.pathname === '/') setActiveLink(-1);
    });
  }, [location]);

  return (
    <div className="header">
      <Logo />
      <nav className="header__links">
        {routes.map((route) => {
          const className =
            route.id === activeLink ? 'header__link header__link-active' : 'header__link';
          return (
            <Link key={route.id} className={className} to={route.link}>
              {route.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
