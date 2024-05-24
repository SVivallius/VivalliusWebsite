import './styles/About.css'
import Rickard from '../assets/media/static/Rickard-1.jpg'
import { useContext } from 'react'
import MobileContext from '../assets/MobileContext.jsx'
import { Link } from 'react-router-dom'

function About() {
    const { isMobile } = useContext(MobileContext)

    return (
        <>
            <div className={`about-container ${isMobile ? '' : 'desktop'}`}>
                {isMobile && (
                    <div className={`about-selfportrait ${isMobile ? '' : 'desktop'}`}>
                        <img src={Rickard} alt="Självporträtt"/>
                    </div>
                )}
                <div className={`about-description ${isMobile ? '' : 'desktop'}`}>
                    <h1>Rickard Vivallius</h1>
                    <h2>Jag är fotograf, verksam i Hudiksvall, Hälsingland.</h2>
                    <p>Jag har fotograferat i ca 20 År. Många är intressena som passerat förbi linsen under årens lopp. Men de senaste åren har jag insett att det är människor som är mest intressant att ha framför kameran. Det är kombinationen av kreativt skapande och interaktion med andra människor som gör det så spännande.</p>
                    <h3>Upplevelsen</h3>
                    <p>Som fotograf har jag stor förståelse för att det kan vara en både utsatt och obekväm situation att befinna sig framför en kamera. Därför ser jag det som en av mina störsa uppgifter som fotograf att skapa så bra förutsättningar som möjligt.</p>
                    <p>Därför föregås varje fotografering av ett förmöte. Det kan ske via MS Teams, Skype, messenger eller på annat sätt. Där går vi tillsammans igenom vad som kommer hända och hur allt går till, bestämmer plats och tid mm.</p>
                    <p>Om det är första gången vi jobbar tillsammans så tycker jag att det är en bra idé att ta med någon som sällskap.  Det ger en extra trygghet för oss båda. Naturligtvis kan man alltid ha någon med sig på en fotografering. Men första gången är det extra viktigt.</p>
                    <p>Att skapa ett tryggt och bekvämt möte i fotograferingen är en förutsättning för att få bra resultat. Därför är det en viktig ingrediens i mitt arbete. Dessutom är det min absoluta uppfattning att ett besök hos fotografen skall vara en positiv upplevelse i sig.</p>
                </div>
                {!isMobile && (
                    <div className={`about-selfportrait ${isMobile ? '' : 'desktop'}`}>
                        <img src={Rickard} alt="Självporträtt"/>
                    </div>
                )}
            </div>
            <button className={`about-contact-btn ${isMobile ? '' : 'desktop'}`}>
                <Link className="styled-link-abt" to="/booking">Kontakt</Link>
            </button>
        </>
    )
}

export default About