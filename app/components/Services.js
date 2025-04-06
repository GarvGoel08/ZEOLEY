"use client";
import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    image:
      "/Services/1.png",
    title: "Paid Search Advertising",
    description:
      "Boost your brand's visibility on Google and Bing with targeted ads and strategic bidding.",
  },
  {
    image:
      "/Services/2.png",
    title: "Social Media Advertising",
    description:
      "Leverage platforms like Facebook, Instagram, LinkedIn, and TikTok to generate quality leads and conversions.",
  },
  {
    image:
      "/Services/3.png",
    title: "Affiliate Marketing",
    description:
      "Partner with top affiliates to expand your reach and drive sales through trusted recommendations",
  },
  {
    image:
      "/Services/4.png",
    title: "Display & Retargeting Ads",
    description:
      "Keep your brand top of mind and convert interested prospects with well-placed retargeting ads.",
  },
  {
    image:
      "/Services/5.png",
    title: "SEO & Content Marketing",
    description:
      "Boost your business organically with optimized content and SEO strategies for long-term success.",
  },
  {
    image:
      "/Services/6.png",
    title: "Email Marketing",
    description:
      "Engage and convert your audience through personalized, data-driven email campaigns.",
  },
];

const Services = () => {
  return (
    <section id="services" className="px-20 py-10 w-full bg-white min-h-[screen] max-md:px-10 max-sm:px-5">
      <h1 className="mb-16 text-4xl font-bold text-center text-primary max-md:text-3xl max-sm:text-3xl">
        Our Performance Marketing Services
      </h1>
      <div className="grid xl:grid-cols-3 gap-10 md:gap-16 sm:grid-cols-2 grid-cols-1">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
