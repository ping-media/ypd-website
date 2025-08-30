import Hero from "@/components/about/Hero";
import React from "react";
import Features from "@/components/about/Features";
import Ecosystem from "@/components/about/Ecosystem";
import Founder from "@/components/about/Founder";
import Research from "@/components/about/Research";
import Review from "@/components/about/Review";
import Vision from "@/components/about/Vision";
import Differentiators from "@/components/about/Differentiators";

const About = () => {
  return (
    <>
      <Founder />
      <Hero />
      <Features />
      <Differentiators />
      {/* SECTION TO ADD (OUR IMPACT GOALS 2027) */}
      <Research />
      <Ecosystem />
      <Review />
      <Vision />
    </>
  );
};

export default About;
