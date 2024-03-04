import { useContext } from "react"
import MobileContext from "./assets/MobileContext"
import Navigation from "./Components/Navigation/Navigation"
import { Outlet } from "react-router-dom"

function App() {
  const { isMobile } = useContext(MobileContext)

  return (
    <>
      <Navigation/>
      <div className={`wrapper ${isMobile?'':'desktop'}`}>
        <Outlet/>
      </div>
    </>
  )
}

export default App