import { Link } from 'react-router-dom';

import './style.scss';

import logo from '../../assets/icons/logo.svg';

export const Logo: React.FC = () => {
  return (
    <Link className="site-logo" to="/">
      <img src={logo} alt="logo" />
    </Link>
  );
};
