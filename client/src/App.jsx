import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import TopWork from "./components/topWork/TopWork"
import OurServices from "./components/ourServices/OurServices"
import WhatHaveWeDone from "./components/whatHaveWeDone/WhatHaveWeDone"
import AboutUs from "./components/aboutUs/AboutUs"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopWork />
      <OurServices />
      <WhatHaveWeDone />
      <AboutUs />
    </>
  )
}

export default App
