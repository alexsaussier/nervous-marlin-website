'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import all images from the accommodation folder
function importAll(r) {
  return r.keys().map(r);
}

const accommodationImages = importAll(require.context('../../public/images/house', false, /\.(png|jpe?g|svg)$/));

const activities = [
  { name: 'Blue Marlin Fishing', description: 'Experience world-class blue marlin fishing in the crystal-clear waters of Bahia.', image: '/images/fishing.jpg' },
  { name: 'Paragliding', description: 'Soar over the beautiful Bahian coastline for an unforgettable aerial adventure.', image: '/images/paragliding.jpg' },
  { name: 'Beach Biking', description: 'Explore the pristine beaches on our specially designed beach bicycles.', image: '/images/beach-biking.jpg' },
  { name: 'Spa Treatments', description: 'Relax and rejuvenate with our luxurious spa treatments.', image: '/images/spa.jpg' },
  { name: 'Diving', description: 'Discover the vibrant underwater world of Bahia\'s coral reefs.', image: '/images/diving.jpg' },
  { name: 'Private Excursions', description: 'Enjoy exclusive boat trips to secluded beaches and hidden gems.', image: '/images/excursion.jpg' },
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
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Accommodation and Activities</h1>
          
          {/* Accommodation Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-center mb-8">Your Luxurious Stay</h2>
            <div className="max-w-3xl mx-auto" data-aos="fade-up">
              <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000}>
                {accommodationImages.map((img, index) => (
                  <div key={index}>
                    <Image src={img.default} alt={`Accommodation ${index + 1}`} width={800} height={600} objectFit="cover" />
                  </div>
                ))}
              </Carousel>
            </div>
            <p className="text-center mt-6 text-lg">Experience comfort and luxury in our beautifully appointed accommodations.</p>
          </div>

          {/* Activities Section */}
          <div>
            <h2 className="text-3xl font-semibold text-center mb-8">Exciting Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
                  <Image src={activity.image} alt={activity.name} width={400} height={300} objectFit="cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
                    <p>{activity.description}</p>
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
