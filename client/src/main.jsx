import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router"
import Home from './pages/Home/Home.jsx'
import Navbar from './pages/Home/navbar/Navbar.jsx'
import Works from './pages/Works/Works.jsx'
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import WorkDetail from './pages/WorkDetail/WorkDetail.jsx'
import ContactUs from './pages/ContactUs/ContactUs.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/works",
    element: <Works />
  },
  {
    path: "/works/:workId",
    element: <WorkDetail />
  },
  {
    path: "/aboutus",
    element: <AboutUs />
  },
  {
    path: "/contact",
    element: <ContactUs />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </StrictMode>,
)
