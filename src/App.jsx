import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Events from './pages/Events'
import NgoListing from './pages/NgoListing.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

import IndividualDashboard from './components/Dashboard/IndividualDashboard.jsx'
import NgoDashboard from './components/Dashboard/NgoDashboard.jsx'
import CorporateDashboard from './components/Dashboard/CorporateDashboard.jsx'
import CustomEvent from './pages/CustomEvent.jsx'
import CustomNGO from './pages/CustomNgo.jsx'
// import './App.css'

export const server = "http://localhost:3000/api"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/individualDashboard' element={<IndividualDashboard />} />
        <Route path='/ngoDashboard' element={<NgoDashboard />} />
        <Route path='/corporateDashboard' element={<CorporateDashboard />} />
        <Route path='/events' element={<Events />} />
        <Route path='/ngoListing' element={<NgoListing />} />
        <Route path='/customevent' element={<CustomEvent />} />
        <Route path="/customngo" element={<CustomNGO />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
