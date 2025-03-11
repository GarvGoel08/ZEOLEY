"use client";
import AboutUs from "./components/AboutUs";
import CtaBanner from "./components/CtaBanner";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {

  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Services/>
      <CtaBanner />
    </div>
  );
}
