import './ContactButton.css'
import { Link } from 'react-router-dom'

function ContactButton() {
    return (
        <>
            <Link to="/booking">
                <div className="category-contact-btn">
                    <p>Intresseanmälan</p>
                </div>
            </Link>
        </>
    )
}

export default ContactButton