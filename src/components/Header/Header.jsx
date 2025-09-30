import logo from '../../assets/logos/LOGO.png';
import './Header.scss';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <figure className='header_fig'>
                <img src={logo} alt='Logo Kasa' />
            </figure>
            <nav className='nav'>
                <NavLink 
                to='/'
                className={({isActive}) =>
                isActive ? "nav_link-home active" : "nav_link-home"} 
                >Accueil
                </NavLink>
                <NavLink 
                to='/about'
                className={({isActive}) =>
                    isActive ? "nav_link-about active" : "nav_link-about"} 
                >A Propos
                </NavLink>
            </nav>
        </header>
    );
}