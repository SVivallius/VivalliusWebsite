import './footer.css'
import { useContext } from 'react'
import MobileContext from '../../assets/MobileContext'
import { Link } from 'react-router-dom'

{/* IMPORT SOCIAL ICONS */}
import Facebook from '../../assets/media/static/socials/facebook-32.png'
import Instagram from '../../assets/media/static/socials/instagram-32.png'
import Youtube from '../../assets/media/static/socials/youtube.png'
import Pinterest from '../../assets/media/static/socials/pinterest-32.png'
import Twitter from '../../assets/media/static/socials/twitter-32.png'

function Footer() {
    const { isMobile } = useContext(MobileContext)

    return (
        <div className={`footer ${isMobile ? '' : 'desktop'}`}>
            <div className={`footer-limit ${isMobile ? '' : 'desktop'}`}>
                <ul className={`socials ${isMobile ? '' : 'desktop'}`}>
                    <a href="https://wwww.facebook.com/rickard.vivallius" target="_blank">
                        <li className="socials-object"><img src={Facebook} alt="facebook"/></li>
                    </a>
                    <a href="https://wwww.instagram.com/rickard.vivallius" target="_blank">
                        <li className="socials-object"><img src={Instagram} alt="instagram"/></li>
                    </a>
                    <a href="https://wwww.instagram.com/rickard.vivallius" target="_blank">
                        <li className="socials-object"><img src={Youtube} alt="Youtube"/></li>
                    </a>
                    <a href="https://wwww.instagram.com/rickard.vivallius" target="_blank">
                        <li className="socials-object"><img src={Pinterest} alt="Pinterest"/></li>
                    </a>
                    <a href="https://wwww.instagram.com/rickard.vivallius" target="_blank">
                        <li className="socials-object"><img src={Twitter} alt="Twitter"/></li>
                    </a>
                </ul>
                <div className={`links-container ${isMobile ? '' : 'desktop'}`}>
                    <ul className={`quick-links ${isMobile ? '' : 'desktop'}`}>
                        <Link to="/">
                            <li className="quick-link">Hem</li>
                        </Link>
                        <Link to="/portfolio">
                            <li className="quick-link">Portfolio</li>
                        </Link>
                        <Link to="/about">
                            <li className="quick-link">Om mig</li>
                        </Link>
                        <Link to="/booking">
                            <li className="quick-link">Bokning</li>
                        </Link>
                        <Link to="/policies">
                            <li className="quick-link">Sekretess</li>
                        </Link>
                        <Link to="/nature">
                            <li className="quick-link">Natur</li>
                        </Link>
                    </ul>
                    <ul className={`quick-links ${isMobile ? '' : 'desktop'}`}>
                        <Link to="/services">
                            <li className="quick-link">Tjänster</li>
                        </Link>
                        <Link to="/services/boudoir">
                            <li className="quick-link">Boudoir</li>
                        </Link>
                        <Link to="/services/portrait">
                            <li className="quick-link">Porträtt</li>
                        </Link>
                        <Link to="/services/modelling">
                            <li className="quick-link">Modell</li>
                        </Link>
                        <Link to="/services/weddings">
                            <li className="quick-link">Bröllop</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer