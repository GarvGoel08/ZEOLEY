"use client"

import React from 'react'
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from 'next/link';

function Header() {
    
    const [isOpen, setIsOpen] = useState(false);
    const scrollToSection = (href) => {
    }


    const handleMobileNavClick = () => {
        setIsOpen(prev=>false)
      }
  return (
    <div className={`w-full bg-white fixed gap-2 lg:px-28 px-8 flex justify-between items-center z-50 py-4 shadow-lg`}
              >
            <Link href='/'>

              <img
                src="/logo3.svg"
                className="w-[160px]"
                />
            </Link>
              
                <div className="hidden lg:flex flex-row">
                  <nav className="flex flex-row flex-wrap items-center gap-10">
                    {[
                      { id: "home", label: "Home" },
                      { id: "about", label: "About Us" },
                      { id: "services", label: "Services" },
                      { id: "advertiser", label: "Advertiser" },
                      { id: "publisher", label:"Publisher" },
                      { id: "contact", label: "Contact Us" },
                    ].map((item) => (
                      <Link
                        key={item.id}
                        href='/'
                        className={`hover:text-secondary cursor-pointer text-lg transition-all duration-300 ease-in-out text-black`}
                        
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
                <Link href={'/'}>
                <button className="hidden lg:block text-white text-lg bg-secondaryalt rounded-lg cursor-pointer px-4 py-2"
                
                >
                  Get Started
                </button>
                </Link>
        
                <button
                  className="lg:hidden text-primary text-3xl"
                  onClick={() => setIsOpen(true)}
                >
                  <FiMenu />
                </button>
        
                {isOpen && (
                  <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
                    <button
                      className="absolute top-6 right-6 text-3xl text-black"
                      onClick={handleMobileNavClick}
                    >
                      <FiX />
                    </button>
                    <nav className="flex flex-col items-center gap-6 text-xl font-semibold">
                      <Link href={'/'}>
                      <button className="text-textblack"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToSection("home");
                      }}
                      >
                        Home
                      </button>
                      </Link>
                      <Link href={'/'}>
                      <button className="text-textblack"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToSection("about");
                      }}
                      >
                        About Us
                      </button>
                      </Link>
                      <Link href={'/'}>
                      <button className="text-textblack"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToSection("services");
                      }}
                      >
                        Services
                      </button>
                      </Link>
                      <Link href={'/'}>
                      <button className="text-textblack"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToSection("advertiser");
                      }}
                      >
                        Advertiser
                      </button>
                      </Link>
                      <Link href={'/'}>
                      <button className="text-textblack"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToSection("publisher");
                      }}
                      >
                        Publisher
                      </button>
                      </Link>
                      <Link href={'/'}>
                      <button className="text-textblack"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToSection("contact");
                      }}
                      >
                        Contact Us
                      </button>
                      </Link>
                      <Link href={'/'}>
                      <button className="text-white bg-secondaryalt rounded-lg cursor-pointer px-6 py-3 mt-4"
                      onClick={handleMobileNavClick}
                      >
                        Get Started
                      </button>
                      </Link>
                    </nav>
                  </div>
                )}
              </div>
  )
}

export default Header
