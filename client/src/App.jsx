import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import TopWork from "./components/topWork/TopWork"
import OurServices from "./components/ourServices/OurServices"
import WhatHaveWeDone from "./components/whatHaveWeDone/WhatHaveWeDone"
import AboutUs from "./components/aboutUs/AboutUs"
import TeamMember from "./components/teamMembers/TeamMember"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopWork />
      <OurServices />
      <WhatHaveWeDone />
      <AboutUs />
      <TeamMember />
    </>
  )
}

export default App
