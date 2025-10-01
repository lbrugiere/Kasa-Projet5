import logo from "../../assets/logos/LOGO-footer.png";
import "./Footer.scss";

export default function Footer() {
    return (
        <footer>
            <img src={logo} alt='logo' />
            <p> &copy; 2020 Kasa. All rights reserved</p>
        </footer>
    );
}