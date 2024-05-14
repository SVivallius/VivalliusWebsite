import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import MobileContext from '../../assets/MobileContext.jsx'

import './AdminHeader.css'
import MenuBurger from '../menu-burger/Menu-burger.jsx'
import HomeIcon from '../home-icon/HomeIcon.jsx'

function Header() {
    const { isMobile } = useContext(MobileContext)

    const [expanded, setExpanded] = useState(false)
    function expandMenu() {
        setExpanded(!expanded)
    }

    function collapseMenu() {
        setExpanded(false)
    }

    return (
        <>
            <div className={`nav-backplate ${isMobile ? '' : 'desktop'}`}>
                <Link to="/"><div id="nav-home" className={`nav-link ${isMobile ? '' : 'desktop'}`}>{!isMobile && (<HomeIcon/>)}Vivallius.se</div></Link>
                <ul className={`nav-options ${
                    isMobile ?
                        (expanded ? 'expanded' : 'collapsed') :
                        'desktop'}`}>
                    <li className="nav-opt" onClick={collapseMenu}>
                        <Link to="/"><p className={`nav-link ${isMobile ? '' : 'desktop'}`}>Hem</p></Link>
                    </li>
                    <li className="nav-opt" onClick={collapseMenu}>
                        <Link to="/admin/portfolio"><p className={`nav-link ${isMobile ? '' : 'desktop'}`}>Portfolio</p></Link>
                    </li>
                    <li className="nav-opt" onClick={collapseMenu}>
                        <Link to="/admin/booking"><p className={`nav-link ${isMobile ? '' : 'desktop'}`}>Bokningar</p></Link>
                    </li>
                    <li className="nav-opt" onClick={collapseMenu}>
                        <Link to="/admin/settings"><p className={`nav-link ${isMobile ? '' : 'desktop'}`}>Inställningar</p></Link>
                    </li>
                    <li className="nav-opt" onClick={collapseMenu}>
                        <Link to="/admin/logout"><p className={`nav-link ${isMobile ? '' : 'desktop'}`}>Logga Ut</p></Link>
                    </li>
                </ul>
                {isMobile && (
                    <div className="menu-toggle-holder">
                        <div className="menu-toggle-button" onClick={expandMenu}>
                            <MenuBurger />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Header