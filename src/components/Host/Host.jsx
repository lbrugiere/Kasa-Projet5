import "../Host/Host.scss";

export default function Host (props) {
    return (
        <div className="host">
            <p>{props.name}</p>
            <img src={props.picture} alt="Propriétaire" />
        </div>
    )
}