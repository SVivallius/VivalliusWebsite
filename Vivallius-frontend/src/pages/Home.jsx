import './styles/Home.css'
import Laire from '../assets/media/static/startbild.jpg'
import MobileContext from '../assets/MobileContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const { isMobile } = useContext(MobileContext)
    return (
        <>
            <div className={`intro-container ${isMobile ? '' : 'desktop'}`}>
                <div className="img-container">
                    <Link to="/portfolio">
                        <h1 className={`portfolio-overlay ${isMobile ? '' : 'desktop'}`}>Portfolio</h1>
                        <img src={Laire} alt="förstasida, exempelbild" className={`sample-img ${isMobile ? '' : 'desktop'}`} />
                    </Link>
                </div>
                <div className={`aside ${isMobile ? '' : 'desktop'}`}>
                    <h2>Fotograf</h2>
                    <h1>Rickard Vivallius</h1>
                    <ul className={`link-list ${isMobile ? '' : 'desktop'}`}>
                        <Link to="/services/boudoir"><li>Boudoir</li></Link>
                        <Link to="/services/portrait"><li>Porträtt</li></Link>
                        <Link to="/services/modelling"><li>Modell</li></Link>
                        <Link to="/services/weddings"><li>Bröllop</li></Link>
                    </ul>
                    <Link to="/booking"><button className={`home-bookings-btn ${isMobile ? '' : 'desktop'}`}>Bokningar</button></Link>
                </div>
            </div>
        </>
    )
}
export default Home