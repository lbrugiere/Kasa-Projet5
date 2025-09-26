import "../Tag/Tag.scss";

export default function Tag({ name }) {
    return(
        <div className="tag-container">
            <span className="tag-container__button">{name}</span>
        </div>
    );
}