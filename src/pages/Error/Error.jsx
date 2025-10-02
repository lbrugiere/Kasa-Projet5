import { Link } from "react-router-dom";
import "../Error/Error.scss";

export default function Error() {
    return (
        <div className="error-container">
            <h2>404</h2>
            <p>
                Oups! La page que&nbsp;
                <span className="mobile-br"><br /></span>
                vous demandez n'existe pas!
            </p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
}