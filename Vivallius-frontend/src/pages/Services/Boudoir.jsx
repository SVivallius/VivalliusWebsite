import './styles/Category.css'
import { useContext } from 'react'
import MobileContext from '../../assets/MobileContext.jsx'

import Sample from '../../assets/media/static/carro-4.jpg'
import ContactButton from '../../components/ContactButton/ContactButton'

function Boudoir() {
    const { isMobile } = useContext(MobileContext)
    return (
        <>
            <div className={`category-flex ${isMobile ? '' : 'desktop'}`}>
                <div className={`category-container ${isMobile ? '' : 'desktop'}`}>
                    <img src={Sample}/>
                </div>
                <div className={`category-container ${isMobile ? '' : 'desktop'}`}>
                    <h1>Boudoir</h1>
                    <h3>Varför Boudoir?</h3>
                    <p>En boudoirfotogrfering kan man göra av flera skäl. En sådan här fotografering kan vara en rejäl kick för självkänslan. I dagens kroppsfixerade samhälle är det nästan ingen som är helt nöjd med sig själv. Upplevelsen av att se sig själv genom kameralinsen hos en fotograf är en helt annan sak än att studera sig i en spegel. Alla människor är vackra på sitt sätt. Fotografen hjälper till att ta fram just din skönhet.</p>
                    <p>Man kan naturligtvis även göra en fotografering som en kul grej, eller för att tex ge bort som bok i morgongåva till sin blivande make/maka.</p>
                    <h3>Mycket intimt</h3>
                    <p>En boudoirfotografering är en väldigt intim situation. Både för modell och fotograf. Det är otroligt viktigt att  den/de som skall fotograferas känner sig trygga. Därför föreslår jag att du gärna tar med dig en person som du litar på som sällskap. Om det är önskvärt så kan även jag som fotograf ha en assistent med vid fotograferingen. Allt för att du skall känna dig trygg med att du aldrig är ensam med mig i den intima och utsatta situationen.</p>
                    <h3>Förberedelser</h3>
                    <p>Inför en fotografering finns det en del saker att tänka på och beslut att ta. Som tex kläder, smink och plats för fotograferingen. Därför ingår alltid ett förmöte där vi pratar igenom vad du vill och hur fotograferingen kommer att gå till. Jag kommer även att skicka ett dokument till dig med lite tips om hur du förbereder dig för tagningen.</p>
                </div>
            </div>
            <div className="center-contents">
                <ContactButton/>
            </div>
        </>
    )
}
export default Boudoir