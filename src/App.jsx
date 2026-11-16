import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollManager from './components/ScrollManager'

import Home from './pages/Home'
import ProjectOne from './pages/ProjectOne'
import ProjectTwo from './pages/ProjectTwo'
import ProjectThree from './pages/ProjectThree'
import NotFound from './pages/NotFound'

import { projects } from './data/projects'

import './App.css'

// The import above only needs one dot -- ./pages/Home -- because pages sits
// right next to App.jsx. (Session 6, Part C.)

export default function App() {
  return (
    <>
      {/*
        Navbar and Footer sit OUTSIDE <Routes>.
        Anything outside shows on every page; anything inside shows only on its
        own page. That is how one navbar serves the whole site.
      */}
      <Navbar />
      <ScrollManager />

      <Routes>
        <Route path="/" element={<Home />} />

        {/*
          The paths come from src/data/projects.js, which is the same file the
          cards in Projects.jsx read. So a card and its route can never
          disagree -- Session 6, Part I lists that as the top cause of
          "page not found".
        */}
        <Route path={projects[0].path} element={<ProjectOne />} />
        <Route path={projects[1].path} element={<ProjectTwo />} />
        <Route path={projects[2].path} element={<ProjectThree />} />

        {/* Anything else. */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}
