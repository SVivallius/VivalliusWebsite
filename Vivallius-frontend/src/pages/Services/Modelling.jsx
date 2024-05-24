import './styles/Category.css'
import { useContext } from 'react'
import MobileContext from '../../assets/MobileContext'

import Sample from '../../assets/media/static/Malin-1.jpg'
import ContactButton from '../../components/ContactButton/ContactButton'

function Modelling() {
    const { isMobile } = useContext(MobileContext)

    return (
        <>
        <div className={`category-flex ${isMobile ? '' : 'desktop'}`}>
            <div className={`category-container ${isMobile ? '' : 'desktop'}`}>
                <img src={Sample}/>
            </div>
            <div className={`category-container ${isMobile ? '' : 'desktop'}`}>
                <h1>Modell</h1>
                <p>Det här är en genre som är lite svår att beskriva och förklara. Det handlar oftast mer om att "spela en karaktär" än att porträttera en person.<br/>Det kan vara allt ifrån att spela geisha, samurai eller yxmördare. Idéerna kan komma från mig som fotograf eller från dig som modell.</p>
                <p>Känner du dig nyfiken på att spela en karaktär framför kameran? Hör av dig. Jag är alltid intresserad. Det kostar inget att ta en diskussion.</p>
                <p>Om vi båda tänder på idén så innebär det ingen kostnad för dig, eller vi delar på eventuella omkostnader. Båda får bilder att använda i olika sammanhang.</p>
                <p>Jag har alltid olika idéer och tankar i den här genren så hör av dig om du tycker det låter spännande.</p>
                <p>Kom ihåg att det är helt OK att ha en kompis eller liknande med vid fotografering eller ev förmöte. ALLT för att du som modell ska känna dig trygg.</p>
                <p>Din trygghet är viktig och en förutsättning för att få bra resultat.</p>
            </div>
        </div>
        <div className="center-contents">
            <ContactButton/>
        </div>
        </>
    )
}
export default Modelling