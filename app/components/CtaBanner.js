"use client";
import React from "react";

const CtaBanner = () => {
  return (
    <section
    id="CTA"
      className="flex inset-0 mt-6 flex-col justify-center items-center bg-no-repeat bg-center bg-cover h-[366px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/ctabanner.jpg')",
      }}
    >
      <h2 className="px-5 mb-9 text-5xl font-bold text-center text-white max-md:text-4xl max-sm:text-3xl">
        Request a Custom Marketing Plan
      </h2>
      <button
        className="px-8 py-2.5 text-lg text-white bg-primary"
        aria-label="Request a custom marketing plan"
      >
        Request
      </button>
    </section>
  );
};

export default CtaBanner;
