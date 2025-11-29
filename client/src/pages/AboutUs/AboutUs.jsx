import React from "react";
import Hero from "./hero/Hero";
import Quotes from "./quotes/Quotes";
import TeamMember from "./teamMembers/TeamMember";
import CTA from "../../components/CTA/CTA";

const AboutUs = () => {
  return (
    <>
        <Hero />
        <Quotes />
        <TeamMember />
        <CTA />
    </>
  )
};

export default AboutUs;
