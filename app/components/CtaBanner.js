"use client";
import React from "react";

const CtaBanner = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
    id="CTA"
      className="flex inset-0 mt-6 flex-col justify-center items-center bg-no-repeat bg-center bg-cover h-[300px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/ctabanner.jpg')",
      }}
    >
      <h2 className="px-5 mb-5 text-4xl font-poppins font-semibold text-center text-white max-md:text-4xl max-sm:text-3xl">
        Request a Custom Marketing Plan
      </h2>
      <button
        className="px-8 py-2.5 text-lg font-poppins text-white bg-primary hover:cursor-pointer hover:bg-slate-800"
        aria-label="Request a custom marketing plan"
        onClick={scrollToContact}
      >
        Request
      </button>
    </section>
  );
};

export default CtaBanner;
