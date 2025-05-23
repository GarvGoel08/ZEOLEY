"use client";
import React from "react";

const AboutUs = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="about" className="flex flex-col items-center px-5 py-14 w-full bg-white min-h-[662px] max-md:px-10 max-sm:px-5">
      <h1 className="mb-10 text-4xl font-bold leading-[49px] text-primary max-md:text-4xl max-sm:text-3xl">
        About Us
      </h1>
      <div className="flex gap-20 justify-between max-md:flex-col max-md:gap-10">
        <article className="flex flex-col w-full max-w-[424px]">
          <div className="overflow-hidden mb-5 w-full rounded-2xl h-[283px]">
            <img
              src="/aboutus.jpg"
              alt="Analytics dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mb-5 text-lg leading-6 text-zinc-700">
            We are a performance-driven marketing agency committed to delivering
            measurable results for your business. With a data-first approach, we
            focus on driving conversions, increasing sales, and maximizing your
            marketing ROI.
          </p>
          {/* <button className="px-8 py-2.5 text-lg leading-7 text-white cursor-pointer bg-primary hover:bg-slate-800 transition-colors w-fit"
          onClick={scrollToContact}
          >
            Contact Us
          </button> */}
        </article>
        <article className="flex flex-col gap-11 w-full max-w-[600px]">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-3xl font-bold leading-10 text-secondary max-md:text-3xl max-sm:text-2xl">
              Our Mission:
            </h2>
            <p className="text-lg leading-6 text-zinc-700">
            We are dedicated to delivering performance marketing solutions that empower brands to grow and achieve sustainable, long-term success. Through data-driven strategies and innovative practices, we help businesses reach their full potential with measurable results.
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <h2 className="text-3xl font-bold leading-10 text-secondary max-md:text-3xl max-sm:text-2xl">
              Our Approach:
            </h2>
            <p className="text-lg leading-6 text-zinc-700">
            We leverage data analytics, digital tools, and multi-channel marketing to craft high-impact campaigns. By combining paid search, social media, and email marketing, we drive targeted traffic, boost engagement, and nurture leads with personalized campaigns. Through continuous optimization and performance tracking, we ensure maximum ROI and impactful growth.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutUs;
