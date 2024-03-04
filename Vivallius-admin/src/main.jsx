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

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Landing/>}/>
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