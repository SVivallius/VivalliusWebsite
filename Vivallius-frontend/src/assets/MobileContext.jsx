import React, { createContext, useState, useEffect } from 'react'
const MobileContext = createContext()

export const MobileProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <MobileContext.Provider value={{ isMobile }}>
            {children}
        </MobileContext.Provider>
    )
}

export default MobileContext