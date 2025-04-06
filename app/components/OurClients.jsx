"use client"
import { useState,useEffect } from "react";
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css'
import { Autoplay,Navigation } from 'swiper/modules';



export default function OurClients(){
    const [wth,setWth] = useState(768);

    useEffect(()=>{
        if (typeof window !== 'undefined') {
            const handleResize = () => setWth(window.innerWidth);
            window.addEventListener('resize', handleResize);
        
            return () => window.removeEventListener('resize', handleResize);
        }
    },[])

    const clients = [
        { name: "Amazon", logo: "/Clients/1.png" },
        { name: "Myntra", logo: "/Clients/2.svg" },
        { name: "Parimatch", logo: "/Clients/3.png" },
        { name: "RummyPassion", logo: "/Clients/4.png" },
        { name: "Dream11", logo: "/Clients/5.png" },
        { name: "Motilal Oswal", logo: "/Clients/6.png" },
        { name: "Zepto", logo: "/Clients/7.png" },
        { name: "Navi", logo: "/Clients/8.png" },
      ]
    

    return (
        <div>
            <h2 className="my-12 text-5xl font-semibold text-center text-primary max-md:text-4xl max-sm:mb-8 max-sm:text-3xl">
                Our Clients
            </h2>
            <div className="flex mx-5 md:mx-20 my-10">

            <Swiper 
                slidesPerView={wth>640?6:3}
                slidesPerGroup={1}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 500, // Slides will change every 500ms
                    disableOnInteraction: false, 
                }}
                modules={[Navigation ,Autoplay]}
                className="mySwiper">

                {
                    clients.map((client,index)=>(
                        <SwiperSlide key={index}>
                            <Image
                            src={client.logo || "/placeholder.svg"}
                            alt={client.name}
                            width={160}
                            height={80}
                            className="object-contain px-4"
                            />

                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </div>
    )
}