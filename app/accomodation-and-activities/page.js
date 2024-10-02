'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './carousel.css';
import Outside2 from '@/public/images/house/outside2.jpg';
import Outside3 from '@/public/images/house/outside3.jpg';
import Room1 from '@/public/images/house/room1.jpg';
import Paragliding1 from '@/public/images/activities/paragliding1.jpg';
import BeachBiking1 from '@/public/images/activities/beach-biking1.jpg';
import Beach2 from '@/public/images/activities/beach2.jpg';
import Spa1 from '@/public/images/activities/spa1.jpg';
import Fishing1 from '@/public/images/activities/fishing1.jpg';
import Diving1 from '@/public/images/activities/diving1.jpg';

const activities = [
  { name: 'Blue Marlin Fishing', description: 'Experience world-class blue marlin fishing in the crystal-clear waters of Bahia.', image: Fishing1 },
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
      <section className="pt-28 bg-gray-100">
        <div className="container mx-auto px-4">
          
          {/* Accommodation Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center transition-transform duration-300 hover:scale-105">Our guest house, right on the Beach</h2>
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

          {/* Activities Section */}
          <div className="py-16">
            <h2 className="text-3xl font-bold mb-8 text-center transition-transform duration-300">Exciting Activities</h2>
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
        </div>
      </section>
    </div>
  );
}
