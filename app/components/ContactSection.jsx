"use client";
import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <section id="contact" className="overflow-hidden relative bg-no-repeat bg-cover bg-bottom w-full" 
    style={{
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/ContactUs.png')",
    }}>

      <div className="relative px-5 py-10 mx-auto my-0 max-w-[1440px]">
        <div className="flex mx-auto my-0 max-w-[1227px] max-md:flex-col">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
