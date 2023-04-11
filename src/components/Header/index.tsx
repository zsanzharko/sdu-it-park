import { Link } from 'react-router-dom';

import './style.scss';

import logo from '../../assets/images/logo.png';
import { routes } from './index.routes';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <Link className="header__logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="header__links">
        {routes.map((route) => (
          <Link key={route.id} className="header__link" to={route.link}>
            {route.title}
          </Link>
        ))}
      </nav>
      <button className="header__login" type="button">
        LogIn with Google
      </button>
    </div>
  );
};
