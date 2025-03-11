"use client";
import React from "react";
import ResultsHeader from "./ResultsHeader";
import TestimonialGrid from "./TestimonialGrid";

const ClientResults = () => {
  const testimonials = [
    {
      id: 1,
      image: "/Portfolio/1.png",
      text: "Increased sales by 200% through a Google Ads PPC campaign.",
      author: "Rayhan Curran",
    },
    {
      id: 2,
      image: "/Portfolio/2.png",
      text: "Achieved a 50% increase in qualified leads through social media campaigns.",
      author: "Kayley Frame",
    },
    {
      id: 3,
      image: "/Portfolio/3.png",
      text: "Grew organic traffic by 75% in 6 months with a tailored SEO strategy.",
      author: "Allan Kim",
    },
  ];

  return (
    <section id="portfolio" className="flex flex-col items-center px-32 py-16 w-full bg-white max-md:px-16 max-sm:px-5">
      <div className="w-full max-w-[1197px]">
        <ResultsHeader />
        <TestimonialGrid testimonials={testimonials} />
      </div>
    </section>
  );
};

export default ClientResults;
