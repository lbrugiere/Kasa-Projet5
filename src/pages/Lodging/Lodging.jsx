import "../Lodging/Lodging.scss";
import lodgings from "../../assets/data/lodgings.json";
import Carrousel from "../../components/Carrousel/Carrousel.jsx";
import { useParams } from "react-router-dom";
import Tag from "../../components/Tag/Tag.jsx";
import Host from "../../components/Host/Host.jsx";
import Rate from "../../components/Rate/Rate.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";
import { Navigate } from "react-router-dom";

export default function Lodging() {
    const { id } = useParams();

    const lodging = lodgings.find(lodging => lodging.id === id);

    const tags = lodging?.tags.map((tag) => {
        return <Tag key={tag} name={tag} />;
    });

    const equipments = lodging?.equipments.map((equipment) => {
        return (
            <li key={equipment}>{equipment}</li>
        );
    });

    if (!lodging) {
        return < Navigate to="/error"/>;
    } 

    return (
        <>
        <Carrousel slides={lodging.pictures} />
        <section className="info">
            <div className="description-info">
                    <h2>{lodging.title}</h2>
                    <p>{lodging.location}</p>
                    <div className="tag">
                        {tags}
                    </div>
            </div>

            <div className="host-rate">
                    <Host 
                    name={lodging.host.name}
                    picture={lodging.host.picture}
                    />
                    <Rate score={lodging.rating} />
            </div>
        </section>
        <div className="collapse-container">
            <Collapse className="collapse_item" title="Description" content={lodging.description}/>
            <Collapse className="collapse_item" title="Équipements" content={<ul>{equipments}</ul>}/>
        </div>
        </>
    );
}