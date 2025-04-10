"use client";
import React, { useState } from "react";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    mail: "",
    pnumber: "",
    msg: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // Handle form submission
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Email sent successfully!");
        alert("Email sent successfully!");
        console.log(message);
        setFormData({
          fname: "",
          mail: "",
          pnumber: "",
          msg: "",
        });
      } else {
        setMessage(data.message || "Failed to send email");
        console.log(message);
        alert(message);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.log(message);
      alert(message);
    }

    setLoading(false);
  };

  return (
    <div className="grow p-10 bg-white max-md:w-full max-sm:p-5">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="mx-auto my-0 max-w-[782px]">
        <FormInput
          label="Name"
          type="text"
          value={formData.fname}
          handleChange={(e) => {
            setFormData({ ...formData, fname: e.target.value });
          }}
          placeholder="E.g. John"
          required
        />
        <div className="flex flex-col sm:flex-row gap-2">
          <FormInput
            label="Email Address"
            type="email"
            value={formData.mail}
            handleChange={(e) => {
              setFormData({ ...formData, mail: e.target.value });
            }}
            placeholder="E.g. john@doe.com"
            required
          />
          <FormInput
            label="Phone Number"
            type="tel"
            value={formData.pnumber}
            handleChange={(e) => {
              setFormData({ ...formData, pnumber: e.target.value });
            }}
            placeholder="E.g. +1 3004005000"
          />
        </div>
        <FormTextArea
          label="Message"
          value={formData.msg}
          handleChange={(e) => {
            setFormData({ ...formData, msg: e.target.value });
          }}
          placeholder="Enter your message..."
        />

        <div className="flex gap-2.5 items-center mb-5">
          <input
            type="checkbox"
            id="authorize"
            className="w-4 h-4 rounded-sm bg-[#2c3e50]"
          />
          <label htmlFor="authorize" className="text-sm text-stone-500">
            I Authorize Zeoley to send notifications via
            SMS/RCS/Call/Email/Whatsapp
          </label>
        </div>

        <button
          type="submit"
          className="px-8 py-2 mx-auto my-0 w-48 text-base text-white cursor-pointer bg-secondaryalt border-[none] max-sm:w-full"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
