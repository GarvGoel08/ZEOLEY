"use client";
import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <section id="contact" className="overflow-hidden relative w-full min-h-screen" 
    style={{
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/ContactUs.png')",
    }}>

      <div className="relative px-5 py-16 mx-auto my-0 max-w-[1440px]">
        <header className="mb-16 text-center">
          <h1 className="mb-5 text-5xl font-semibold text-white max-sm:text-3xl">
            Let's Work Together
          </h1>
          <p className="mx-auto my-0 max-w-6xl text-lg font-medium text-zinc-300 max-sm:text-base">
            Ready to elevate your marketing performance? Reach out to us for a
            free consultation and find out how we can help you grow.
          </p>
        </header>

        <div className="flex mx-auto my-0 max-w-[1227px] max-md:flex-col">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
