import './styles/AdminLogout.css'

import { useEffect, useState, useContext } from 'react'
import { AdminContext } from '../assets/AdminContext.jsx'
import { HttpRequest } from '../assets/HttpAgent.js'

function AdminLogout(){
    const { admin } = useContext(AdminContext)
    const [isLoggedOut, setIsLoggedOut] = useState(false)
    useEffect(() => {
        admin.logout()
    }, [])

    return (
        <>
        </>
    )
}

export default AdminLogout