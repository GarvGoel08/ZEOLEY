"use client";
import { useEffect } from "react";

import AboutUs from "./components/AboutUs";
import ClientResults from "./components/ClientResults";
import ContactSection from "./components/ContactSection";
import CtaBanner from "./components/CtaBanner";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyZeoley from "./components/WhyZeoley";
import Footer from "./components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSectionId = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSectionId = section.getAttribute("id");
        }
      });

      if (currentSectionId) {
        history.replaceState({}, "", `#${currentSectionId}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <CtaBanner />
      <ClientResults />
      <WhyZeoley />
      <ContactSection />
      <Footer />
    </div>
  );
}
