import './Image.css'
import { useContext } from 'react'
import MobileContext from '../../assets/MobileContext'

//<img src={data.PhotoPath} alt={data.Title}/>

function Image({ data }) {
    const { isMobile } = useContext(MobileContext)

    return (
        <div className={`image-card-base ${isMobile ? '' : 'desktop'}`}>
            <img src={data.PhotoPath} alt={data.Title}/>
        </div>
    )
}

export default Image