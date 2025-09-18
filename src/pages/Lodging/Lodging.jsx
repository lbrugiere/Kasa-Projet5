import { useParams } from "react-router-dom";

export default function Lodging() {
    const { id } = useParams();

    return (
        <div>
            <h1>Page Lodging</h1>
            <p>Logement ID : {id}</p>
        </div>
    );
}