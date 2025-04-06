"use client";
import React from "react";

const FeatureCard = ({ image, altText, title, description }) => {
  return (
    <article className="overflow-hidden rounded shadow-sm bg-neutral-100 w-[320px] max-md:w-[calc(50%_-_10px)] max-sm:w-full">
      <img
        src={image}
        alt={altText}
        className="object-cover w-full h-[200px]"
      />
      <div className="p-5">
        <h3 className="mb-3 text-xl font-bold text-textblack max-sm:text-lg">
          {title}
        </h3>
        <p className="text-lg leading-7 text-textblack max-sm:text-base max-sm:leading-6">
          {description}
        </p>
      </div>
    </article>
  );
};

export default FeatureCard;
