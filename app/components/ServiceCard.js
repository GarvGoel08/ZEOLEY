"use client";
import React from "react";

const ServiceCard = ({ image, title, description }) => {
  return (
    <article className="flex flex-col items-center p-8 py-12 bg-white rounded-3xl shadow-lg hover:shadow-secondary transition-all duration-300 ease-in-out">
      <img src={image} alt="" className="w-[80px] h-[80px] mb-[30px]" />
      <h2 className="mb-5 text-3xl text-center text-black max-md:text-3xl max-sm:text-3xl">
        {title}
      </h2>
      <p className="mb-10 text-lg text-center text-black max-md:text-base">
        {description}
      </p>
    </article>
  );
};

export default ServiceCard;
