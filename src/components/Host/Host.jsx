import "../Host/Host.scss";

export default function Host (props) {
    return (
        <div>
            <span className="name-proprio">{props.name}</span>
            <img className="picture-proprio" src={props.picture} alt="Propriétaire" />
        </div>
    )
}