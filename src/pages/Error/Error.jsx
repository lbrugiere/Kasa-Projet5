import { Link } from "react-router-dom";
import "../Error/Error.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Error() {
    return (
        <>
        <Header/>
        <div className="error-container">
            <h2>404</h2>
            <p>Oups! La page que vous demandez n'existe pas!</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
        <Footer/>
        </>
    )
}