import Hero from "@/components/about/Hero";
import Benchmark from "@/components/other/benchmark/Benchmark";
import Brands from "@/components/other/Brands";
import React from "react";
import Features from "@/components/about/Features";
import Ecosystem from "@/components/about/Ecosystem";
import Founder from "@/components/about/Founder";
import Research from "@/components/about/Research";
import Review from "@/components/about/Review";
import Vision from "@/components/about/Vision";

const About = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Features />
      <Ecosystem />
      <Benchmark />
      <Founder />
      <Research />
      <Review />
      <Vision />
    </>
  );
};

export default About;
