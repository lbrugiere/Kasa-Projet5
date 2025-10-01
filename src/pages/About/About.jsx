import Collapse from "../../components/Collapse/Collapse";
import imgAboutBanner from "../../assets/images/banner-about.png";
import Banner from "../../components/Banner/Banner.jsx";
import about from "../../assets/data/about.json";
import "../About/About.scss";

export default function About() {
    return (
        <>
        <Banner image={imgAboutBanner}/>
        <section className="container-about">
            {about.map(({ title, content}) => (
                < Collapse  key={title} title={title} content={content} />
            ))}
        </section>
        </>
    );
}