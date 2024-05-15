import { useState, useEffect, useContext } from 'react'
import MobileContext from '../assets/MobileContext.jsx'
import AdminContext from '../assets/AdminContext.jsx'

function AdminLogin () {
    const { adminArgs } = useContext(AdminContext)
    const { isMobile } = useContext(MobileContext)
    return (
        <>
            {adminArgs.context.isAdmin ? (
                <Navigate to="/admin/" />
            ) : (
                <div className={`login-container ${isMobile ? '' : 'desktop'}`}>

                </div>
            )}
        </>
    )
}
export default AdminLogin