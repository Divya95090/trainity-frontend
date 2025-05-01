import HeroSection from './components/HeroSection'
import Navbar from './components/NavBar'
import React from 'react'
import SocialProofSection from './components/SocialProofSection'
import ProgramHighlights from './components/ProgramHighlights'
import Apply from './components/Apply'
import Certificates from './components/Certificates'
import RealWorldProjects from './components/RealWord'
function App() {
  
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <SocialProofSection/>
      <ProgramHighlights/>
      <Apply/>
      <Certificates/>
      <RealWorldProjects/>
    </>
  )
}

export default App
