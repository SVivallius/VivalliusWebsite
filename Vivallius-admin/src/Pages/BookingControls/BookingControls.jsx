import './BookingControls.css'
import { useContext, useEffect, useState } from 'react'
import MobileContext from '../../assets/MobileContext'
import { HttpRequest } from '../../assets/HttpAgent'

function BookingControls() {
    const { isMobile } = useContext(MobileContext)
    const [ bookingArray, setBookingArray ] = useState(new Array)

    useEffect(() => {
        const fetchData = () => {
            let requestOptions = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            }
            HttpRequest('1/admin/booking', requestOptions)
                .then((response) => response.json)
                .then((json) => {
                    let data = []
                    console.log(json)
                })
                .catch((error) => {
                    console.log(error)
                    setBookingArray(new Array)
                })
        }
        fetchData()
    },[])

    return (
        <>
            {bookingArray.length > 0 && (
                bookingArray.map((item) => {
                    return (
                        <>
                        <p>{item.id}</p>
                        <p>{item.Name}</p>
                        </>
                    )
                })
            )}
        </>
    )
}

export default BookingControls