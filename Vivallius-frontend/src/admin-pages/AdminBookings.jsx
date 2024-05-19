import './styles/AdminBookings.css'
import { useContext, useEffect, useState } from 'react'
import RingLoader from '../components/RingLoader/RingLoader'
import { HttpRequest } from '../assets/HttpAgent'

import MobileContext from '../assets/MobileContext'
import AdminContext from '../assets/AdminContext'

function AdminBookings () {
    const { isMobile } = useContext(MobileContext)
    const { adminArgs } = useContext(AdminContext)

    const [isLoading, setIsLoading] = useState(true)
    const [bookingsArray, setBookingsArray] = useState([])

    useEffect(() => {
        let getBookings = () => {
            HttpRequest('/admin/booking', {
                method: 'GET',
                headers: {
                    'content-type':'application/json',
                    'X-Vivallius-Admin-Token': adminArgs.context.token
                }
            })
            .then(response => {
                setIsLoading(false)
                if (response.status >= 200 && response.status < 300){
                    return response.json
                } else {
                    return JSON.stringify(new Array)
                }
            })
            
        }
        getBookings()
    },[])

    return (
        <>
            <div className={`admin-booking-container ${isMobile ? '' : 'desktop'}`}>
                <h1>Dina Bokningar</h1>
                <div className={`admin-bookings-holder ${isMobile ? '': 'desktop'}`}>                    
                    {isLoading ? (
                        <RingLoader color="var(--link-highlight)"/>
                    ):(
                        bookingsArray.map((item) => {
                            return (
                                <>
                                </>
                            )
                        })
                    )}
                </div>
            </div>
        </>
    )
}

export default AdminBookings