import { Link } from 'react-router-dom';

import './style.scss';

import logo from '../../assets/images/logo.png';

export const Logo: React.FC = () => {
  return (
    <Link className="site-logo" to="/">
      <img src={logo} alt="logo" />
    </Link>
  );
};
