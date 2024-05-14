import AdminHeader from './components/AdminHeader/AdminHeader.jsx'
import { Navigate, Outlet } from 'react-router-dom'
import MobileContext from './assets/MobileContext.jsx'
import AdminContext from './assets/AdminContext.jsx'
import { useContext } from 'react'

function AdminApp() {
    const {isMobile} = useContext(MobileContext)
    const {admnArgs} = useContext(AdminContext)

    return (
        <>
            {admnArgs.context.isAdmin == false ? (
                <Navigate to="admin/login"/>
            ) : (
                <>
                    <AdminHeader />
                    <div className={`wrapper ${isMobile ? '' : 'desktop'}`}>
                        <Outlet />
                    </div>
                </>
            )}
        </>
    )
}

export default AdminApp