import React from "react";

const ResultsHeader = () => {
  return (
    <header className="flex flex-col items-center mb-16">
      <h2 className="text-5xl font-semibold leading-tight text-center text-primary max-md:text-4xl max-sm:text-3xl">
        Proven Results for Our Clients
      </h2>
      <p className="mt-6 text-lg font-bold leading-7 text-center text-zinc-500 tracking-[6px] max-md:text-base max-md:tracking-[6px] max-sm:text-sm max-sm:tracking-[4px]">
        See how our performance-driven approach has transformed businesses
      </p>
    </header>
  );
};

export default ResultsHeader;
