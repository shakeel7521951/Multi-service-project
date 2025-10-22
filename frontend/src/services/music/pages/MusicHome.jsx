import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import ComingCompetitions from "../components/Home/ComingCompetitions";
import CtaSection from "../components/Home/CtaSection";

const MusicHome = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div data-aos="fade-up">
      <HeroSection data-aos="fade-up" />
      <FeaturesSection data-aos="fade-up" data-aos-delay="200" />
      <ComingCompetitions data-aos="fade-up" data-aos-delay="400" />
      <CtaSection data-aos="fade-up" data-aos-delay="600" />
    </div>
  );
};

export default MusicHome;
