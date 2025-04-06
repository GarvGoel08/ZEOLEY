import React from "react";

const FooterLinks = ({ title, links }) => {
  return (
    <nav className="flex flex-col gap-6">
      <h3 className="text-2xl font-bold text-textblack">{title}</h3>
      <ul className="flex flex-col gap-5 text-base text-textblack">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="hover:text-secondary transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterLinks;