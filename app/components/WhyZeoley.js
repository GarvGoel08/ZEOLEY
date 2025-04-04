"use client";
import React from "react";
import FeatureCard from "./FeatureCard";

const WhyZeoley = () => {
  const features = [
    {
      image:
        "/Features/1.png",
      altText: "Data-Driven Analytics",
      title: "Data-Driven Approach:",
      description:
        "We focus on measurable results using a combination of data, analytics, and testing to ensure maximum impact.",
    },
    {
      image:
        "/Features/2.png",
      altText: "Proven Track Record",
      title: "Proven Track Record:",
      description:
        "With years of experience and a portfolio of successful campaigns, we're experts in driving growth for your business.",
    },
    {
      image:
        "/Features/3.png",
      altText: "Personalized Solutions",
      title: "Personalized Solutions:",
      description:
        "Each campaign is tailored to fit your specific business needs and goals, ensuring optimal performance.",
    },
    {
      image:
        "/Features/4.png",
      altText: "Transparent Reporting",
      title: "Transparent Reporting:",
      description:
        "We believe in transparency and provide regular reports so you can see exactly how your investment is performing.",
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <section id="why-zoeley" className="flex flex-col items-center px-5 py-10 mb-10  bg-white">
        <h2 className="mb-12 text-5xl font-bold text-center text-primary max-md:text-4xl max-sm:mb-8 max-sm:text-3xl">
          Why Zeoley?
        </h2>
        <div className="flex flex-wrap gap-8 justify-center max-w-[1440px] max-md:gap-5 max-sm:gap-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              altText={feature.altText}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyZeoley;
