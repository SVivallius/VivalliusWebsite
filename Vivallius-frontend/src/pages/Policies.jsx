import './styles/Policies.css'
import { useContext } from "react"
import MobileContext from "../assets/MobileContext.jsx"

// Sekretesspolicy för R.Vivallius
// Medgivande och regler för hantering av personuppgifter
function Policies() {
    const { isMobile } = useContext(MobileContext)
    return (
        <div className={`content-container ${isMobile ? '' : 'desktop'}`}>
            <h1>Vivallius.se och Sekretess</h1>
            <p>Vivallius.se värderar din integritet och därför är det viktigt att du tilldelas möjligheten att vara delaktig i vilken information som sparas om dig och i vilket syfte som detta görs. Du kan när som helst begära att få din information borttagen och Vivallius.se har då skyldighet till att verkställa detta.</p>
            <p>Borttagning av din information innebär, för dig, att verksamheten upphör. Däremot så vidtar sig Vivallius.se rätten att kvarhålla din information till sådant att processen för Borttagning är slutförd dock för endast det ändamålet använda dina uppgifter.</p>
            <h2>Ditt medgivande</h2>
            <p>När du fyller i formuläret på Vivallius.se/contact och skickar det så ger du ditt medgivande till att Vivallius.se lagrar din information för att kunna utföra sin verskamhet.</p>
            <p>Verksamheten hos Vivallius.se innefattar således att kunna etablera kontakt med dig för att planera och utföra en fotografisk session per överenskommelse.</p>
            <p>Under inga som helst omständigheter används din information till vare sig marknadsundersökningssyfte eller vidarebefordring till tredje part. Undantag för vidarebefordring kan förekomma, men sker då endast efter ditt explicita medgivande och är i direkt relation till verksamheten.</p>
            <h2>Har du frågor som berör sekretess?</h2>
            <p>Då är du varmt välkommen att kontakta Vivallius.se på mail: <a href="mailto:rickard@vivallius.se">rickard@vivallius.se</a></p>
        </div>
    )
}

export default Policies