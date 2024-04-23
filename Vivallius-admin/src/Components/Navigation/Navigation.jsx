import './Navigation.css'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import MobileContext from '../../assets/MobileContext.jsx'

function Navigation() {
    const { isMobile } = useContext(MobileContext)

    return (
        <div className={`nav-backplate ${isMobile?'':'desktop'}`}>
            <ul>
                <li><Link to="/admin/">Hem</Link></li>
                <li><Link to="/admin/bookings">Bokningar</Link></li>
                <li><Link to="/admin/photos">Portfolio</Link></li>
                <li><Link to="/admin/settings">Inställningar</Link></li>
            </ul>
        </div>
    )
}

export default Navigation