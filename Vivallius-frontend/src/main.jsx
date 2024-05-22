import React from 'react'
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
import OutletComponent from './components/OutletComponent'

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

import AdminLogin from './admin-pages/AdminLogin.jsx'
import AdminLogout from './admin-pages/AdminLogout.jsx'
import AdminApp from './AdminApp.jsx'
import AdminHome from './admin-pages/AdminHome.jsx'
import AdminPortfolio from './admin-pages/AdminPortfolio.jsx'
import AdminBookings from './admin-pages/AdminBookings.jsx'
import AdminSettings from './admin-pages/AdminSettings.jsx'
import { AdminProvider } from './assets/AdminContext'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<OutletComponent />}>
      <Route path="" element={<App />}>
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
      {/*ADMIN PAGES*/}
      <Route path="admin/login/" element={<AdminLogin />}/>
      <Route path="admin/logout/" element={<AdminLogout />}/>
      <Route path="admin/" element={<AdminApp />}>
        <Route path="" exact element={<AdminHome />}/>
        <Route path="portfolio/" element={<AdminPortfolio />}/>
        <Route path="bookings/" element={<AdminBookings />}/>
        <Route path="settings/" element={<AdminSettings />}/>
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MobileProvider>
      <AdminProvider>
        <RouterProvider router={route} />
      </AdminProvider>
    </MobileProvider>
  </React.StrictMode>,
)