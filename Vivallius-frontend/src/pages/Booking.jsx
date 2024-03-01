import './styles/Booking.css'

import { useContext, useState } from 'react'
import MobileContext from '../assets/MobileContext.jsx'
import { Link } from 'react-router-dom'

function Booking() {
    const genres = ['Boudoir', 'Porträtt', 'Bröllop', 'Modell', 'Annat']

    const { isMobile } = useContext(MobileContext)
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Genre: '',
        Message: ''
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        let requestOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        await fetch('http://localhost:4980/api/1/public/booking', requestOptions)
        .then(response => {
            switch (response.status){
                case 200, 201, 202, 204:
                    alert("Tack för att du tar kontakt med mig! Jag återkommer till dig så snart jag kan!");
                    break;
                case 400:
                    alert("Något av fälten är inkorrekt ifyllda! Vänligen korrigera och försök igen.");
                    break;
                case 401:
                    alert("En otillåten förfrågan har utförts!");
                    break;
                case 500, 501, 502, 503, 504, 505:
                    alert("Ett serverfel har uppstått! Vänligen vänta några minuter eller ring gällande ditt ärende.");
                    break;
                default:
                    alert("Ett oväntat fel har uppstått! Vänligen återkom senare.");
                    break;
            }
        })
    }

    return (
        <div className={`contact-container ${isMobile ? '' : 'desktop'}`}>
            <div className={`contact-clm left ${isMobile ? '' : 'desktop'}`}>
                <h1>Intresseanmälan - Kontakt</h1>
                <p>Om du fyller i och skickar formuläret nedan så tar jag kontakt så snart som möjligt. Vi stämmer av vad du har för önskemål och behov. Sedan bestämmer vi plats och tid utifrån det.</p>
                <form
                    className={`contact-form ${isMobile ? '' : 'desktop'}`}
                    onSubmit={handleSubmit}>
                    <input type='name' name='Name' placeholder='Namn' onChange={handleInputChange}/>
                    <input type='email' name='Email' placeholder='E-post' onChange={handleInputChange}/>
                    <select name='Genre' onChange={handleInputChange}>
                        <option value=''>Välj genre:</option>
                        {genres.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                    <textarea
                        name='Message'
                        className='contact-message'
                        placeholder='Meddelande och önskemål'
                        onChange={handleInputChange}/>
                    <p className="submit-disclaimer">Genom att trycka på skicka så bekräftar du att vivallius.se får ditt medgivande på att lagra din information i syfte att utföra sin verksamhet som fotograf.<br/>
                    För vidare information, se avsnittet om sekretess <Link to="/policies">här</Link>.</p>
                    <input className="contact-submit-btn" type='submit' value="Skicka"/>
                </form>
            </div>
            <div className={`contact-clm right ${isMobile ? '' : 'desktop'}`}>
                {!isMobile && (
                    <h1 className="whitespace">_SPACE</h1>
                )}
                <p><span className="contact-head">TELEFON:</span><br/><a href="tel:+46706442944">070-644 29 44</a></p>
                <p><span className="contact-head">E-POST:</span><br/>rickard@vivallius.se</p>
                <p><span className="contact-head">ADDRESS:</span><br/>Vivallius.se<br/>Fiskebyvägen 15<br/>824 51 Hudiksvall</p>
            </div>
        </div>
    )
}
export default Booking