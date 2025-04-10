import React from "react";
import Link from "next/link";
import TermsAndConditions from "../TermsAndConditions";

const FooterLinks = ({ title, links }) => {
  return (
    <nav className="flex flex-col gap-6">
      <h3 className="text-2xl font-bold text-textblack">{title}</h3>
      <ul className="flex flex-col gap-5 text-base text-textblack">
        {/* {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="hover:text-secondary transition-colors">
              {link}
            </a>
          </li>
        ))} */}
        <li>
          <a href="#" className="hover:text-secondary transition-colors">
            About Us
          </a>
        </li>
        <li>
          <Link href={'/privacy-policy'} className="hover:text-secondary transition-colors">
            <span>Privacy Policy</span>
          </Link>
        </li>
        <li>
          <Link href={'/terms-conditions'} className="hover:text-secondary transition-colors">
            <span>Terms & Conditions</span>
          </Link>
        </li>
        <li>
          <a href={'mailto:business@zeoley.com'} className="hover:text-secondary transition-colors">
            Careers
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterLinks;