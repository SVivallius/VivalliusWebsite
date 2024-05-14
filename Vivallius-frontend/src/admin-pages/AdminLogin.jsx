import { useState, useEffect, useContext } from 'react'
import MobileContext from '../assets/MobileContext.jsx'

function AdminLogin () {
    const { isMobile } = useContext(MobileContext)
    return (
        <div className={`login-container ${isMobile ? '' : ''}`}>

        </div>
    )
}
export default AdminLogin