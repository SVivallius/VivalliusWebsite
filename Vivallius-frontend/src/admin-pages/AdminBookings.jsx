import './styles/AdminBookings.css'
import { useContext } from 'react'

import MobileContext from '../assets/MobileContext'
import AdminContext from '../assets/AdminContext'

function AdminBookings () {
    const { isMobile } = useContext(MobileContext)
    const { adminArgs } = useContext(AdminContext)

    let token = adminArgs.context.token

    return (
        <>
        </>
    )
}

export default AdminBookings