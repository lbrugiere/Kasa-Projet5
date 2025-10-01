import { useState } from "react";
import "../Collapse/Collapse.scss";

export default function Collapse({ title , content }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <div className="collapse_title">
                <h2>{title}</h2>
                <i 
                onClick={ () => setIsOpen(!isOpen)}
                className={`fa-solid fa-chevron-up ${isOpen ? "rotate" : ""}`}></i>
            </div>
            <div className={`collapse_content ${isOpen ? "open" : ""}`}>
            <div>{content}</div>
            </div>
        </div>
    );
}