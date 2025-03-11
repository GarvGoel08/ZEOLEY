import React from 'react'
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="h-screen bg-no-repeat bg-cover bg-center flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/hero.png')",
      }}
    >
      <div className="w-full lg:px-28 px-8 flex justify-between items-center py-4 relative">
        <p className="text-secondary font-geist-mono text-4xl">ZEOLEY</p>
        <div className="hidden lg:flex flex-row gap-12">
          <a href="#" className="text-secondary">Home</a>
          <a href="#" className="text-white">About Us</a>
          <a href="#" className="text-white">Services</a>
          <a href="#" className="text-white">Portfolio</a>
          <a href="#" className="text-white">Contact Us</a>
        </div>
        <button className="hidden lg:block text-white bg-primary rounded-lg cursor-pointer px-4 py-2">
          Get Started
        </button>

        <button className="lg:hidden text-white text-3xl" onClick={() => setIsOpen(true)}>
          <FiMenu />
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
            <button className="absolute top-6 right-6 text-3xl text-black" onClick={() => setIsOpen(false)}>
              <FiX />
            </button>
            <nav className="flex flex-col items-center gap-6 text-xl font-semibold">
              <a href="#" className="text-black">Home</a>
              <a href="#" className="text-black">About Us</a>
              <a href="#" className="text-black">Services</a>
              <a href="#" className="text-black">Portfolio</a>
              <a href="#" className="text-black">Contact Us</a>
              <button className="text-white bg-primary rounded-lg cursor-pointer px-6 py-3 mt-4">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>

      <div className="grow text-white">
        <div className="h-full lg:w-[60%] lg:pr-0 md:px-24 px-8 flex flex-col gap-4 justify-center items-start">
          <div className="md:text-6xl text-3xl font-semibold">
            Maximize Your ROI with Data-Driven Performance Marketing
          </div>
          <div className="md:text-xl text-lg mt-2 text-secondary">
            Drive results through smart strategies, optimized campaigns, and actionable insights. Let us help you reach your marketing goals.
          </div>
          <button className="text-white bg-primary md:text-base text-sm rounded-md cursor-pointer px-8 py-2 mt-4">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  )
}
