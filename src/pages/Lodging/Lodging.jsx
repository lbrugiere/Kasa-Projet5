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
        return <Tag key={tag} name={tag} />
    });

    const equipments = lodging?.equipments.map((equipment) => {
        return (
            <li key={equipment}>{equipment}</li>
        );
    });

    return lodging ? (
        <>
        <Carrousel slides={lodging.pictures} />
        <section>
            <div className="description-info">
                <div>
                    <h2>{lodging?.title}</h2>
                    <p>{lodging?.location}</p>
                </div>
                <div>
                    {tags}
                </div>
            </div>

            <div className="host-rate">
                <div>
                    <Host 
                    name={lodging?.host.name}
                    picture={lodging?.host.picture}
                    />
                </div>
                <div>
                    <Rate score={lodging.rating} />
                </div>
            </div>
        </section>
        <div className="collapse-info">
            <Collapse title="Description" content={lodging.description}/>
            <Collapse title="Équipements" content={<ul>{equipments}</ul>}/>
        </div>
        </>
    ) : (
        <Navigate to="/Error" />
    );
}