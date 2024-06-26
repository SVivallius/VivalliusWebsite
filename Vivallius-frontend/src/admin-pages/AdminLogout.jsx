import './styles/AdminLogout.css'

import { useEffect, useState, useContext } from 'react'
import AdminContext from '../assets/AdminContext.jsx'
import { HttpRequest } from '../assets/HttpAgent.js'

function AdminLogout(){
    const { adminArgs } = useContext(AdminContext)
    const [isLoggedOut, setIsLoggedOut] = useState(false)
    useEffect(() => {
        if (adminArgs.Logout())
            setIsLoggedOut(true)
    }, [])

    return (
        <>
        </>
    )
}

export default AdminLogout