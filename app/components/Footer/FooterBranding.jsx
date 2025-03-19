import React from "react";
import FooterCopyright from "./FooterCopyright";

const FooterBranding = () => {
  return (
    <section className="flex flex-col gap-3.5">
      <h2 className="text-5xl font-bold text-amber-500 max-md:text-4xl max-sm:text-3xl">
        ZEOLEY
      </h2>
      <p className="text-base max-w-[298px] text-stone-200 max-md:max-w-full">
        Maximize Your ROI with Data-Driven Performance Marketing
      </p>
      <FooterCopyright/>
    </section>
  );
};

export default FooterBranding;