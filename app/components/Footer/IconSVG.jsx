"use client";
import React from "react";


const IconSVG = ({ svg, className }) => {
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
      aria-hidden="true"
    />
  );
};

export default IconSVG;
