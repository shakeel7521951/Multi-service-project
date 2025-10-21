import React from "react";
import HeroSection from "../components/Home/HeroSection";
import StudyResources from "../components/Home/StudyResources";
import LearningServices from "../components/Home/LearningServices";
import HowItWorks from "../components/Home/HowItWorks";
import Testimonials from "../components/Home/Testimonials";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import FAQ from "../components/Home/FAQ";
import CallToAction from "../components/Home/CallToAction";

function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <HeroSection />
      <StudyResources />
      <LearningServices />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CallToAction />
     
    </div>
  );
}

export default Home;
