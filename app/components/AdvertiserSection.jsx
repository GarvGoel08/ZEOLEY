"use client"
import React from 'react'
import Image from 'next/image'

function AdvertiserSection() {
  return (
    <section id='advertiser' className='flex flex-col gap-4 my-10 mx-5 md:mx-30'>
      <div className='flex flex-col md:flex-row justify-center gap-10'>
        <div className='w-full md:w-2/3 flex flex-col justify-center gap-5'>
            <h2 className='text-primary font-poppins max-md:self-center text-3xl font-medium'>
                Advertiser
            </h2>
            <p className='text-gray-400 text-base font-poppins'>
            Promote your brand with precision—locally or globally. At Zeoley, we offer tailored advertising solutions to maximize your reach and ROI. Choose from diverse marketing options designed to deliver impactful results and make every ad spend count.
            </p>
            <a className='text-primary text-base hover:text-blue-400 transition-all duration-75 font-poppins max-md:self-center' href='#contact'>
                Join Us
            </a>
        </div>
        <div className='w-full md:w-1/3'>
            <Image
                src={"/Publisher/1.svg"}
                alt={"advertiser"}
                width={400}
                height={400}
                className="object-contain aspect-auto px-4"
            />
        </div>

      </div>
      <div className='flex flex-col md:flex-row justify-center gap-10'>
      <div className='w-full md:w-1/3'>
            <Image
                src={"/Publisher/2.svg"}
                alt={"advertiser"}
                width={400}
                height={400}
                className="object-contain aspect-auto px-4"
            />
        </div>
        <div className='w-full md:w-2/3 flex flex-col justify-center gap-5'>
            <h2 className='text-primary font-poppins max-md:self-center text-3xl font-medium'>
                Publisher
            </h2>
            <p className='text-gray-400 text-base font-poppins'>
            Unlock new revenue streams with Zeoley’s premium client network across every genre. We help you connect with the most relevant advertisers to maximize your earnings potential. Our data-driven approach ensures top eCPMs, higher fill rates, and consistent ad performance.
            </p>
            <a className='text-primary text-base hover:text-blue-400 transition-all duration-75 font-poppins max-md:self-center' href='#contact'>
                Join Us
            </a>
        </div>


      </div>
    </section>
  )
}

export default AdvertiserSection
