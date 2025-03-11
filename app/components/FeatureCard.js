"use client";
import React from "react";

const FeatureCard = ({ image, altText, title, description }) => {
  return (
    <article className="overflow-hidden rounded shadow-sm bg-neutral-100 w-[426px] max-md:w-[calc(50%_-_10px)] max-sm:w-full">
      <img
        src={image}
        alt={altText}
        className="object-cover w-full h-[266px]"
      />
      <div className="p-5">
        <h3 className="mb-3 text-2xl font-bold text-black max-sm:text-xl">
          {title}
        </h3>
        <p className="text-xl leading-7 text-black max-sm:text-base max-sm:leading-6">
          {description}
        </p>
      </div>
    </article>
  );
};

export default FeatureCard;
