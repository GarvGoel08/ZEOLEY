"use client";
import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="overflow-hidden  w-full">
      <div className="relative px-5 py-10 mx-auto my-0 max-w-[1440px]">
        <div className="flex mx-auto my-0 max-w-[1350px] max-md:flex-col">
          <ContactForm />
          <img src="/ContactUs.png" alt="Contact Us" className="xl:w-[550px] w-[450px] h-auto object-contain lg:block hidden" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
