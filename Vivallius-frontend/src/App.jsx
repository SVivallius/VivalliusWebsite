import Header from './components/header/Header.jsx'
import Footer from './components/footer/footer.jsx'
import { Outlet } from 'react-router-dom'
import MobileContext from './assets/MobileContext.jsx'
import { useContext } from 'react'

function App() {
    const {isMobile} = useContext(MobileContext)

    return (
        <>
            <Header />
            <div className={`wrapper ${isMobile ? '' : 'desktop'}`}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default App