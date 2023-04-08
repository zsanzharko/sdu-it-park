import React from "react";
import './header.scss';
import {menu, admin_menu} from "./menu";
import {Link} from 'react-router-dom';
import logoImage from '../../assets/images/logo_new.svg';
// import GoogleButton from "../buttons/google-button";

const Header = () => {

    return (
        <nav className="main-nav">
            <div className="header-wrapper">
                <Link className="header-logo" to="/">
                    <img src={logoImage} alt="logo" loading="lazy" />
                </Link>

                <ul>{menu.map((item, idx) => (
                    <li key={`menu key ${idx}`}>
                        <Link className='page-link' to={item.link}>{item.title}</Link>
                    </li>))}
                </ul>

                {/*<GoogleButton/>*/}
            </div>
        </nav>
    );
}

export default Header;

// Хз зачем нужен код снизу
// Но лучше не буду трогать

export const AdminHeader = () => {
    return (
        <header className="main-header">
            <Link className="header-logo" to="/">
                <img
                    src={logoImage}
                    alt="Logo TechnoPark"
                    loading="lazy" />
            </Link>
            <nav>
                <ul>{admin_menu.map((item, idx) => (
                    <li key={`menu key ${idx}`}>
                        <Link to={item.link}>{item.title}</Link>
                    </li>
                ))}
                </ul>
            </nav>
        </header>
    );
}