import "../Rate/Rate.scss";
import emptyStar from "../../assets/logos/empty-star.png";
import fullStar from "../../assets/logos/full-star.png";

export default function Rate(props) {
    const score = props.score;
    const notes = [1, 2, 3, 4, 5];
    return(
        <div className="rate-container">
            {notes.map((note) => 
                note <= score ?( 
                <img key={note} src={fullStar} alt="Étoile pleine"/>)
                : ( <img key={note} src={emptyStar} alt="Étoile vide" />)
        )}
        </div>
    )
}