//PAge dedicated to accomodation
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Outside1 from '@/public/images/house/outside1.jpg';
import Outside2 from '@/public/images/house/outside2.jpg';
import Outside3 from '@/public/images/house/outside3.jpg';
import Room1 from '@/public/images/house/room1.jpg';
import Bathroom1 from '@/public/images/house/z_bathroom1.jpg';
import Fishing1 from '@/public/images/activities/fishing1.jpg';



export default function Accommodation() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src={Fishing1}
          alt="Bahia Coast"
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}

        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Splendid Accomodation</h1>
          <p className="text-xl">We provide splendid accomodation, right on the beach</p>
        </div>
      </section>
     
      {/* Accommodation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our lodge, right on the beach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Outside2 Image */}
            <div className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative overflow-hidden">
                <Image
                    src={Room1}
                    alt="Lodge Exterior"
                    width={400}
                    height={300}
                />
                </div>
                <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-600">
                    Luxurious Comfort
                </h3>
                <p className="text-lg transition-opacity duration-300 group-hover:opacity-80">
                    Our lodge offers comfortable and stylish accommodations, designed to provide a relaxing retreat after a day of fishing or exploring.
                </p>
                </div>
            </div>

            {/* Outside3 Image */}
            <div className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative overflow-hidden">
                <Image
                    src={Outside3}
                    alt="Lodge Exterior"
                    width={400}
                    height={300}
                />
                </div>
                <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-600">
                    Modern Amenities
                </h3>
                <p className="text-lg transition-opacity duration-300 group-hover:opacity-80">
                    Enjoy modern amenities and spacious living areas, perfect for unwinding and sharing stories of your fishing adventures.
                </p>
                </div>
            </div>

            {/* Room1 Image */}
            <div className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative overflow-hidden">
                <Image
                    src={Outside2}
                    alt="Lodge Interior"
                    width={400}
                    height={300}
                />
                </div>
                <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-600">
                    Breathtaking Views
                </h3>
                <p className="text-lg transition-opacity duration-300 group-hover:opacity-80">
                    Wake up to stunning ocean views and lush landscapes, immersing yourself in the natural beauty of Bahia.
                </p>
                </div>
            </div>
            </div>
        </div>
    </section>


      
    </div>
  );
}
