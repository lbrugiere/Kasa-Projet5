import "../Lodging/Lodging.scss";
import lodgings from "../../assets/data/lodgings.json";
import Carrousel from "../../components/Carrousel/Carrousel.jsx";
import { useParams } from "react-router-dom";

export default function Lodging() {
    const { id } = useParams();
    const lodging = lodgings.find(lodging => lodging.id === id);
    return (
        <div>
            <Carrousel slides={lodging.pictures} />
        </div>
    );
}