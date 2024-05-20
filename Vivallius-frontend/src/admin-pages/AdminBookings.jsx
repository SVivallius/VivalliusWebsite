import './styles/AdminBookings.css'
import { useContext, useEffect, useState } from 'react'
import RingLoader from '../components/RingLoader/RingLoader'
import { HttpRequest } from '../assets/HttpAgent'
import Booking from './components/Booking/Booking.jsx'

import MobileContext from '../assets/MobileContext'
import AdminContext from '../assets/AdminContext'

function AdminBookings () {
    const { isMobile } = useContext(MobileContext)
    const { adminArgs } = useContext(AdminContext)

    const [isLoading, setIsLoading] = useState(true)
    const [bookingsArray, setBookingsArray] = useState([])

    useEffect(() => {
        let getBookings = () => {
            HttpRequest('1/admin/booking', {
                method: 'GET',
                headers: {
                    'content-type':'application/json',
                    'X-Vivallius-Admin-Token': adminArgs.context.token
                }
            })
            .then(response => {
                if (response.ok == true){
                    return response.json()
                } else {
                    return new Array
                }
            })
            .then((json) => {
                let t = []
                json.map((item) => {
                    t.push(item)
                })
                setBookingsArray(t)
            })
            .then(
                setIsLoading(false)
            )
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
                                <div className="booking-container" key={item.id}>
                                    <Booking args={item}/>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </>
    )
}

export default AdminBookings