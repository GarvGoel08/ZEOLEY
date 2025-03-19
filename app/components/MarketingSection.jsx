"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Landmark, Gamepad2, Car, ShoppingCart, Home, ShoppingBag } from "lucide-react"

export default function MarketingSection() {
 
  

  const marketingSolutions = [
    {
      icon: <Landmark className="h-10 w-10 text-amber-500" />,
      title: "BFSI",
      content:
        "Data-driven marketing that builds trust, enhances customer engagement, and drives conversions in the financial sector.",
    },
    {
      icon: <Gamepad2 className="h-10 w-10 text-amber-500" />,
      title: "iGaming",
      content:
        "Targeted campaigns that boost player acquisition, retention, and engagement with real-time insights and precision marketing.",
    },
    {
      icon: <Car className="h-10 w-10 text-amber-500" />,
      title: "Automobile",
      content:
        "Accelerate brand visibility and drive sales with hyper-personalized digital strategies tailored for the auto industry.",
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-amber-500" />,
      title: "E-Commerce",
      content:
        "Optimize customer journeys, increase conversions, and maximize ROI with performance-driven e-commerce marketing.",
    },
    {
      icon: <Home className="h-10 w-10 text-amber-500" />,
      title: "Real Estate",
      content:
        "Capture high-intent buyers and investors with data-backed targeting and lead-generation strategies that deliver results.",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-amber-500" />,
      title: "FMCG",
      content:
        "Drive brand awareness, customer loyalty, and sales through high-impact, data-driven marketing strategies.",
    },
  ]

  const integrationPartners = [
    { name: "Branch", logo: "/Integrated/1.svg" },
    { name: "Affise", logo: "/Integrated/2.jpg" },
    { name: "Singular", logo: "/Integrated/3.png" },
  ]



  return (
    <div className="relative w-full py-20 px-4 md:px-8 lg:px-16 bg-cover bg-center"
    style={{
      backgroundImage: "url('/building.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
    {/* White overlay */}
    <div className="absolute inset-0 bg-white opacity-90"></div>
      {/* Marketing Solutions Section */}
      <section >
    
        <div className="relative container mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-primary text-center mb-16">
            Smart Marketing Solutions for Every Market
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-gray-100">{solution.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{solution.title}</h3>
                  <p className="text-gray-600">{solution.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partners Section */}
      <section className="relative left-0 w-full py-12 px-4 bg-white mt-10 md:px-8 lg:px-16 ">
        <div className="container bg-white ">
          <h3 className="text-4xl font-semibold text-center text-primary mb-10">Integrated with</h3>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {integrationPartners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="object-contain aspect-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}


      {/* Clients Section */}
    //   <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
    //     <div className="container mx-auto">
    //       <h3 className="text-2xl font-semibold text-center mb-10">Our Clients:</h3>

    //       <div className="relative overflow-hidden" style={{ height: "80px" }}>
    //         <div
    //           ref={sliderRef}
    //           className="flex transition-all duration-500 ease-in-out"
    //           style={{
    //             transform: `translateX(calc(-${activeIndex * 20}% - ${clients.length * 20}%))`,
    //             width: `${clients.length * 3 * 20}%`, // Triple the width for the infinite loop
    //           }}
    //         >
    //           {getInfiniteLogos().map((client, index) => (
    //             <div
    //               key={index}
    //               className="flex justify-center items-center px-4"
    //               style={{ width: "20%" }} // 5 logos at a time = 20% width each
    //             >
    //               <Image
    //                 src={client.logo || "/placeholder.svg"}
    //                 alt={client.name}
    //                 width={120}
    //                 height={60}
    //                 className="object-contain aspect-auto"
    //               />
    //             </div>
    //           ))}
    //         </div>
    //       </div>

          {/* Slider dots */}
          {/* <div className="flex justify-center mt-6 gap-2">
            {clients.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${activeIndex === index ? "bg-amber-500" : "bg-gray-300"}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section> */}
