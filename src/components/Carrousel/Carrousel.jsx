import "../Carrousel/Carrousel.scss";
import { useState } from "react";

export default function Carrousel({slides}) {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide((slide) => slide === slides.length - 1 ? 0 : slide +1);
    };

    const prevSlide = () => {
        setSlide((slide) => slide === 0 ? slides.length - 1 : slide -1);
    };

    return(
        <div className="carrousel">
            <img key={slide} src={slides[slide]} alt={`Slide ${slide + 1}`} className="carrousel_image"/>
            <p>{slide + 1} / {slides.length}</p>
            {slides.length > 1 && (
              <i onClick={prevSlide} className="fa-solid fa-chevron-left"></i>  
            )}
            {slides.length >1 && (
                <i onClick={nextSlide} className="fa-solid fa-chevron-right"></i>
            )}
        </div>
    );
}