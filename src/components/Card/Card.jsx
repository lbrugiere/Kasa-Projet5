import "../Card/Card.scss";

export default function Card({cover, title}) {
    return (
        <article className='card'>
            <img className='card_image' src={cover} alt='location' />
            <p className='card_title'>{title}</p>
        </article>
    );
}