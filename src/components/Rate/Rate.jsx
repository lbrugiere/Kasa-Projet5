import "../Rate/Rate.scss";

export default function Rate(props) {
    const score = props.score;
    const notes = [1, 2, 3, 4, 5];
    return(
        <div className="rate-container">
            {notes.map((note) => 
                note <= score ?( <i className="fa-solid fa-star" />)
                : ( <i className="fa-regular fa-star" />)
        )}
        </div>
    )
}