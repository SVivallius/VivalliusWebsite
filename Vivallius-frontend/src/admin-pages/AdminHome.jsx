import './styles/AdminHome.css'
import MobileContext from '../assets/MobileContext'
import { useContext } from 'react'

function AdminHome() {
    const { isMobile } = useContext(MobileContext)
    return (
        <>
            <div className={`home-container ${isMobile ? '' : 'desktop'}`}>
                <div className={`home-statistics ${isMobile ? '' : 'desktop'}`}>
                    <div className={`home-clm ${isMobile ? '' : 'desktop'}`}>
                        <h1>Besökare:</h1>
                        <div className={`home-visitors ${isMobile ? '' : 'desktop'}`}>
                            
                        </div>
                    </div>
                    <div className={`home-clm right ${isMobile ? '' : 'desktop'}`}>
                        <h1>Interaktioner:</h1>
                        <div className={`home-visitors ${isMobile ? '' : 'desktop'}`}>
                            
                        </div>
                    </div>
                </div>
                <div className={`home-statistics ${isMobile ? '': 'desktop'}`}>
                    <div className={`home-clm bottom ${isMobile ? '' : 'desktop'}`}>
                        <h1>Övrig statistik:</h1>
                        <div className={`home-visitors ${isMobile ? '' : 'desktop'}`}>
                                
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminHome