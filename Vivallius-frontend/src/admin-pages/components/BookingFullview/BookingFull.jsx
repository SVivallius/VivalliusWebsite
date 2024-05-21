import './BookingFull.css'
import CloseButton from './CloseButton/CloseButton.jsx'


function BookingFull({ args, isVisible, disableFunc }){
    return (
        <div className={`booking-full-background ${isVisible ? 'visible':''}`}>
            <div className={`full-book-container`}>
                <CloseButton close={disableFunc}/>
                <div className={`booking-full-section`}>
                    <p>Namn:</p>
                    <h1>{args.name}</h1>
                </div>
                <div className={`booking-full-section`}>
                    <p>E-post:</p>
                    <a href={`mailto:${args.email}`}><p>{args.email}</p>{/*<img src={linkImg}/>*/}</a>
                </div>
                <div className={`booking-full-section`}>
                    <p>Genre:</p>
                    <p>{args.genre}</p>
                </div>
                <div className={`booking-full-section`}>
                    <p>Meddelande:</p>
                    <p>{args.message}</p>
                </div>
            </div>
        </div>
    )
}

export default BookingFull