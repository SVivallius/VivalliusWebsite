import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './flex.css'
import { 
  RouterProvider,
  Route, 
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

// Import pages and main website components.
import { MobileProvider } from './assets/MobileContext.jsx'

import App from './App.jsx'
import About from './pages/About.jsx'
import Booking from './pages/Booking.jsx'
import Home from './pages/Home.jsx'
import Nature from './pages/Nature.jsx'
import Policies from './pages/Policies.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Services from './pages/Services.jsx'
import Boudiur from './pages/Services/Boudoir.jsx'
import Modelling from './pages/Services/Modelling.jsx'
import Portrait from './pages/Services/Portrait.jsx'
import Weddings from './pages/Services/Weddings.jsx'
import OutletComponent from './components/OutletComponent'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about/" element={<About />} />
      <Route path="portfolio/" element={<Portfolio />} />
      <Route path="policies/" element={<Policies />} />
      <Route path="services/" element={<OutletComponent />}>
        <Route path="" exact element={<Services />} />
        <Route path="boudoir/" element={<Boudiur />} />
        <Route path="modelling/" element={<Modelling />} />
        <Route path="portrait/" element={<Portrait />} />
        <Route path="weddings/" element={<Weddings />} />
      </Route>
      <Route path="booking/" element={<Booking />} />
      <Route path="nature/" element={<Nature />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MobileProvider>
      <RouterProvider router={route} />
    </MobileProvider>
  </React.StrictMode>,
)