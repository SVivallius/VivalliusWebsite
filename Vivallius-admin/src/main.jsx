import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import { MobileProvider } from './assets/MobileContext.jsx'
import App from './App.jsx'
import Landing from './Pages/Landing/Landing.jsx'
import BookingControls from './Pages/BookingControls/BookingControls.jsx'
import ImageControls from './Pages/ImageControls/ImageControls.jsx'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/admin/" element={<App/>}>
      <Route path="" element={<Landing/>}/>
      <Route path="bookings" element={<BookingControls/>}/>
      <Route path="photos" element={<ImageControls/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MobileProvider>
      <RouterProvider router={route}/>
    </MobileProvider>
  </React.StrictMode>,
)