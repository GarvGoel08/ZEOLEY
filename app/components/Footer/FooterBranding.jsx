import React from "react";
import FooterCopyright from "./FooterCopyright";

const FooterBranding = () => {
  return (
    <section className="flex flex-col gap-3.5">
      <img
      src="/logo3.svg"
      className="w-[150px] object-fill"

      />
      <p className="text-base max-w-[298px] text-textblack max-md:max-w-full">
        Maximize Your ROI with Data-Driven Performance Marketing
      </p>
      <FooterCopyright/>
    </section>
  );
};

export default FooterBranding;