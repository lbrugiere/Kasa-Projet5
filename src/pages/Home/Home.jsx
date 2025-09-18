import Banner from '../../components/Banner/Banner';
import imgHomeBanner from '../../assets/images/banner-home.png';
import lodgings from '../../assets/data/lodgings.json';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import '../Home/Home.scss';

export default function Home() {
    return (
        <>
        <Banner  text='Chez vous, partout et ailleurs' image={imgHomeBanner} />
        <section className='cards-container'>
            {lodgings.map((appart)=>(
                <div className='card_log' key= {appart.id}>
                    <Link className='link_card_log' to={`/Lodging/${appart.id}`}>
                    <Card cover={appart.cover} title={appart.title} />
                    </Link>
                </div>
            ))}
        </section>
        </>
    )
}