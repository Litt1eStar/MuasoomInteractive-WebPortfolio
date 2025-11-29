import React from "react";
import Hero from "./hero/Hero";
import TopWork from "./topWork/TopWork";
import OurServices from "./ourServices/OurServices";
import WhatHaveWeDone from "./whatHaveWeDone/WhatHaveWeDone";
import AboutUs from "./aboutUs/AboutUs";
import TeamMember from "./teamMembers/TeamMember";
import CustomerReviews from "./customerReviews/CustomerReviews";
import GetInTouch from "./getInTouch/GetInTouch";
import CTA from "../../components/CTA/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <TopWork />
      <OurServices />
      <WhatHaveWeDone />
      <AboutUs />
      <TeamMember />
      <CustomerReviews />
      <CTA />
    </>
  )
};

export default Home;
