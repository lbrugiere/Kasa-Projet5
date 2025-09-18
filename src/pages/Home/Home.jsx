import Banner from '../../components/Banner/Banner';
import imgHomeBanner from '../../assets/images/banner-home.png';

export default function Home() {
    return (
        <Banner  text='Chez vous, partout et ailleurs' image={imgHomeBanner} />
    )
}