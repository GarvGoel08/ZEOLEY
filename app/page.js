"use client";
import { useEffect } from "react";

import AboutUs from "./components/AboutUs";
import ClientResults from "./components/ClientResults";
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import Services from "./components/Services";
import MarketingSection from "./components/MarketingSection";
import OurClients from "./components/OurClients";
import AdvertiserSection from "./components/AdvertiserSection";
import WhyZeoley from "./components/WhyZeoley";
import Footer from "./components/Footer/Footer";
// import localFont 
import localFont from "next/font/local"

const akagiPro = localFont({
  src : './fonnts.com-Akagi_Pro_Medium.otf'
})

const akagiProThin = localFont({
  src: './fonnts.com-Akagi_Pro_Thin.otf'
})

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
    <div className={akagiPro.className}>
      <Hero />
      <AboutUs />
      <Services />
      <AdvertiserSection/>
      <MarketingSection/>
      <OurClients/>
      <WhyZeoley />
      <ContactSection />
      <Footer />
    </div>
  );
}
