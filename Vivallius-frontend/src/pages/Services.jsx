import { Link } from 'react-router-dom'
import './styles/Services.css'
import { useContext } from 'react'
import MobileContext from '../assets/MobileContext.jsx'
import ServiceCard from '../components/ServicesCard/ServicesCard.jsx'

function Services() {
    const { isMobile } = useContext(MobileContext)

    return (
        <>
            <div className={`services-flex ${isMobile ? '' : 'desktop'}`}>
                <ServiceCard
                    ImagePath="src/media/static/carro-3.jpg"
                    Route="./boudoir"
                    Title="Boudoir"
                    Description="Ordet Boudoir kommer från franskan och åsyftar 'liten elegant damsalong'. Ett rum som av den franska societen användes för på- och avklädning. Boudoir har sedan blivit beteckningen på en speciell fotogenre, som började utvecklas vid förra sekelskiftet. Det är inte graden av nakenhet som gör ett foto 'boudoir', utan den känsla som bilden förmedlar.  Boudoir är inte naket, men aningen lättklätt. Boudoir är inte porr, men lite sensuellt."
                    />
                <ServiceCard
                    ImagePath="src/media/static/sussie-4.jpg"
                    Route="./portrait"
                    Title="Porträtt"
                    Description="Ett prträtt kan ha många olika inriktningar. Det kan vara inomhus, utomhus. det kan vara i studio eller 'on location'. En porträttfotografering kan även ha väldigt olika inriktning. Allt ifrån att ta några förhållandevis enkla bilder i studion på en person. till att följa och porträttera en personlighet under kanske en dag eller en helg."
                    />
            </div>
            <div className={`services-flex ${isMobile ? '' : 'desktop'}`}>
                <ServiceCard
                    ImagePath="src/media/static/Malin-4.jpg"
                    Route="./modelling"
                    Title="Modell"
                    Description="Låt fantasin ta över. Låt oss skapa drömmar tillsammans. Klä ut dig, gestalta en person, en företeelse eller nåt du drömt om. Det är bara fantasin som sätter gränser. Här kan idéer och initiativ komma både från mig som fotograf, och från dig som modell. det finns heller inga färdiga paketlösningar eller priser. allt beror på vad vi ska göra"
                    />
                <ServiceCard
                    ImagePath="src/media/static/linda brud-4.jpg"
                    Route="./weddings"
                    Title="Bröllop"
                    Description="Kanske den största dagen i ditt liv. Det skulle vara synd att inte bevara den för er själva och för alla nära och kära. En bröllopsfotografering ger er en produkt som är åldersbeständig så att ni kan njuta av den länge. Men också finns till för både framtida  generationer att glädjas över."
                    />
            </div>
        </>
    )
}
export default Services