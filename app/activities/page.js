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
import Paragliding2 from '@/public/images/activities/paragliding2.jpg';
import Paragliding3 from '@/public/images/activities/paragliding3.jpg';
import BeachBiking1 from '@/public/images/activities/beach-biking1.jpg';
import BeachBiking2 from '@/public/images/activities/beach-biking2.jpg';
import BeachBiking3 from '@/public/images/activities/beach-biking3.jpg';
import Beach1 from '@/public/images/activities/beach1.jpg';
import Beach2 from '@/public/images/activities/beach2.jpg';
import Beach3 from '@/public/images/activities/beach3.jpg';
import Beach4 from '@/public/images/activities/beach4.jpg';
import Beach5 from '@/public/images/activities/beach5.jpg';
import Spa1 from '@/public/images/activities/spa1.jpg';
import Fishing1 from '@/public/images/activities/fishing1.jpg';
import Diving1 from '@/public/images/activities/diving1.jpg';
import Diving2 from '@/public/images/activities/diving2.jpg';
import Diving3 from '@/public/images/activities/diving3.jpg';
import Diving4 from '@/public/images/activities/diving4.jpg';
import Diving5 from '@/public/images/activities/diving5.jpg';
import Night1 from '@/public/images/downtown/night1.jpeg';
import Night2 from '@/public/images/downtown/night2.jpg';
import Night3 from '@/public/images/downtown/night3.jpg';
import Night4 from '@/public/images/downtown/night4.jpg';
import Night5 from '@/public/images/downtown/night5.jpg';
import Night6 from '@/public/images/downtown/night6.jpg';
import Night7 from '@/public/images/downtown/night7.jpg';
import Night8 from '@/public/images/downtown/night8.jpg';
import Quad1 from '@/public/images/activities/quad1.jpg';
import Quad2 from '@/public/images/activities/quad2.jpg';

import Hero from '@/components/Hero';
import Link from 'next/link';

const activities = [
  
  { name: 'Private Excursions', 
    description: 'We take our ATVs to go through the beautiful brazilian jungle and appear on the top of the cliffs, enjoying the amazing view of the blue Atlantic Ocean and its coral. After the ride we head for lunch to a beach club with great food and live music.\nWe also lead you on boat excursion to visit different beaches in the area, with a spectacular lunch on the beach.',
    slug: 'private-excursions',
    images: [Beach2, Beach1, Beach3, Beach4, Beach5, Quad1, Quad2] 
  },
  { name: 'Paragliding', 
    slug: 'paragliding',
    description: 'You will be paragliding with Ricardo, he is the 2024 champion paraglider in the state of Bahia, he gives the most spectacular flight over the beautiful cliff with an amazing view of the Atlantic Ocean and reefs.',
    images: [Paragliding1, Paragliding2, Paragliding3] 
  },
  { name: 'Scuba Diving', 
    description: 'We dive at the Royal Charlotte Bank, the largest coral bank in Brazil with the biggest variety of coral, marine fauna. The extension is of 65 miles and 9500 foot deep (3000 mts.) and connects with another Bank called Albrolhos. it was discovered in 2023 by a program of Petrobras.', 
    slug: 'scuba-diving',
    images: [Diving1, Diving2, Diving3, Diving4, Diving5] 
  },
  { name: 'Beach Biking', 
    description: 'We do it during the low tide, visiting lagoons that connect with the ocean, and making a stop at Lagoa Azul restaurant on the way back to enjoy a nice fresh drink and snack.',
    slug: 'beach-biking',
    images: [BeachBiking1, BeachBiking2, BeachBiking3] 
  },
  { name: 'Spa Treatments', 
    description: 'Relax and rejuvenate with our luxurious spa treatments. We select the best local spas for you to spend half or full days of relaxation.',
    slug: 'spa-treatments',
    images: [Spa1] 
  },
  { 
    name: 'Nighttime Activities', 
    slug: 'nighttime-activities',
    description: "The nightlife in Arraial d'Ajuda has been growing in the last few years. It has great restaurants that serve local cuisine, and international (European & Argentinian) bars serving excellent drinks. 'Le Fantastique Monde de Benjamin' is a restaurant inspired from the 1920's, with waiters dressed like back in the days. Every night, you can come enjoy delicious cuisine and live music with Rock bands, Blues, Jazz, and Tango Shows.",
    images: [Night1, Night2, Night3, Night4, Night5, Night6, Night7, Night8] 
  },
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
      
      <Hero
        imageSrc={Paragliding2}
        title="Activities"
        subtitle="We lead you on unforgettable activities for the whole family"
        objectPosition="40%"
      />

          {/* Non-Fishers Activities Section */}
          <section className="py-16 bg-gray-200 text-gray-800">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Activities for Non-Fishers</h2>
                <p className="text-xl leading-relaxed mb-8">
                  We understand that not everyone in your group may be an angler. That&apos;s why we have curated an extensive selection of local activities to ensure everyone has an unforgettable experience. 
                </p>
                <p className="text-xl leading-relaxed">
                You pick the activities that you would like to experience, and we create the program for you. 
                We manage the booking and transport, and all the activities are included in our daily pricing.
                You will be accompanied by a trilingual host and guide.
                </p>
              </div>
            </div>
          </section>

        
          {/* Activities Section */}
          <section className="py-16 bg-white text-gray-800">
            <div className="container mx-auto px-4">

              <h2 className="text-3xl font-bold mb-8 text-center transition-transform duration-300">Exciting Activities for Everyone</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {activities.map((activity, index) => (
                  <Link href={`/activities/${activity.slug}`} key={index}>
                    <div className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                      <div className="relative h-48 overflow-hidden">
                        <Image 
                          src={activity.images[0]} 
                          alt={activity.name} 
                          layout="fill" 
                          objectFit="cover"
                          className="" 
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-600">{activity.name}</h3>
                        <p className="text-lg transition-opacity duration-300 group-hover:opacity-80 line-clamp-3">{activity.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

      
    </div>
  );
}

// Make sure to export the activities array
export { activities };
