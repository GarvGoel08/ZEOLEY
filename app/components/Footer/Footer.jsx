"use client";
import React from "react";
import FooterBranding from "./FooterBranding";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  const companyLinks = [
    "About Us",
    "Privacy Policy",
    "Terms & Conditions",
    "Careers",
  ];

  return (
    <footer id="footer-section" className="px-28 py-10 w-full bg-slate-100 max-md:px-10 max-sm:px-5">
      <div className="flex justify-between max-md:flex-col max-md:gap-10">
        <FooterBranding />
        <FooterLinks title="Company Info" links={companyLinks} />
        <FooterContact />
        <FooterSocial />
      </div>
    </footer>
  );
};

export default Footer;
