"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css'
import { Autoplay,Navigation } from 'swiper/modules';



export default function OurClients(){
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
            <h2 className="my-12 text-5xl font-semibold font-poppins text-center text-primary max-md:text-4xl max-sm:mb-8 max-sm:text-3xl">
                Our Clients
            </h2>
            <div className="flex mx-20 my-10">

            <Swiper 
                slidesPerView={5}
                slidesPerGroup={1}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 500, // Slides will change every 500ms
                    disableOnInteraction: false, // Keeps autoplay running after interaction
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