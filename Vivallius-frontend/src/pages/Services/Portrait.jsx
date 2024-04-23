import './styles/Category.css'
import { useContext } from 'react'
import MobileContext from '../../assets/MobileContext'

import Sample from '../../media/static/sussie-2.jpg'
import ContactButton from '../../components/ContactButton/ContactButton'

function Portrait() {
    const { isMobile } = useContext(MobileContext)

    return (
        <>
        <div className={`category-flex ${isMobile ? '' : 'desktop'}`}>
            <div className={`category-container ${isMobile ? '' : 'desktop'}`}>
                <img src={Sample} />
            </div>
            <div className={`category-container ${isMobile ? '' : 'desktop'}`}>
                <div className={`category-container-section ${isMobile ? '' : 'desktop'}`}>
                    <h1>Porträtt</h1>
                    <p>Att fånga sig själv på bild, att ta sitt porträtt, är populärare än någonsin. Det är bara att titta på alla selfies som publiceras på sociala medier.</p>
                    <p>Att boka en porträttfotografering med en fotograf ger en helt annan upplevelse. Då får du hjälp av en erfaren person att hitta rätt vinklar och rätt ljus för att återge din personlighet i bilderna.</p>
                    <p>Porträtt kan vi fotografera både i studio och utomhus eller i andra lokaler som ditt hem eller på kontoret.</p>
                </div>
                <div className={`category-container-section ${isMobile ? '' : 'desktop'}`}>
                    <h2>Paketexempel</h2>
                    <ul>
                        <li>Porträtt i studio.<br/>1 timme fotografering.</li>
                        <li>Porträtt på 'location'<br/>1 timme fotografering plus restid och reskostnad.</li>
                        <li>Kombination.<br/>Både studio och 'on location'. en timme på varje plus restid och resa.</li>
                        <li>Speciallösningar.<br/>Skräddarsys efter dina behov.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="center-contents">
            <ContactButton/>
        </div>
        </>
    )
}
export default Portrait