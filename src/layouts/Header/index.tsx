import { Link } from 'react-router-dom';

import './style.scss';

import { routes } from './index.routes';
import { Logo } from '../../components/Logo';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <Logo />
      <nav className="header__links">
        {routes.map((route) => (
          <Link key={route.id} className="header__link" to={route.link}>
            {route.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};
