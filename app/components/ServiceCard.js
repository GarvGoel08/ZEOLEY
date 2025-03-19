"use client";
import React from "react";

const ServiceCard = ({ image, title, description }) => {
  return (
    <article className="flex flex-col p-6 py-8 shadow-sm bg-neutral-100 rounded-3xl transition-all duration-300 ease-in-out">
      <div className="flex flex-row items-start mb-2 gap-6 max-sm:flex-col">
        <img
          src={image}
          alt=""
          className="w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[40px] max-md:w-[40px] max-md:h-[40px]"
        />
        <div>
          <h2 className="text-2xl font-semibold text-center text-black max-md:text-xl max-sm:text-lg">
            {title}
          </h2>
          <p className="text-base max-sm:text-sm  text-black max-md:text-base">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
