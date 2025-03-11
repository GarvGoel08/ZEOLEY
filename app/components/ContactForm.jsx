"use client";
import React from "react";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="grow p-10 bg-white max-md:w-full max-sm:p-5">
      <form onSubmit={handleSubmit} className="mx-auto my-0 max-w-[782px]">
        <FormInput label="Name" type="text" placeholder="E.g. John" required />
        <FormInput
          label="Email Address"
          type="email"
          placeholder="E.g. john@doe.com"
          required
        />
        <FormInput
          label="Phone Number"
          type="tel"
          placeholder="E.g. +1 3004005000"
        />
        <FormTextArea label="Message" placeholder="Enter your message..." />

        <div className="flex gap-2.5 items-center mb-5">
          <input
            type="checkbox"
            id="authorize"
            className="w-4 h-4 rounded-sm bg-[#2c3e50]"
          />
          <label htmlFor="authorize" className="text-xs text-stone-500">
            I Authorize Zeoley to send notifications via
            SMS/RCS/Call/Email/Whatsapp
          </label>
        </div>

        <button
          type="submit"
          className="px-8 py-2.5 mx-auto my-0 w-48 text-lg text-white cursor-pointer bg-primary border-[none] max-sm:w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
