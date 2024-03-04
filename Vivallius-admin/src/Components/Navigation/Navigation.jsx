import './Navigation.css'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import MobileContext from '../../assets/MobileContext.jsx'

function Navigation() {
    const { isMobile } = useContext(MobileContext)

    return (
        <div className={`nav-backplate ${isMobile?'':'desktop'}`}>
            <ul>
                
            </ul>
        </div>
    )
}

export default Navigation