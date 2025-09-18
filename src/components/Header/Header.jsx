import logo from '../../assets/logos/LOGO.png';
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <figure className='header_fig'>
                <img src={logo} alt='Logo Kasa' />
            </figure>
            <nav className='nav'>
                <Link className='nav_link-home' to='/'>Accueil</Link>
                <Link className='nav_link-about' to='/about'>A Propos</Link>
            </nav>
        </header>
    );
}