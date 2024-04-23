import './Fullview.css'
import { useContext } from 'react'
import MobileContext from '../../assets/MobileContext.jsx'

import CloseButton from './CloseButton/CloseButton.jsx'

function Fullview({Image, setFullView, isVisible}) {
    const {isMobile} = useContext(MobileContext)
    return (
        <>
            {Image !== null ? (
                <div className={`fullview-fade-background ${isVisible ? 'visible' : ''}`}>
                    <img src={Image.PhotoPath} alt={Image.Title}/>
                    <CloseButton closeFunction={setFullView} isMobile={isMobile}/>
                </div>
            ):(<></>)}
        </>
    )
}

export default Fullview