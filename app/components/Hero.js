import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      const offset = 60;
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  const handleMobileNavClick = () => {
    setIsOpen(prev=>false)
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 60;
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: 'smooth',
      });
    }
  };
  

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      className="min-h-screen bg-no-repeat bg-cover bg-center flex flex-col"
      id="home"
    >
      <div
        className={`w-full bg-white fixed gap-2 lg:px-28 px-8 flex justify-between items-center z-50 py-4 transition-all duration-300 delay-100 ease-in-out  ${
          isNavScrolled ? "py-4 shadow-lg" : "py-6"
        }`}
      >
      <img
        src="/logo3.svg"
        className="w-[120px]"
        />
      
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
              <button
                key={item.id}
                className={`hover:text-secondary cursor-pointer text-lg transition-all duration-300 ease-in-out ${
                  activeSection === item.id ? "text-secondary" : "text-black"
                } `}
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <button className="hidden lg:block text-white text-lg bg-secondaryalt rounded-lg cursor-pointer px-4 py-2"
        onClick={scrollToContact}
        >
          Get Started
        </button>

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
              <button className="text-textblack"
              onClick={() => {
                setIsOpen(false);
                scrollToSection("home");
              }}
              >
                Home
              </button>
              <button className="text-textblack"
              onClick={() => {
                setIsOpen(false);
                scrollToSection("about");
              }}
              >
                About Us
              </button>
              <button className="text-textblack"
              onClick={() => {
                setIsOpen(false);
                scrollToSection("services");
              }}
              >
                Services
              </button>
              <button className="text-textblack"
              onClick={() => {
                setIsOpen(false);
                scrollToSection("advertiser");
              }}
              >
                Advertiser
              </button>
              <button className="text-textblack"
              onClick={() => {
                setIsOpen(false);
                scrollToSection("publisher");
              }}
              >
                Publisher
              </button>
              <button className="text-textblack"
              onClick={() => {
                setIsOpen(false);
                scrollToSection("contact");
              }}
              >
                Contact Us
              </button>
              <button className="text-white bg-secondaryalt rounded-lg cursor-pointer px-6 py-3 mt-4"
              onClick={handleMobileNavClick}
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>

      <div className="grow text-white flex pt-20 flex-col lg:flex-row gap-5 mx-auto overflow-hidden">
        <div className="h-full my-auto lg:w-[50%] lg:pr-0 md:px-24 px-8 flex flex-col gap-4 justify-center items-start">
          <div className="md:text-6xl text-3xl font-semibold max-md:text-center text-primary">
            Maximize your ROI with data-driven performance marketing
          </div>
          <div className="md:text-xl text-lg text-secondaryalt max-md:text-center">
            Drive results through smart strategies, optimized campaigns, and
            actionable insights. Let us help you reach your marketing goals.
          </div>
          <button className="text-white bg-secondaryalt md:text-base max-md:self-center text-sm rounded-md cursor-pointer px-8 py-3"
          onClick={scrollToContact}
          >
            Get Started
          </button>
        </div>
        <div className="w-full lg:w-[40%] max-w-full self-center">
          <img
            src={`/heroImage.svg`}
            className="object-contain w-full h-auto max-h-[450px]"
            />
        </div>
      </div>
    </section>
  );
}
