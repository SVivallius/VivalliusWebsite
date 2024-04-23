import './ServicesCard.css'
import { useContext } from "react"
import MobileContext from "../../assets/MobileContext.jsx"
import { Link } from 'react-router-dom'

function ServiceCard({ImagePath, Route, Description, Title}) {
    const { isMobile } = useContext(MobileContext)
    return (
        <div className={`services-card-limiter ${isMobile ? '' : 'desktop'}`}>
            <Link to={Route}>
                <div className={`services-card-container ${isMobile ?  '' : 'desktop'}`}>
                    <img src={ImagePath}/>
                    <div className={`services-card-info ${isMobile ? '':'desktop'}`}>
                        <h1>{Title}</h1>
                        <p>{Description}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ServiceCard