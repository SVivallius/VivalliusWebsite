import './styles/Category.css'
import { useContext } from 'react'
import MobileContext from '../../assets/MobileContext'
import ContactButton from '../../components/ContactButton/ContactButton.jsx'

import Sample from '../../media/static/linda brud-5.jpg'

function Weddings() {
    const { isMobile } = useContext(MobileContext)

    return (
        <>
        <div className={`category-flex ${isMobile ? '':'desktop'}`}>
            <div className={`category-container ${isMobile ? '':'desktop'}`}>
                <img src={Sample}/>
            </div>
            <div className={`category-container ${isMobile ? '':'desktop'}`}>
                <div className={`category-container-section ${isMobile ? '':'desktop'}`}>
                    <h1>Bröllop</h1>
                    <p>En bröllopsfotografering handlar om att fånga dom små och stora stunderna i det som kanske är er största dag i livet. Att med fotografin som verktyg skapa er möjlighet att för all framtid kunna minnas och se tillbaka på den här dagen.</p>
                    <p>Omfattningen på en bröllopsfotografering kan variera ganska mycket beroende på önskemål och budget. Det finns några färdiga paket, men andra lösningar och paket är fullt möjliga. ta kontakt för diskusion.</p>
                    <p>En populär kombination är även att bruden inför bröllopsdagen bokar en Boudoir session och beställer en fotobok som morgongåva till brudgummen.</p>
                    <p>Alla bokningar föregås av ett konsultationssamtal där går vi igenom hur fotograferingen skall genomföras och i vilken omfattning den skall göras.  När vi är överens om alla detaljer så får du ett mail med ett kontrakt för att verifiera att vi är överens om vad vi bestämt.</p>
                </div>
            </div>
        </div>
        <div className={`weddings-bottom ${isMobile ? '' : 'desktop'}`}>
            <h1>Paketförslag</h1>
            <h3>Här nedan följer några förslag på paket som även kan kombineras med varandra.</h3>
            <div className={`category-flex ${isMobile?'':'desktop'}`}>
                <div className={`category-container ${isMobile?'':'desktop'}`}>
                    <ul>
                        <li><span className="bold">Förberedelser:</span><br/>Dokumenterar förberedelserna inför vigseln som tex. smink, hår och påklädning. Kan inkludera brud, brudgum, tärnor och bestman.</li>
                        <li><span className="bold">Brudporträtt:</span><br/>Trots namnet handlar det om både brud och brudgum, samt ev tärnor och bestman, eller liknande.</li>
                    </ul>
                </div>
                <div className={`category-container ${isMobile?'':'desktop'}`}>
                    <ul>
                        <li><span className="bold">Vigselakt:</span><br/>Fotografering under själva vigselakten. oavsett om det sker i kyrka eller på annan plats kräver godkännande av vigselförättaren.</li>
                        <li><span className="bold">Middag och fest:</span><br/>Fotograferingen fortsätter hela kvällen. Dokumentation av allt som händer under ev middag och festligheter. vem håller tal, brudvalsen, vem dansar med vem, hur ser dukningen ut, vad serveras.</li>
                    </ul>
                </div>
            </div>
            <ContactButton/>
        </div>
        </>
    )
}
export default Weddings