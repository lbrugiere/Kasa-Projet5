import '../Banner/Banner.scss';

export default function Banner({image, text}) {
    return (
        <div className='banner' style={ { backgroundImage: `url(${image})`}}>
            {text && <p className='banner_txt'>{text}</p>}
        </div>
    )
}