import './CloseButton.css'
import { useContext } from 'react'
import MobileContext from '../../../assets/MobileContext'
function CloseButton({closeFunction}) {
    const { isMobile } = useContext(MobileContext)
    const handleClose = () => {
        closeFunction()
    }

    return (
        <div className={`close-btn-backplate ${isMobile ? '' : 'desktop'}`} onClick={handleClose}>
            <div className='close-btn-icon'></div>
        </div>
    )
}

export default CloseButton