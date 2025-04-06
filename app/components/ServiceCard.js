"use client";
import React from "react";

const ServiceCard = ({ image, title, description }) => {
  return (
    <article className="flex flex-col p-4 md:p-6 md:py-6 shadow-sm hover:shadow-secondary hover:shadow-lg bg-neutral-100 rounded-3xl transition-all duration-300 ease-in-out">
      <div className="flex flex-row items-start mb-2 gap-2 md:gap-6 max-sm:flex-col">
        <img
          src={image}
          alt=""
          className="w-[50px] h-[50px] self-center "
        />
        <div className="flex flex-col items-start max-md:items-center">
          <h2 className="text-2xl font-semibold max-md:text-center text-textblack max-md:text-xl max-sm:text-lg">
            {title}
          </h2>
          <p className="text-base max-md:text-center max-sm:text-sm text-textblack max-md:text-base">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};
// max-sm:w-[40px] self-center max-sm:h-[40px] max-md:w-[40px] max-md:h-[40px]
export default ServiceCard;
