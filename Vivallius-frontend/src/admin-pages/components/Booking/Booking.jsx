import './Booking.css'
import { useContext, useState } from 'react'
import MobileContext from '../../../assets/MobileContext.jsx'

function Booking({ args }){
    const { isMobile } = useContext(MobileContext)
    return (
        <div className={`booking-container ${isMobile ? '':'desktop'}`}>
            <div className={`booking-segment`}>
                <p>Namn:<br /><span className='bold'>{args.name}</span></p>
            </div>
            <div className={`booking-segment`}>
                <p>E-post:<br /><span className='bold'>{args.email}</span></p>
            </div>
            <div className={`booking-segment`}>
                <p>Status:<br /><span className='bold'>{args.isComplete ? (
                    <>Avslutad</>
                ) : (
                    <>Pågående</>
                )}</span></p>
            </div>
        </div>
    )
}

export default Booking