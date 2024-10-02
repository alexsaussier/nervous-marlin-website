'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Outside2 from '@/public/images/house/outside2.jpg';
import Outside3 from '@/public/images/house/outside3.jpg';
import Room1 from '@/public/images/house/room1.jpg';
import Paragliding1 from '@/public/images/activities/paragliding1.jpg';
import BeachBiking1 from '@/public/images/activities/beach-biking1.jpg';
import Beach2 from '@/public/images/activities/beach2.jpg';
import Spa1 from '@/public/images/activities/spa1.jpg';
import Fishing1 from '@/public/images/activities/fishing1.jpg';
import Diving1 from '@/public/images/activities/diving1.jpg';
import Night2 from '@/public/images/downtown/night2.jpeg';

const activities = [
  { name: 'Nighttime Activities', description: 'Enjoy the night life of the are, with many restaurants and bars.', image: Night2 },
  { name: 'Paragliding', description: 'Soar over the beautiful Bahian coastline for an unforgettable aerial adventure.', image: Paragliding1 },
  { name: 'Beach Biking', description: 'Explore the pristine beaches on our specially designed beach bicycles.', image: BeachBiking1 },
  { name: 'Spa Treatments', description: 'Relax and rejuvenate with our luxurious spa treatments.', image: Spa1 },
  { name: 'Diving', description: 'Discover the vibrant underwater world of Bahia\'s coral reefs.', image: Diving1 },
  { name: 'Private Excursions', description: 'Enjoy exclusive boat trips to secluded beaches and hidden gems.', image: Beach2 },
];

export default function AccommodationAndActivities() {

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
          <h1 className="text-5xl font-bold mb-4">Fishing, Activities and Accomodation</h1>
          <p className="text-xl">We provide top-tier fishing experiences, and activities for the whole family</p>
        </div>
      </section>


     
          {/* Fishing Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">Expert-Led Blue Marlin Fishing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 max-w-lg mx-auto w-full"> {/* Added max-w-md and mx-auto */}
                  <div className="relative w-full h-0 pb-[66.67%]"> {/* 2:3 aspect ratio */}
                    <Image
                      src={Fishing1}
                      alt="Blue Marlin Fishing"
                      layout="fill"
                      objectFit="cover"
                      className="absolute top-0 left-0 w-full h-full"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-lg transition-opacity duration-300 group-hover:opacity-80">
                    Our local team boasts decades of combined experience in the waters off Bahia, Brazil. Their unparalleled knowledge of the region&apos;s marine ecosystem and Blue Marlin behavior ensures you&apos;re always in the right spot at the right time.
                  </p>
                  <p className="text-lg transition-opacity duration-300 group-hover:opacity-80">
                    We pride ourselves on using only the finest, state-of-the-art fishing equipment. From our custom-built boats to our top-of-the-line rods and reels, every piece of gear is meticulously maintained to guarantee peak performance.
                  </p>
                  
                </div>
              </div>
            </div>
          </section>
        
          {/* Activities Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">

              <h2 className="text-3xl font-bold mb-8 text-center transition-transform duration-300">Exciting Activities for Everyone</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {activities.map((activity, index) => (
                  <div key={index} className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={activity.image} 
                        alt={activity.name} 
                        layout="fill" 
                        objectFit="cover"
                        className="" 
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-600">{activity.name}</h3>
                      <p className="text-lg transition-opacity duration-300 group-hover:opacity-80">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

      {/* Accommodation Section */}
      <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">Our guest house, right on the beach</h2>
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
