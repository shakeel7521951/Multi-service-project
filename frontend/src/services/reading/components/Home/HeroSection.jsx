import React, { useState } from "react";
import IntroVideo from "../Home/Header/IntroVideo";
import HeroSwiper from "../Home/Header/HeroSwiper";
import hero1 from '../../../../assets/hero1.jpeg'
import hero2 from '../../../../assets/hero2.jpg'
import hero3 from '../../../../assets/hero1.jpeg'
const slides = [
  {
    title: "Empower Your Learning Journey",
    subtitle: "Learn at your pace — Master any subject.",
    desc: "Discover interactive notes, past papers, and expertly curated resources designed to help you grow — from your first year to university graduation.",
    btnText: "Start Learning",
    bg: hero1,
    gradient: "from-blue-900/80 via-purple-900/40 to-black/80",
  },
  {
    title: "Smarter Tools, Better Results",
    subtitle: "Your personalized digital study hub.",
    desc: "Track progress, stay organized, and use AI-powered tools that make studying more efficient, focused, and effective.",
    btnText: "Explore Tools",
    bg: hero2,
  },
  {
    title: "Join a Community of Achievers",
    subtitle: "Collaborate, Learn & Grow Together.",
    desc: "Thousands of students rely on SmartStudy for mentorship, guidance, and peer support. Learn from others and share your success.",
    btnText: "Join the Community",
    bg: hero3,
  },
];

const HeroSection = () => {
  const [showSwiper, setShowSwiper] = useState(false);

  return (
    <section className="relative w-[100%] h-[100vh] text-white overflow-hidden">
      {!showSwiper && <IntroVideo onFinish={() => setShowSwiper(true)} />}
      {showSwiper && <HeroSwiper slides={slides} />}
    </section>
  );
};

export default HeroSection;