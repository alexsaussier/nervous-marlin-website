//PAge dedicated to accomodation
'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Outside1 from '@/public/images/house/outside1.jpg';
import Outside2 from '@/public/images/house/outside2.jpg';
import Outside3 from '@/public/images/house/outside3.jpg';
import Outside4sun from '@/public/images/house/outside4sun.jpg';
import Outside5sun from '@/public/images/house/outside5sun.jpg';
import Room1 from '@/public/images/house/room1.jpg';
import Bathroom1 from '@/public/images/house/z_bathroom1.jpg';
import Fishing1 from '@/public/images/activities/fishing1.jpg';
import Hero from '@/components/Hero';

export default function Accommodation() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSlideChange = useCallback((e, targetSlide) => {
    e.preventDefault();
    const target = document.querySelector(targetSlide);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  }, []);

  

  return (
    <div className="font-sans">
      <Hero
        imageSrc={Fishing1}
        title="Accommodation"
        subtitle="We provide splendid accommodation, right on the beach"
      />
      
      {/* Accommodation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Beachfront Lodge</h2>
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
                <div className="relative overflow-hidden " style={{ paddingTop: '75%' }}> {/* 4:3 aspect ratio */}
                <Image
                    src={Outside4sun}
                    alt="Lodge Exterior"
                    fill
                    className="object-cover object-center"
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
                <div className="relative overflow-hidden" style={{ paddingTop: '75%' }}> {/* 4:3 aspect ratio */}
                    <Image
                        src={Outside2}
                        alt="Lodge Interior"
                        fill
                        className="object-cover object-center"
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

  

    
    {/* Carousel and Description Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Carousel */}
          <div className="w-full lg:w-1/2">
            <div className="carousel w-full rounded-xl overflow-hidden shadow-xl max-w-lg mx-auto">
              
              <div id="slide1" className="carousel-item relative w-full snap-start">
                <div className="w-full h-96 relative">
                  <Image
                    src={Outside4sun}
                    alt="Sunny Exterior"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <button onClick={(e) => handleSlideChange(e, '#slide6')} className="btn btn-circle">❮</button>
                  <button onClick={(e) => handleSlideChange(e, '#slide2')} className="btn btn-circle">❯</button>
                </div>
              </div>

              <div id="slide2" className="carousel-item relative w-full snap-start">
                <div className="w-full h-96 relative">
                  <Image
                    src={Outside5sun}
                    alt="Sunny Exterior View"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <button onClick={(e) => handleSlideChange(e, '#slide1')} className="btn btn-circle">❮</button>
                  <button onClick={(e) => handleSlideChange(e, '#slide3')} className="btn btn-circle">❯</button>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full snap-start">
                <div className="w-full h-96 relative">
                  <Image
                    src={Outside2}
                    alt="Outside2"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <button onClick={(e) => handleSlideChange(e, '#slide2')} className="btn btn-circle">❮</button>
                  <button onClick={(e) => handleSlideChange(e, '#slide4')} className="btn btn-circle">❯</button>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full snap-start">
                <div className="w-full h-96 relative">
                  <Image
                    src={Outside3}
                    alt="Outside3"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <button onClick={(e) => handleSlideChange(e, '#slide3')} className="btn btn-circle">❮</button>
                  <button onClick={(e) => handleSlideChange(e, '#slide5')} className="btn btn-circle">❯</button>
                </div>
              </div>
              <div id="slide5" className="carousel-item relative w-full snap-start">
                <div className="w-full h-96 relative">
                  <Image
                    src={Room1}
                    alt="Room1"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <button onClick={(e) => handleSlideChange(e, '#slide4')} className="btn btn-circle">❮</button>
                  <button onClick={(e) => handleSlideChange(e, '#slide6')} className="btn btn-circle">❯</button>
                </div>
              </div>
              <div id="slide6" className="carousel-item relative w-full snap-start">
                <div className="w-full h-96 relative">
                  <Image
                    src={Bathroom1}
                    alt="Bathroom"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <button onClick={(e) => handleSlideChange(e, '#slide5')} className="btn btn-circle">❮</button>
                  <button onClick={(e) => handleSlideChange(e, '#slide1')} className="btn btn-circle">❯</button>
                </div>
              </div>
            </div>
          </div>

          {/* Lodge Description */}
          <div className="w-full lg:w-1/2">
            <p className="text-lg mb-4">
              Experience the perfect blend of comfort and natural beauty at our beachfront lodge. Nestled right on the shores of Bahia, our accommodation offers a unique and unforgettable stay for fishing enthusiasts and nature lovers alike.
            </p>
            <p className="text-lg mb-2">
              Our lodge features:
            </p>
            <ul className="list-disc list-inside text-lg mb-4">
              <li>Accomodation for up to 13 people</li>
              <li>Swimming pool, jacuzzi, bar and pool table</li>
              <li>Modern amenities for a comfortable stay</li>
              <li>Proximity to prime fishing spots and local attractions</li>
            </ul>
            <p className="text-lg mb-4">
              We accomodate private groups with at least 5 people in this house. We can also accomodate smaller groups in another beautfiul lodge in the area, with a stunning view on the ocean. 
            </p>
            <p className="text-lg">
              You can make your fishing trip with your whole family, friends and wife; during your fishing day the non-anglers have a lot of activities that are included in the daily price.</p>
          </div>
        </div>
      </div>
    </section>


      
    </div>
  );
}