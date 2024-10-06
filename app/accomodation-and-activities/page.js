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
  { name: 'Nighttime Activities', 
    description: "The nightlife in Arraial d'Ajuda has been growing in the last few years. It has great restaurants that serve local cuisine, and international (European & Argentinian) bars serving excellent drinks. 'Le Fantastique Monde de Benjamin' is a restaurant inspired from the 1920's, with waiters dressed like back in the days. Every night, you can come enjoy delicious cuising and live music with Rock bands, Blues, Jazz, and Tango Shows.", image: Night2 },
  { name: 'Paragliding', 
    description: 'You will be paragliding with Ricardo, he is the 2024 champion paraglider in the state of Bahia, he gives the most spectacular flight over the beautiful cliff with an amazing view of the Atlantic Ocean and reefs.', image: Paragliding1 },
  { name: 'Beach Biking', 
    description: 'We do it during the low tide, visiting lagoons that connect with the ocean, and making a stop at Lagoa Azul restaurant on the way back to enjoy a nice fresh drink and snack.', image: BeachBiking1 },
  { name: 'Spa Treatments', 
    description: 'Relax and rejuvenate with our luxurious spa treatments.', image: Spa1 },
  { name: 'Diving', 
    description: 'We dive at the Royal Charlotte Bank, the largest coral bank in Brazil with the biggest variety of coral, marine fauna. The extension is of 65 miles and 9500 foot deep (3000 mts.) and connects with another Bank called Albrolhos. it was discovered in 2023 by a program of Petrobras.', image: Diving1 },
  { name: 'Private Excursions', 
    description: 'We take our four-wheel drive to go through the beautiful brazilian jungle and appear on the top of the cliffs, enjoying the amazing view of the blue Atlantic Ocean and coral. After the ride we head for lunch to a beach club with great food and live music.\nWe also lead you on boat excursion to visit different beaches in the area, with a spectacular lunch on the beach.', image: Beach2 },
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
          <h1 className="text-5xl font-bold mb-4">Accomodation and Activities</h1>
          <p className="text-xl">We provide splendid accomodation and unforgettable activities for the whole family</p>
        </div>
      </section>


     
          
        
          {/* Activities Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">

              <h2 className="text-3xl font-bold mb-8 text-center transition-transform duration-300">Exciting Activities for Everyone</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
